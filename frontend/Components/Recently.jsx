import React, { Component } from 'react'

import RecentlyMap from './RecentlyMap';

class Recently extends Component {


    recentCard = [
        {
            header: 'Web development',
            text: `Metatrain is not a web design company! We create a lasting identity

            How many Internet domains do you think have become a lasting name?
            
            Many businesses are in a haste to go online and just start out. Many of them will be removed from the competition very soon. We need a unique, different and valuable identity more than anything else to survive on the web.
            
            Website design does not just mean having a website. We believe that website design means creating a new business in the world of the Internet; Build to stay`,
            img: 'assets/images/coding.png',
        },
        {
            header: 'IOS development',
            text: ` What is iOS app development? iOS application development is the process of making mobile applications for Apple hardware, including iPhone, iPad and iPod Touch. The software is written in the Swift programming language or Objective-C and then deployed to the App Store for users to download`,
            img: 'assets/images/apple.png',

        },
        {
            header: 'Android development',
            text: ` Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible`,
            img: 'assets/images/android.png',

        },
        {
            header: 'UI & UX ',
            text: `Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Metatrine's UI and UX services. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly.`,
            img: 'assets/images/illustration.png',

        },
        {
            header: 'Seo',
            text: `SEO services are search engine optimization services intended to increase visibility and ultimately organic search traffic to websites. Make sure your project gets done on time. Let us help you find the best people out there.`,
            img: 'assets/images/seo.png',

        },
        {
            header: 'Marketing Services',
            text: `: Marketing is the process of persuading potential consumers to buy the organization's product or service. Marketing services are the methods used in the overall marketing plan of production, pricing, promotion and distribution`,
            img: 'assets/images/bullhorn.png',

        },
       
        {
            header: 'Digital Marketing Services',
            text: `Digital marketing services are professional services that help market or advertise your business online, like through search, social media, and paid channels. They focus solely on digital channels versus traditional marketing channels like print or television`,
            img: 'assets/images/social-media.png',

        },
       
        {
            header: 'Graphic Design Services',
            text: `We offer Logo Design, Banner Design, Visual Identity Packages, Business Cards & Business Systems, Brochures & Catalogs, Marketing Materials, Multimedia Presentations, Product Packaging, Signage & Point-of-Sale Materials, Trade Show Booths & Media, etc...`,
            img: 'assets/images/graphic-design.png',

        },
        // {header:'Modals with the TALL',
        //  text:'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia?',
        // img:'assets/card9.png',

        // },
        // {header:'How to Read Code:...',
        //  text:'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia?',
        // img:'assets/card10.png',
        // },
    ]

    // style={{ backgroundImage: `url(${background})` }}

    render() {
        return (
            <div className="container-fluid r m-0 p-0" id='services'>
                <div className="wrapper">
                    <div className="title-main-recent">
                        <h2 className="recently-title">Our Services</h2>
                    </div>
                    <div className="main-grid-recently">
                        {this.recentCard.map((prop, index) => {
                            return (
                                <RecentlyMap
                                    data={prop}
                                    key={index}
                                />
                            )
                        })}



                    </div>
                    <div className="show-more">
                        {/* <button className="show-more-btn">Show More</button> */}
                    </div>
                </div>

            </div>
        )
    }
}
export default Recently;
