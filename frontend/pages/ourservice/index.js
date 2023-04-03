import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import MainBackground from '../../Components/MainBackground';
import Footer from '../../Components/Footer';
import Recently from '../../Components/Recently';

import ImageCard from '../../Components/ImageCard';
import SecondHeader from '../../Components/SecondHeader';
import MainBody from '../../Components/MainBody';

class index extends Component {
   render() {
      return (
         <>
            {/* <Navbar />
            <MainBackground
          imageId='assets/images/21.jpeg'
        /> */}
            <SecondHeader
               num="2"
            />
            <MainBody
               textfirst="Any Project you want"
               title="Why METATRINE?"
               btn="Explore"
               imageId="assets/images/24.jpeg"

            />

            <Recently />
            <ImageCard />


            <Footer />
         </>
      )
   }
}


export default index;
