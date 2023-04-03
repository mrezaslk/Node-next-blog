import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import Modal from './Modal';

class MainBackground extends Component {


    showDetail() {

        this.showReq.showModal();
        console.log("test")
    }

    render() {

        return (
            <section className='first-section'>
                <div className="first-wrapper">
                    <div className="main-slider">
                        <div className="main-item-slider">
                            <img src={this.props.imageId} alt="" className="just-for-img" />



                            <div className="content-for-img">
                                {/* <button className='btcc-for-design'>design solution</button> */}
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString("<h1 id='text-main-h'>HAVE A DREAM, MAKE A PLAN, GO FOR IT.</h1>").start();
                                    }}


                                />



                                {/* <h1 id="text-main-h">HAVE A DREAM, MAKE A PLAN, GO FOR IT.</h1> */}
                                {/* <div className="line-shape"></div> */}
                                {/* <p className='text-under-ui'>We understand the effect a great brand story can have with its audience, but we also understand the trust and affinity that can only come with great design.

                                </p> */}
                            </div>

                        </div>

                    </div>

                </div>
                <div className="sticky-butt-getintouch"  >
                    <button className='callbtn-getintouch'
                        onClick={() => this.showDetail()}
                    >
                        Get in Touch
                    </button>


                </div>
                <div className="sticky-butt">
                        <button
                            className='callbtn'

                        >
                            <i className='fab fa-whatsapp' /> Call
                        </button>
                    </div>
                <Modal ref={el => this.showReq = el} maxWidth={1000}>

                    <div className="main-question">
                        <div className="title-for-question">
                            <h3>Tell us about your project</h3>
                        </div>
                        <div className="for-input-question">
                            <input type="text" placeholder="Name ?" className="input-edit-question" />
                            <input type="text" placeholder="Email ?" className="input-edit-question" />

                            <input type="text" placeholder="Phone number ?" className="input-edit-question" />
                            <textarea name="" id="" cols="40" rows="1" placeholder="Message ?" className="text-area-edit-question" >

                            </textarea>
                        </div>
                        <div className="for-btn-handle">
                            <div className="row-with-button">
                                <button onClick={()=>this.showReq.hideModal()} id="cancel-id" >cancel</button>
                                <button id="send-id">send</button>
                            </div>
                        </div>

                    </div>

                </Modal>
            </section>
        )
    }
}


export default MainBackground;





