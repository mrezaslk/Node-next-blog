import React, { Component } from 'react'

class ContactPage extends Component {





    render() {




        return (
            <>
                <div className="container-fluid py-0 px-0 my-0 mx-0" style={{ backgroundColor: '#107355' }}>
                    <div className="row py-0 px-0 my-0 mx-0 ">
                        <div className="col-xl-6 p-0 d-none d-sm-block">
                            <div className="handle-img">
                                <img src="/cover/c-12.jpeg" alt="" className="edit-img-contact" />
                            </div>
                        </div>
                        <div className="col-xl-6" style={{ backgroundColor: '#107355' }}>
                            <div className="handle-text-contact" style={{padding:'20px 30px 70px 30px'}}>
                                <span className="text-title">Contact us</span>
                                {/* <span className="text-title-sec">Our door is always open for a good cup of coffee.</span> */}
                                {/* <div className="second-box"> */}
                                <span className="text-title-third">Want to find out how metatrine can solve problems specific to your business ? Let’s talk.</span>
                                <a className="edit-to-link" href="tel:989197977838"><span style={{ color: '#fff', cursor: 'pointer' }}><img src='/assets/images/phone-s.png' style={{width:'25px',marginRight:10,filter:"invert(100%)"}} /> +989 900 900 847 </span></a>
                                <a className="edit-to-link" href="tel:989197977838"><span style={{ color: '#fff', cursor: 'pointer' }}><img src='/assets/images/phone-call.png' style={{width:'25px',marginRight:10,filter:"invert(100%)"}} /> +989197977838</span></a>
                                <a className="edit-to-link" href="tel:989352475369"><span style={{ color: '#fff', cursor: 'pointer' }}><img src='/assets/images/phone-call.png' style={{width:'25px',marginRight:10,filter:"invert(100%)"}} /> +989352475369</span></a>
                                <a className="edit-to-link" href="mailto:metatrine@info.com"><span  style={{ color: '#fff', cursor: 'pointer' }}><img src='/assets/images/placeholder.png' style={{width:'25px',marginRight:10,filter:"invert(100%)"}} /> north kargar St, Tehran university, nextera co-work, Tehran, Iran</span>
                                </a>
                                {/* <a className="edit-to-link" href="tel:989197977838"><span style={{ color: '#fff', cursor: 'pointer' }}>Contact us : +98 919 797 7838</span>
                                </a>
                                <a className="edit-to-link" href="tel:989197977838"><span style={{ color: '#fff', cursor: 'pointer' }}>Contact us : +98 919 797 7838</span>
                                </a> */}
                                <a className="edit-to-link-sec" href="mailto:metatrine@info.com"><span style={{ color: '#E1E987', }}><img src='/assets/images/email.png' style={{width:'25px',marginRight:10,filter:"invert(100%)"}} /> metatrine@info.com</span>
                                </a>
                               
                                <div className="for-social-media">
                                <i className="fab fa-linkedin contact-icon"></i>
                                <i className="fab fa-twitter contact-icon"></i>
                                <i style={{ color: '#fff' }} className="fab fa-facebook contact-icon"></i>

                                    <i className="fab fa-instagram contact-icon"></i>
                                    {/* <i  className="fab fa-youtube contact-icon"></i> */}
                                </div>
                                {/* </div> */}
                            </div>
                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default ContactPage;
