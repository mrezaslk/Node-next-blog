import React, { Component } from 'react'
import Link from 'next/link';
import Modal from './Modal';

class Footer extends Component {

    showQue() {
        this.showReq.showModal()
    }
    render() {
        return (
            <div className="contain-ff">
                <div className="wrapper-for-contain-ff">
                    <div className="for-logo-text">
                        <img src="/assets/images/m-Logo.png" alt="" className="logo-footer-second" />
                    </div>
                    <div className="for-nav-item">
                        <ul className="nav-footer">

                            <li className="nav-item-aa">About us
                                <ul className="under-footer-second">
                                    <Link href={"/aboutus/"}><li className="content-cc">Why METATRINE </li></Link>
                                   <a href='#weWork'><li className="content-cc">How we work</li></a> 
                                    <Link href={"/contactus/"}><li className="content-cc">Contact us</li></Link>

                                </ul>
                            </li>
                            <li className="nav-item-aa">Development
                                <ul className="under-footer-second">
                                    <a href='#Tech'><li className="content-cc">Technology Expertise</li></a>
                                    <li onClick={() => this.showQue()} className="content-cc">Req a queote</li>
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
                                                    <button id="cancel-id">cancel</button>
                                                    <button id="send-id">send</button>
                                                </div>
                                            </div>

                                        </div>

                                    </Modal>
                                    <Link href={"/portfolio"}><li onClick={() => this.showQue()} className="content-cc">Portfolio</li></Link>


                                    {/* <li className="content-cc">Programming</li>
                                    <li className="content-cc">UI</li>
                                    <li className="content-cc">UX</li> */}
                                </ul>
                            </li>
                            <li className="nav-item-aa">Blog
                                <ul className="under-footer-second">
                                    <li className="content-cc">Technical SEO</li>
                                    <li className="content-cc">Off-site SEO</li>
                                    <li className="content-cc">On-site SEO</li>
                                    <li className="content-cc">SEO Audits</li>
                                    <li className="content-cc">Email Marketing</li>
                                </ul>
                            </li>
                            <li className="nav-item-aa">Support
                                <ul className="under-footer-second">
                                    <a href="#faq"><li className="content-cc">FAQ</li></a>
                                    {/* <li className="content-cc">SEO Reports</li> */}
                                    {/* <li className="content-cc">Website Maintenance</li> */}
                                </ul>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="social-item">
                    <div className="just-item-social">
                        <i className='fab fa-instagram test-insta' />
                        <i className='fab fa-twitter' />
                        <i className='fab fa-linkedin' />
                    </div>
                </div>

                <div className="text-under-social-item">
                    <div className="main-content-item">
                        <ul className="content-item">
                            {/* <li className="content-cc">PRIVACY</li>
                            <li className="content-cc">NOTICE</li>
                            <li className="content-cc">TERMS & CONDITIONS</li>
                            <li className="content-cc">ABOUT</li>
                            <li className="content-cc">STATUS</li> */}

                            <span id="new-text">© 2021 Metatrine SOFTWARE INC. ALL RIGHTS RESERVED</span>
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}

export default Footer;




