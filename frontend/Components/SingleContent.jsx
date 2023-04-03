import React, { Component } from 'react'

class SingleContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="handle-content">
                        <div className="col-12">
                            <div className="title-single-page">
                                <h4>Learn New Skills Live from the Experts in December</h4>
                            </div>
                            <div className="row for-border">
                                <div className="col-9">
                                    <div className="handle-date-and-des">
                                        <span style={{ color: '#50A887' }}>Zoë Kelsey</span>
                                        <span>
                                            Life-Long Learner | Pint Sized Punch | Ambitious Thinker/Executor | Health Enthusiast
                                        </span>
                                        <span>
                                            November 30, 2021
                                        </span>
                                    </div>
                                </div>
                                <div className="col-3 d-flex align-item-center justify-content-end">
                                    <div className="social-media-icon">
                                        <i className="fab fa-instagram icon-social"></i>
                                        <i className="fab fa-twitter icon-social"></i>
                                        <i className="fab fa-youtube icon-social"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="image-for-each-blog">

                                <img src="assets/images/4.jpeg" alt="" className="edit-content-img" />

                            </div>
                            <div className="for-content-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque doloremque at repellat saepe quam velit officiis similique in. Sunt, soluta! Quo fugit fuga dolores nobis nostrum itaque dignissimos vitae ratione delectus officia vero labore, dicta ab rerum. Porro repudiandae sint veniam architecto optio officia labore quas! Quidem earum, nostrum aliquam ipsam sequi dignissimos maxime quas. Saepe ex corporis, facere dolores in commodi, quod voluptates, alias adipisci eaque libero quasi rerum voluptatibus obcaecati eos sequi blanditiis a omnis. Eius quos, earum esse molestias odio aperiam cupiditate amet, corrupti eum ducimus eveniet delectus, maxime expedita rem enim impedit omnis! Est deserunt libero, sunt ut vitae temporibus obcaecati, culpa nisi fugiat explicabo quibusdam sapiente nam, qui numquam unde nulla architecto aperiam error? Fuga!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SingleContent;