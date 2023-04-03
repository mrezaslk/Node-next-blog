import React, { Component } from 'react'
import SecondHeader from '../../Components/SecondHeader';
import MainBody from '../../Components/MainBody';
// import Sliders from '../../Components/Slider';
import Topics from '../../Components/Topics';
import Footer from '../../Components/Footer';
import ImageComp from '../../Components/ImageComp';
import NewsLetter from '../../Components/NewsLetter';
import DesignImg from '../../Components/DesignImg';





class index extends Component {

    state = {
        portfolioData: [
            {
                link: "https://antbuildz.com",
                title: "About Antbuildz",
                desc: "Antbuildz set out to reinvent the traditional construction equipment rental industry into a touchless experience. We digitalize the entire construction equipment rental process and make it extremely fast and easy for both equipment owners and users. With Antbuildz, equipment owners and users can reach their target audience within a few clicks on a PC or mobile phone.",
                services: "Website design and development",
                img: "/assets/images/ant-logo.jpeg"

            },
            {
                link: "https://metraj.com/",
                title: "About Metraj ",
                desc: "Metraj is the sweet experience of the real estate deal in the modern world. We have to admit that the expiration date of buying a newspaper and looking for a house or advertising costs and going back and forth between real estate agencies is over.",
                services: "Website design and development",
                img: "/assets/images/metraj.jpg"

            },
            {
                link: "https://chilik.net",
                title: "About Chilik",
                desc: " Chilik is an art-based platform for downloading high quality free photos and designs; A valuable collection consisting of the works of the top Iranian photographers and designers.",
                services: "Website design and development",
                img: "/assets/images/chilik.jpg"

            },
            {
                link: "https://anbarmazad.com/",
                title: "About anbarmazad",
                desc: "If you have extra parts and tools that you want to cash in and get rid of maintenance costs, if you are looking to buy new, second-hand and rare items in the field of electronics, if you’re searching for telecommunication and electrical parts and devices at a lower cost, Anbarmazad is your solution!",
                services: "Website design and development",
                img: "/assets/images/mazad.jpg"

            },
            {
                link: "https://www.roshaac.ir/",
                title: "About rooshac",
                desc: `The main field of activity of the Rosha Talent Development Center is around the issue of accelerating and supporting the talents of children and adolescents.
                In line with this valuable mission, the Rosha Center declares its readiness to work with the owners of executable ideas in various fields of psychology, educational sciences, social innovations and especially talent acceleration as the main mission of Rosha Accelerator.
                `,
                services: "Website design and development",
                img: "/portfolio/Rooshac.jpg"

            },
            {
                link: "http://taroneh.ir/",
                title: "About taroneh",
                desc: `Taroneh Dried Fruit Market is a store of dried fruit products with a high variety that tries to satisfy its many customers with its appropriate and permanent price and quality.`,
                services: "Website design and development",
                img: "/portfolio/taroneh.jpg"

            },
            {
                link: "https://plusmaster.pro/",
                title: "About plusmaster",
                desc: `Plus master with a history of 6 years of continuous activity in the gaming sector and with sufficient experience in this field and taking into account the progress of Iranian gaming and the growth and increase of online gaming players in recent years, has decided to fully expand its project throughout the country.  
                The goal of the PlusMaster series is to become the first and largest gaming reference in Iran in online computer games.
                `,
                services: "Website design and development",
                img: "/portfolio/plusmaster.jpg"

            },
            {
                link: "https://yadakly.com/",
                title: "About yadakly",
                desc: `Yadak Lee is the leading e-commerce business in providing spare parts for vehicles and automobiles in Iran. Yadak Lee, as the highest growth of the company in this branch, intends to further expand its position. Thanks to its successful expansion, Yadak Lee now operates across the country.`,
                services: "Website design and development",
                img: "/portfolio/yadakly.jpg"

            },
            {
                link: "https://behpala.com/",
                title: "About behpala",
                desc: `BehPala Industrial Production Group was established in 2017 based on the thinking of senior managers of the organization regarding the production of quality automotive products.  The mission of this group is to eliminate the need to import and produce quality special car filters in the light and heavy group, as well as industrial filters.                `,
                services: "Website design and development",
                img: "/portfolio/behpala-yellow.jpg"

            },
            {
                link: "https://www.pelak.com/",
                title: "About pelak",
                desc: "                Using daily services on site is one of the ways to save time and money, which is very necessary and practical due to today's lifestyle. Plaque; On-site service has provided access to essential and practical services in the shortest time and at the most reasonable price.                ",
                services: "Website design and development",
                img: "/portfolio/pelak.jpg"

            },
            {
                link: "https://plusmaster.pro/tournament",
                title: "About plusmaster pro",
                desc: `Plus master with a history of 6 years of continuous activity in the gaming sector and with sufficient experience in this field and taking into account the progress of Iranian gaming and the growth and increase of online gaming players in recent years, has decided to fully expand its project throughout the country.  
                The goal of the PlusMaster series is to become the first and largest gaming reference in Iran in online computer games.
                `,
                services: "Website design and development",
                img: "/portfolio/plusmaster.jpg"

            },
           
            {
                link: "https://narafella.ir/",
                title: "About narafella",
                desc: `Narafla online store was established on October 22, 2016 by a team of interested and active young people in the field of fantasy and games.  This team will always work to satisfy the lovers of this genre and its goal is to achieve a comprehensive store in order to meet the demand of this group of loved ones.  A number of products are produced by the workshop of this team and are placed exclusively in this store.`,
                services: "Website design and development",
                img: "/portfolio/narafella.jpg"

            },
           

        ]
    }

    render() {
        return (
            <>
                <SecondHeader
                    num="3"
                />
                <MainBody
                    // textfirst="Any Project you want"
                    title="When you have a dream, you've got to grab it and never let go."
                    btn="Explore"
                    imageId="/cover/c-4.jpeg"

                />
                {this.state.portfolioData.map((prop, index) => {
                    return (
                        <DesignImg
                            companyImg={prop.img}
                            companyTitle={prop.title}
                            description={prop.desc}
                            benefit={prop.services}
                            
                            linkCompany={prop.link}
                            key={index}

                        />
                    )
                })}

                {/* <ImageComp
                    imageId="assets/images/9.jpeg"
                /> */}
                {/* <Topics /> */}
                <NewsLetter
                    imageId="/cover/c-3.jpeg"
                />
                <Footer />



            </>
        )
    }
}

export default index;