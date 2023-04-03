import React, { Component } from 'react'

class CardBox extends Component {

    state = {
        // cardBox: [
        //     {
        //         question: 'on-Demand',
        //         img:'/assets/images/on-demand.png',

        //     },
        //     {
        //         question: 'e-Commerce',
        //         img:'/assets/images/shopping-online.png',

        //     },
        //     {
        //         question: 'Finance',
        //         img:'/assets/images/growth.png',

        //     },
        //     {
        //         question: 'Game',
        //         img:'/assets/images/joystick.png',

        //     },
        //     {
        //         question: 'Healthcare',
        //         img:'/assets/images/healthcare.png',

        //     },
        //     {
        //         question: 'Restaurant',
        //         img:'/assets/images/cutlery.png',

        //     },
        //     {
        //         question: 'Real estate',
        //         img:'/assets/images/house.png',

        //     },
        //     {
        //         question: 'Tour & Travels',
        //         img:'/assets/images/travelling.png',

        //     },
        //     {
        //         question: 'Education',
        //         img:'/assets/images/classroom.png',

        //     },
        //     {
        //         question: 'Transport',
        //         img:'/assets/images/transportation.png',

        //     },
        //     {
        //         question: 'Event',
        //         img:'/assets/images/planner.png',

        //     },
        //     {
        //         question: 'Grocery',
        //         img:'/assets/images/grocery.png',

        //     },
        //     // {
        //     //     question: 'how do i know anything ? its just a question',
        //     //     img:'',

        //     // },
        //     // {
        //     //     question: 'how do i know anything ? its just a question',
        //     //     img:'',

        //     // },
        //     // {
        //     //     question: 'how do i know anything ? its just a question',
        //     //     img:'',

        //     // },
        //     // {
        //     //     question: 'how do i know anything ? its just a question',
        //     //     img:'',

        //     // },
        //     // {
        //     //     question: 'how do i know anything ? its just a question',
        //     //     img:'',

        //     // },
        // ]
    }
    render() {
        return (
            <div className="container py-0 for-margin-bottom-test">
                <div className="row align-items-center">
                    <div className="title-for-card-box">
                        <h4>Industries We Serve</h4>
                    </div>
                </div>
                <div className="row test-padding">
                    {this.props.products.map((prop, index) => {
                        return (
                            <div key={index} className="col-xl-3 col-lg-6 col-md-12   my-2 test-align">
                                <div className="box-card w-100">
                                    {/* <img src={prop.img} className='edit-icon-industries' /> */}
                                    <span>{prop._id}</span>
                                    <span>{prop.name}</span>
                                    <span>{prop.description}</span>
                                    {/* <span className="svg-icon d-none d-sm-block"><i className="fas fa-chevron-right chev-icon"></i></span> */}
                                </div>
                            </div>

                        )
                    })}



                </div>




            </div>
        )
    }
}

export default CardBox;
