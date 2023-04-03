import React, { Component } from 'react'

class MainBody extends Component {
    render() {
        return (
            <>
                <div className="container py-2">
                    <div className="row">
                        <main className="main">
                            <div className="for-main-div">
                                <div className="img-div-box d-none d-xl-block"></div>
                                <div className="img-div-box-third d-none d-xl-block">
                                    <div className="for-title-body">
                                        <span className="first-title">{this.props.textfirst}</span>
                                        <span className="second-title">{this.props.title}</span>
                                        {/* <button>{this.props.btn}</button> */}
                                    </div>
                                </div>
                                <div className="img-div-box-second">
                                    <img src={this.props.imageId} alt="" className="edit-body-image" />
                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </>
        )
    }
}

export default MainBody;
