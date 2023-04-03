import React, { Component } from 'react'

 class ProfileAbout extends Component {
    render() {
        return (
            <div className="container test-border">
                <div className="row align-items-cente">
                    <div className="col-xl-6 d-flex align-item-center">
                        <div className="handle-title-profile">
                            <h3>We’re here if you need us</h3>
                            <span>Your business requirements and demands along with constructive feedback from your customers, will influence the kind of web application you should construct - to increase brand visibility and customer base, driving your revenue up.</span>
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex justify-content-center">
                        <div className="handle-img">
                            <img src={this.props.imageId} alt="" className="edit-img-profile" />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default ProfileAbout;
