import React, { Component } from 'react'
import MainImg from '../../Components/MainImg';
import Navbar from '../../Components/Navbar';
import ImageComp from '../../Components/ImageComp';
import Footer from '../../Components/Footer';
import NewLetter from '../../Components/NewsLetter';
import ProfileAbout from '../../Components/ProfileAbout';
import CardBox from '../../Components/CardBox';
import BigCard from '../../Components/BigCard';
import DesignImg from '../../Components/DesignImg';
import Ourteam from '../../Components/Ourteam';

class index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainImg
                    imageId='/cover/c-10.jpeg'
                />
                <BigCard />
                {/* <ImageComp
                    imageId="assets/images/9.jpeg"
                /> */}
                {/* <DesignImg /> */}
                {/* <ProfileAbout
                    imageId="assets/images/profile.jpeg"
                /> */}
                {/* <CardBox /> */}
                <Ourteam />
                <NewLetter
                    imageId="/cover/c-1.jpeg"
                />

                <Footer />

            </>

        )
    }
}

export default index;
