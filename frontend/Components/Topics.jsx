import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const topicData = [
    { title: 'React Project', img: 'assets/images/atom.png', dec: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.", id: 1 },
    { title: 'React Native Project', img: 'assets/images/atom2.png', dec: "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.", id: 1 },
    { title: 'Python Project', img: 'assets/images/python.png', dec: "Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances.", id: 2 },
    { title: 'Android Application', img: 'assets/images/android.png', dec: "Android is an operating system and programming platform developed by Google for mobile phones and other mobile devices, such as tablets. ... Android includes a software development kit (SDK) that helps you write original code and assemble software modules to create apps for Android users. ", id: 2 },
    { title: 'Node js Project', img: 'assets/images/nodejs.png', dec: "Is Node JS a Language? No. Node JS is not a programming language, but it allows developers to use JavaScript, which is a programming language that allows users to build web applications. This tool is mostly used by programmers who use JavaScript to write Server-Side scripts.", id: 3 },
    { title: 'PHP Project', img: 'assets/images/php.png', dec: "PHP is a popular general-purpose scripting language that is especially suited to web development.Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.", id: 4 },
    { title: 'IOS Project', img: 'assets/images/apple.png', dec: "Swift is a robust and intuitive programming language created by Apple for building apps for iOS, Mac, Apple TV, and Apple Watch. It's designed to give developers more freedom than ever. Swift is easy to use and open source, so anyone with an idea can create something incredible", id: 2 },
    { title: 'Vanilla js Project', img: 'assets/images/js-file.png', dec: "Using 'VanillaJS' means using plain JavaScript without any additional libraries like jQuery. People use it as a joke to remind other developers that many things can be done nowadays without the need for additional JavaScript libraries.", id: 3 },
    { title: 'C++ Project', img: 'assets/images/c.png', dec: "C++ is a very popular language for performance-critical applications that rely on speed and efficient memory management. It's used in a wide range of industries including software and game development, VR, robotics, and scientific computing", id: 4 },

]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <></>
        //   <div
        //     className="fas fa-chevron-right edit-arrow-right"
        //     style={{ ...style, display: "block", background: "transparent" }}
        //     onClick={onClick}
        //   >

        //       </div>

    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <>
        </>
        // <div
        //     className="fas fa-chevron-left edit-arrow-left"
        //     style={{ ...style, display: "block", background: "transparent" }}
        //     onClick={onClick}
        // />
    );
}

const Topics = () => {


    let settings = {
        dots: false,
        infinite: true,
        // arrows: true,
        pauseOnDotsHover: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: true,
                    touchMove: true,
                }
            }
        ]

    };










    return (
        <>
            <div id='Tech' style={{ backgroundColor: '#EDEDED' }} className="container-fluid for-margin">
                <div className="row d-flex p-0 m-0 justify-content-center">
                    <div className="for-title-slider">
                        <h2 className='text-center'>Technology Expertise</h2>
                        <span className="line-handle"></span>
                        <span className="parag">the right technology stack is the foundation of your website.we build your site with the latest core technologies,to suit any type of application</span>
                    </div>

                </div>

                <div className="container py-0" style={{ position: 'relative' }}>
                    <div className='d-flex w-100 m-0 flex-column'>
                        <Slider {...settings} >
                            {topicData.map((item, index) => {
                                return (
                                    <div key={index} className="w-100 flex-1 p-2">
                                        <div className="flex-item h-100">
                                            <div className="for-slider h-100">

                                                <div className="items-include-text">
                                                    <span className="title-header">{item.title}</span>
                                                    <div className="under-text">
                                                        <span className="series-text">{item.dec}</span>


                                                    </div>
                                                </div>
                                                <div className="item-include-img">
                                                    <img src={item.img} alt="" className="image-item-icon" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                )
                            })}

                        </Slider>
                    </div>
                </div>

            </div>


        </>








    )
}


export default Topics;
