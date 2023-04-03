import React, { useState , useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import MainBackground from '../Components/MainBackground';
import Description from '../Components/Description';
import Footer from '../Components/Footer';
// import ImageComp from '../Components/ImageComp';

import NewLetter from '../Components/NewsLetter';
import ImgwithText from '../Components/ImgwithText';
import DesignImg from '../Components/DesignImg';
import BigImg from '../Components/BigImg';
import ImageComp from '../Components/ImageComp';
import CardBox from '../Components/CardBox';
import Recently from '../Components/Recently';
import Topics from '../Components/Topics';
import Faq from '../Components/Faq';
import axios from 'axios';






export default function Home() {



  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
    
  }, []);

  return (

    <>
      <Head>
        <title>metatrine</title>


      </Head>


      <body>
        <Navbar />
        <MainBackground
          imageId='/cover/c-9.jpeg'
        />

        {/* <Recently /> */}
        <CardBox products={products} />
        <Topics />
        <Description />

        <Faq />

        {/* <BigImg
          imageId="assets/images/24.jpeg"
        /> */}
        <NewLetter
          imageId="/cover/c-2.jpeg"
        />
        {/* <ImgwithText />
        <DesignImg /> */}


        <Footer />
      </body>






    </>

  )
}


