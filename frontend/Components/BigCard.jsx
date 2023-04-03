import React, { Component } from 'react'

class BigCard extends Component {

    state = {
        comp: [
            {
                img: 'assets/images/2.jpeg',
                title:'about us',
                // title: 'Our culture',
                btn: 'Learn More',
                des:`The Metatrine team works towards making a big dream come true with the help of its young, 
                experienced, motivated and experts. 
                We believe every big achievement was once a small idea on paper. With that in mind, we started turning 
                our idea into reality in hopes of being well-known in our area of expertise.
                You could find the details of our services in the designated parts of our website and social media pages. 
                Our customer support team will gladly answer every question you have via the website and social 
                media.`
            },
            {
                img: 'assets/images/2.jpeg',
                // title:'about us',
                title: 'Our culture',
                btn: 'Learn More',
                des:`Our motto is that instead of writing long sentences , we do what we’re best.
                Our values are targeted towards reaching well-defined goals. We are bound to honesty, cherish discipline and care about every project. Metatrine will reach its organizational goals with the help of its perfectionist and hard-working experts who work towards getting the best possible results. 
                Our competitive advantage is mixing creativity with our knowledge in order to deliver what we have promised.
                We have designed our strategies according to the needs of small, medium sized and big companies. You can contact us via website and social media to find and chooses the best growth strategy for your business.`
            },
            {
                img: 'assets/images/2.jpeg',
                // title:'about us',
                title: 'Why metatrine?',
                btn: 'Learn More',
                des:`The Metatrine team works towards making a big dream come true with the help of its young, 
                experienced, motivated and experts. 
                We believe every big achievement was once a small idea on paper. With that in mind, we started turning 
                our idea into reality in hopes of being well-known in our area of expertise.
                You could find the details of our services in the designated parts of our website and social media pages. 
                Our customer support team will gladly answer every question you have via the website and social 
                media.`
            },
            {
                img: 'assets/images/25.jpeg',
                title: 'Our team',
                btn: 'About us',
                des:`Teams depend on the personalities of the members, as well as the leadership style of managers. However, the ingredients for what makes a successful team are similar across the board. Having mutual respect, common and aligned goals, open communication, and patience can all help make for a successful team. We are extremely proud of our team here at Metatrine. We ALL work together to make sure every one of our clients receives the attention, service and product they need and deserve`,
            },
        ],
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="title-head-container">
                        <h2 className="title-text-card">Discover Metatrine </h2>
                    </div>

                    <div className="row">
                        {this.state.comp.map((prop, index) => {
                            return (
                                <div className="col-xl-6 col-lg-12 my-2 px-2" key={index}>
                                    <div className="handle-bigcard-items">
                                        <div className="use-for-image" style={{borderRadius:15,overflow:'hidden'}}>
                                            <img src={prop.img} alt="" className="bigcard-img" style={{borderRadius:15,}} />
                                            <div className="for-text-and-button-bigcard h-100" style={{borderRadius:15,backdropFilter: 'blur(30px) saturate(180%)', WebkitBackdropFilter: 'blur(30px) saturate(180%)',}}>
                                                <span>{prop.title}</span>
                                                <p style={{fontSize:'21px',color:'#fff'}}>{prop.des}</p>
                                                {/* <button>{prop.btn}</button> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}




                        {/* <div className="col-6 px-2">
                            <div className="handle-bigcard-items">
                                <div className="use-for-image">
                                    <img src={this.props.imageId} alt="" className="bigcard-img" />
                                </div>
                                <div className="for-text-and-button-bigcard">

                                    <span>Things to do on your trip</span>
                                    <button>experiences</button>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </>

        )
    }
}


export default BigCard;
