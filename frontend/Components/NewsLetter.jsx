import React, { Component } from 'react'
import Link from 'next/link';

class NewLetter extends Component {

    state = {
        comp: [
            {
                img: 'assets/images/23.jpeg',
                title: 'Things to do on your trip',
                btn: 'experiences',
            },
            {
                img: 'assets/images/23.jpeg',
                title: 'Things to do on your trip',
                btn: 'online experiences',
            },
        ],
    }

    render() {
        return (
            <>
                <div className="container test-margin">
                    <div className="title-head-container">
                        <h2 className="title-text-card ">Discover Metatrine Experiences</h2>
                    </div>

                    <div className="row">


                        <div className="col-xl-6 p-0 d-none d-sm-block">
                            <div className="handle-bigcard-items">
                                <div className="use-for-image-newletter">
                                    <img src={this.props.imageId} alt="" className="newsletter-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 p-0 border-fix" style={{ backgroundColor: '#000' }}>
                            <div className="handle-bigcard-items-back">
                                <div className="for-text-and-btn-subscribe">
                                    <span className="edit-new-letter-sign-up">Sign up for our Project </span>
                                    <span className="edit-enter-email">Enter your email to receive the latest news and updates from Metatrine.</span>
                                    <Link href={'/contactus'}><button className="sub-new-letter">Contact Us</button></Link>
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </>

        )
    }
}


export default NewLetter;
