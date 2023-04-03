import React, { Component } from 'react'

class ImgwithText extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0">
                    <div className="col-8 p-0 m-0">
                        <div className="image-handle-bigger">
                            <img src="assets/images/26.jpeg" alt="" className="edit-image-handle-with-text" />
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#f6f6f6' }} className="col-4 p-0 m-0">
                        <div className="for-text-component">
                            <span className="txt-first-comp">Update</span>
                            <span className="bigger-title">An update on today’s Supreme Court verdict</span>
                            <span className="another-txt-comp">Find out what the Supreme Court verdict means for you.</span>
                            {/* <span className="date-in-the-end">February19</span> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ImgwithText;
