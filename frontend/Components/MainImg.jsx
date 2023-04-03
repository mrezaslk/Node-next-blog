import React, { Component } from 'react';

class MainImg extends Component {


    render() {


        return (
            <>
                <div className='hero-container'>
                    {/* <img src='images/img-home.jpg' alt="" /> */}
                    <img src={this.props.imageId} alt="" className="about-us-img" />

                    <h1 style={{textAlign:'center',fontSize:40,maxWidth:700}}>Metatrine is an agency for design, development and marketing to grow your business</h1>
                    {/* <p>What are you waiting for?</p> */}



                    <div className='hero-btns'>

                        {/* <button
                            className='btns'
                        >
                            SEE OUR PORTFOLIO <i className='far fa-play-circle' />
                        </button> */}
                    </div>
                    <div className="sticky-butt">
                        <button
                            className='callbtn'

                        >
                            <i className='fab fa-whatsapp' /> Call
                        </button>
                    </div>
                    {/* <div className="sticky-insta">

                        <i className='fab fa-instagram' style={{ color: '#fff' }} />

                    </div> */}


                </div>



            </>
        );
    }
}

export default MainImg;
