import React from 'react'
import SectionComp from './SectionComp';
// import Collapsible from 'react-collapsible';

const cardSectionMap = [
    {
        name: 'How to have the best website suited for my business?',

        description: `Having a professional website is a must for every business as it is the face of your company. The Metatrine team will guide you through every step of finding and creating the best website design . Our in-house programmers and website designers have created website design packages suited for various types of businesses which you could find on our website. We will gladly help you to find the best option for your business.Be well assured that our services will be of the highest quality as your website is our portfolio.`,
  },
    {
        name: 'Why Is Web Design Important?',

        description: `If only given 15 minutes to consume content, 66 percent of people would prefer to see something beautifully designed versus something plain and simple. Your website’s design is an important part of your online marketing presence. To build a better website for your business, you must understand the importance of web design.`,
  },
    {
        name: 'Responsive Design !',

        description: `With an increasing number of users accessing the Internet on smartphones and other devices, your website needs to display and function well on a variety of browsers and screen sizes. Responsive design is the best way to accomplish this goal`,
  },
        


    
    {
        name: 'I own a small business. Do I need custom web application development services?',

        description: 'Considering you are currently a small business, your need for web application services depends on factors like market demand & your plans for expansion. Your business requirements and demands along with constructive feedback from your customers, will influence the kind of web application you should construct - to increase brand visibility and customer base, driving your revenue up.',

    },
   
    {
        name: 'What is the best platform to build Web Applications?',

        description: `Here are some of the top platforms used to develop custom web applications:

         React.js
         Node.js
         Cloud Native
         Python
         Microservices
        `


    },
    {
        name: 'Should My Business Have an App?',

        description: `One reason why your business needs an App is to improve direct communication with clients and customers. With access to a wealth of information at just a touch of a button, business mobile application development has opened the door to clear and direct communication between customers and businesses.`
    },
    {
        name: 'What are web app development company services?',

        description: `
        Web application companies that offer end-to-end development services are skilled and proficient in the following:
 UI / UX Design - for an interacting and innovative experience for the end-users of your applicaton
 E-Commerce Application Development - to have a future-proof custom web application developed to match your unique product / service
 Custom CRM (Cloud Based) - enable your business to sort out connections and associations with clients and prospects in a strategic and systematic way
 Custom CMS (Cloud Based) - for creating and modification of any and all of your digital content
 Maintenance & Support Services (Architecture Development Methods) - to ensure your web application is operating at optimum performance, inceasing cost efficiency through strategic investment of resources and reducing application downtime`,

    },




]




const SectionDiv = () => {

    return (
        <>
            <div className="container py-0">
                <div className="wrapper sections">
                    {cardSectionMap.map(item => (
                        <>
                            <SectionComp
                                title={item.name}
                                titlesec={item.titlehead}
                                titlethird={item.number}
                                titlefour={item.title}
                                titlefive={item.description}
                                titlesix={item.episode}
                                titleseven={item.time}

                            />

                        </>
                    ))}










                </div>

            </div>
        </>
    )
}



export default SectionDiv;