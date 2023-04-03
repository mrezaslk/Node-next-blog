import React, { Component } from 'react'

class BigImg extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="handle-component">
                            <div className="main-handle-component-bigimg">
                                <div className="for-image">
                                    <img src={this.props.imageId} alt="" className="edit-img-contact-us" />
                                </div>
                                <div className="title-and-btn-bigimg">
                                    <span className="main-text-edit-bigimg">Question about Metatrine?</span>
                                    <button className="main-button-edit-bigimg">Ask Question</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BigImg;
