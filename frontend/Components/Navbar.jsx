import React, { Component } from 'react'
import Link from 'next/link';
import Modal from './Modal';
import HttpServices from '../utils/Http.services';



class Navbar extends Component {

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


        console.log(this.state.click);

        return (
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">

                    <Link href="/" className="navbar-logo" >
                        <img src={"/assets/images/m-Logo.png"} onClick={() => this.closeMobileMenu()} alt="" className="logo-main-nav" />
                    </Link>

                    <div className="menu-icon" onClick={() => this.handleClick()}>
                        <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <div className="item-for-menu">
                        <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link href='/blogs' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a>
                                        Blogs
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href='#services' className='nav-links' onClick={() => this.closeMobileMenu()}>




                                    <a>

                                        our services
                                    </a>


                                </a>



                            </li>

                            <li className="nav-item">
                                <Link href='/portfolio' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a>

                                        Portfolios
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/aboutus' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a>

                                        Who we are
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/contactus' className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a >

                                        Contact us
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={""} className='nav-links' onClick={() => this.closeMobileMenu()}>
                                    <a style={{ color: '#C0D764', fontWeight: 'bold' }} onClick={() => this.showDetail()}>

                                        Req a QUOTE
                                    </a>
                                </Link>

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


export default Navbar;



