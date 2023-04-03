import React, { Component } from 'react'

class ImageComp extends Component {
    render() {
        return (
            <>
                <div className="container p-0 my-5">
                    <div className="row">
                        <div className="handle-component">
                            <div className="main-handle-component">
                                <div className="for-image">
                                    <img src={this.props.imageId} alt="" className="edit-img-contact-us" />
                                </div>
                                <div className="title-and-btn">
                                    <span className="main-text-edit">￼METATRINE is an agency for design and development to grow your business</span>
                                    <button className="main-button-edit" >Click to learn more</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default ImageComp;
