import React from 'react';

import Link from 'next/link';



export const ImageCard = () => {
    return (
        <div className="container">
            <div className="wrapper ">
            <div className="card-text-title">
                        <h2 className="card-text-inner">Metatrine </h2>
                        <p className="card-text-inner-para">  Industries we serve or Technology expertis </p>

                    </div>

                <div className="card-image-main">
                    <div className="row">
                    <div className="col-lg-6 col-sm-12  card-image-content">
                        <div className="card-image-content-with-img">
                            <div className="img-card-box">
                                <img src="/assets/images/testimg.jpg" alt="" className="img-card-svg" />
                            </div>
                            <div className="content-card-box">
                                <div className="content-card-box-inner">
                                <h4>Digital Growth Specialists</h4>
                                <p className="txt-content-card-para">
                                We are passionate about uncovering new digital marketing opportunities and making the most of them in a measurable way</p>
                                    {/* <div className="small-card-icon">
                                        <div className="small-card-txt-icon">
                                        <i class="fab fa-audible"></i>
                                            <span> 5 lesson</span>
                                        </div>
                                        <div className="small-card-txt-icon">
                                        <i class="fas fa-clock cardimg"></i>
                                            <span>1h 26m</span>
                                        </div>
                                    </div> */}
                                    <div className="btn-for-small-card">
                                    <div className="small-btn-inner">
                                {/* <i class="far fa-play-circle"></i> */}
                                <Link href={"/"}>
                                <button  className="start-btn">Start Now</button>
                                </Link>
                                </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6card-image-content for-edits">
                    </div> */}

                    <div className="col-lg-6 col-sm-12 card-image-content">
                        <div className="card-image-content-with-img">
                            
                            <div className="content-card-box order-main">
                                <div className="content-card-box-inner">
                                <h4>Making growth potential</h4>
                                <p className="txt-content-card-para">
                                We will help your business scale, grow and reach new destinations through the power of connecting your offer to your customer.</p>
                                    {/* <div className="small-card-icon">
                                        <div className="small-card-txt-icon">
                                        <i class="fab fa-audible"></i>
                                            <span> 5 lesson</span>
                                        </div>
                                        <div className="small-card-txt-icon">
                                        <i class="fas fa-clock cardimg"></i>
                                            <span>1h 26m</span>
                                        </div>
                                    </div> */}
                                    <div className="btn-for-small-card">
                                    <div className="small-btn-inner">
                                {/* <i class="far fa-play-circle"></i> */}
                                <Link href={'/'}>
                                <button  className="start-btn">Start Now</button>
                                </Link>
                                </div>
                                    </div>
                                    </div>
                            </div>
                            <div className="img-card-box order">
                                <img src="/assets/images/2.jpeg" alt="" className="img-card-svg" />
                            </div>
                        </div>
                    </div>
                 
                    
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default ImageCard;