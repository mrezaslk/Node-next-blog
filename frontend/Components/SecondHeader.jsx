// import React, { Component } from 'react'
// import Link from 'next/link'
// import Modal from './Modal'

// class SecondHeader extends Component {

//     state = {
//         color: this.props.num,
//         click: false,

//     }

//     showColor(index) {
//         this.setState({ color: index })
//     }

//     showAnyColor(index) {
//         this.setState({ color: index })

//         this.showReq.showModal()
//     }
//     justClick() {
//         this.setState({ click: !this.state.click });

//     }

//     render() {


//         return (
//             <div className="container py-3">
//                 <div className="row justify-content-center">
//                     <div className="for-handle-header-second">
//                         <div style={{position:'relative'}} className="row d-flex align-items-center">
//                         <div className="times-and-bars" onClick={() => this.justClick()}>
//                                 <i className={this.state.click ? 'fas fa-times testing' : 'fas fa-bars testing'} />
//                             </div>

//                             <div className="col-xl-3">
//                                 <div className="for-logo-handle">
//                                     <Link href="/"><img src="assets/images/digimarcon.png" alt="" style={{ cursor: 'pointer' }} className="edit-logo-size" /></Link>
//                                 </div>
//                             </div>
                           
//                             <div className="col-xl-9">

//                                 <ul className={this.state.click ? 'list-header-second active' : 'list-header-second'}>
//                                     <Link href="/aboutus"><li className="item-list-name" style={{ borderBottom: this.state.color == 1 ? '2px solid #222' : '' }} onClick={() => this.showColor(1)}>About us</li></Link>
//                                     <Link href="/ourservice"><li className="item-list-name" style={{ borderBottom: this.state.color == 2 ? '2px solid #222' : '' }} onClick={() => this.showColor(2)}>Our Service</li></Link>
//                                     <Link href="/portfolio"><li className="item-list-name" style={{ borderBottom: this.state.color == 3 ? '2px solid #222' : '' }} onClick={() => this.showColor(3)}>Portfolio</li></Link>
//                                     <Link href="/contactus"><li className="item-list-name" style={{ borderBottom: this.state.color == 4 ? '2px solid #222' : '' }} onClick={() => this.showColor(4)}>Contact Us</li></Link>
//                                     <Link href="/blog"><li className="item-list-name" style={{ borderBottom: this.state.color == 5 ? '2px solid #222' : '' }} onClick={() => this.showColor(5)}>Blog</li></Link>
//                                     <Link href="/faq"><li className="item-list-name" style={{ borderBottom: this.state.color == 6 ? '2px solid #222' : '' }} onClick={() => this.showColor(6)}>FAQ</li></Link>
//                                     <li style={{ color: '#50A887' }} className="item-list-name" style={{ borderBottom: this.state.color == 7 ? '2px solid #222' : '' }} onClick={() => this.showAnyColor(7)}>Req a QUOTE</li>
//                                 </ul>
//                                 <Modal ref={el => this.showReq = el} maxWidth={1000}>

//                                     <div className="main-question">
//                                         <div className="title-for-question">
//                                             <h3>Tell us about your project</h3>
//                                         </div>
//                                         <div className="for-input-question">
//                                             <input type="text" placeholder="Whats your name ?" className="input-edit-question" />
//                                             <input type="text" placeholder="Which email address should we respond to?" className="input-edit-question" />
//                                             <textarea name="" id="" cols="40" rows="1" placeholder="whats your project ?" className="text-area-edit-question" >

//                                             </textarea>
//                                         </div>
//                                         <div className="for-btn-handle">
//                                             <div className="row-with-button">
//                                                 <button id="cancel-id">cancel</button>
//                                                 <button id="send-id">send</button>
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </Modal>

//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }


// export default SecondHeader;


import React, { Component } from 'react'
import Link from 'next/link';
import Modal from './Modal';
import HttpServices from '../utils/Http.services';



class SecondHeader extends Component {

    state = {
        click: false,
        stage: 0

    }


    postForm = () => {

        let body = {
            page:'contact',
            values: {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message,
            }
        }

        HttpServices.request('postContent', body, (fetchResult, fetchError) => {

            if(fetchError){
                return
            }
            this.setState({ stage: 1 })

        })
    }


    closeMobileMenu() {

        this.setState({ click: false });


    }
    handleClick() {
        this.setState({ click: !this.state.click });
    }

    showDetail() {
        this.showReq.showModal();
    }

    componentDidMount() {
        this.closeMobileMenu();
    }

    changeValue = (value, key) => {
        this.setState({ [key]: value })
    }



    render() {


        // console.log(this.state.click);

        return (
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">

                    <Link href="/" className="navbar-logo" >
                        <img src={"/assets/images/m-Logo.png"} onClick={() => this.closeMobileMenu()} alt="" className="logo-main-nav" />
                    </Link>

                    <div className="menu-icon" onClick={() => this.handleClick()}>
                        <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars edit-color'} />
                    </div>

                    <div className="item-for-menu">
                        <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link href='/blogs' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a style={{color:'#222'}}>

                                        Blogs
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                


                                    <Link href={'/'}>

                                    <a href='#services' style={{color:'#222'}}  className='nav-links' onClick={() => this.closeMobileMenu()}>

                                        our services
                                    </a>

                                    </Link>


                              



                            </li>

                            <li className="nav-item">
                                <Link href='/portfolio' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a style={{color:'#222'}}>

                                        Portfolios
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/aboutus' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a style={{color:'#222'}}>

                                        Who We Are
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/contactus' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a style={{color:'#222'}}>

                                        Contact us
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div href={""} className='nav-links cursor-pointer' onClick={() => this.closeMobileMenu()}>
                                    <a style={{ color: '#C0D764', fontWeight: 'bold' }} onClick={() => this.showDetail()}>
                                        Req a QUOTE
                                    </a>
                                </div>

                            </li>

                        </ul>
                        <Modal ref={el => this.showReq = el} maxWidth={1000}>

                            <div className="main-question">
                                {this.state.stage == 0 && (
                                    <>
                                        <div className="title-for-question">
                                            <h3>Tell us about your project</h3>
                                        </div>
                                        <div className="for-input-question">
                                            <input onChange={(e) => this.changeValue(e.target.value, 'name')} type="text" placeholder="Name ?" className="input-edit-question" />
                                            <input onChange={(e) => this.changeValue(e.target.value, 'email')} type="text" placeholder="Email ?" className="input-edit-question" />
                                            <input onChange={(e) => this.changeValue(e.target.value, 'phone')} type="text" placeholder="Phone number ?" className="input-edit-question" />
                                            <textarea onChange={(e) => this.changeValue(e.target.value, 'message')} name="" id="" cols="40" rows="1" placeholder="Message ?" className="text-area-edit-question" >

                                            </textarea>
                                        </div>
                                        <div className="for-btn-handle">
                                            <div className="row-with-button">
                                                <button onClick={() => this.showReq.hideModal()} id="cancel-id">cancel</button>
                                                <button onClick={() => this.postForm()} id="send-id">send</button>
                                            </div>
                                        </div>
                                    </>
                                )}


                                {this.state.stage == 1 && (
                                    <div className='text-center'>
                                        <p>Request submitted successfully</p>
                                        <p>One of our experts will contact you as soon as possible</p>
                                        <button onClick={()=>this.setState({stage:0})} className='px-3' style={{color:'#007aff',backgroundColor:'#007aff10',borderRadius:20}}>Send New Request</button>
                                    </div>
                                )}

                            </div>

                        </Modal>



                    </div>
                </div>
            </nav>
        )
    }
}


export default SecondHeader;




