import React, { Component } from 'react'
import Link from 'next/link';

class DesignImg extends Component {

    state = {
        detail: [
            {
                descri: '',
            },
            {
                descri: 'Help web application you should construct - to increase brand visibility and customer base, driving your revenue up.',
            },

        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="hndle-img-box-design d-none d-sm-block">
                            <img src={this.props.companyImg} alt="" className="edit-design-img" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="for-content-text">
                            <div className="title-and-text-under-it">
                                <h4>{this.props.companyTitle}</h4>
                                <span className="des-txt-design">
                                    {this.props.description}
                                </span>
                                <span className="head-title-design">
                                    Our Service
                                </span>
                            </div>
                           
                                    <div className="how-to-do-any-comp">
                                        <img src="assets/images/tik.svg" alt="" className="tik-icon-svg" />
                                        <span>{this.props.benefit}</span>
                                    </div>
                                    {/* <div className="how-to-do-any-comp">
                                        <img src="assets/images/tik.svg" alt="" className="tik-icon-svg" />
                                        <span>{this.props.benefitSec}</span>
                                    </div> */}
                             

                            <div className="for-btns-design">
                                <Link href={this.props.linkCompany}>
                                    
                                    <a target={"_blank"}>
                                    <button>Take a look</button>
                                    </a>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DesignImg;