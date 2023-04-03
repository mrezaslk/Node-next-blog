import React, { Component } from 'react'
import Faq from '../../Components/Faq';
import Footer from '../../Components/Footer';
import MainBody from '../../Components/MainBody';
import MainImg from '../../Components/MainImg';
import Navbar from '../../Components/Navbar';

class index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainImg imageId='assets/images/1.jpeg' />
                <MainBody
                textfirst="Any Project you want"
                title="Why METATRINE?"
                btn="Explore"
                imageId="assets/images/3.jpeg"
                />
                <Faq />
                <Footer />

            </>
        )
    }
}


export default index;