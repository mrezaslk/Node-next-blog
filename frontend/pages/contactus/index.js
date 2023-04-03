import React, { Component } from 'react'
import BigCard from '../../Components/BigCard';
import BigImg from '../../Components/BigImg';
// import ImageComp from '../../Components/ImageComp';
import NewsLetter from '../../Components/NewsLetter';
import Navbar from '../../Components/Navbar';
import MainImg from '../../Components/MainImg';
import Footer from '../../Components/Footer';
import ContactPage from '../../Components/ContactPage';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
import SecondHeader from '../../Components/SecondHeader';


class index extends Component {
    render() {
        return (
            <>

<SecondHeader />

                <ContactPage />
                {/* <Navbar />
                <MainImg
                    imageId="assets/images/3.jpeg"
                />
                <ImageComp
                    imageId="assets/images/21.jpeg"
                />
                <BigCard />
                <BigImg
                    imageId="assets/images/24.jpeg"
                />
                <NewsLetter />
                <Footer /> */}
                <Footer />

            </>
        )
    }
}


export default index;