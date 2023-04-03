import React from 'react';
import Head from 'next/head';
import moment from 'jalali-moment';
import Link from 'next/link';
import { imageAddress } from '../../utils/useful';
import HttpServices from '../../utils/Http.services';
import Router, { withRouter } from 'next/router'
import { siteConfig } from '../../variables/config';
import Footer from '../../Components/Footer';
import SecondHeader from '../../Components/SecondHeader';


export async function getServerSideProps(context) {


    let slug = null

    if (context?.query?.slug) {
        slug = context?.query?.slug
    }

    let lng = context.locale
    if (!lng) {
        lng = 'en'
    }


    const res = await (await HttpServices.syncRequest('getOneBlog', { _id: slug })).result

    const similarRes = await (await HttpServices.syncRequest('getRecommendedBlogs', { slug, lng })).result


    // const res = await fetch('https://www.iotsmile.com/iot/apiv1', {
    //     method: "POST",
    //     body: JSON.stringify({
    //         route: "values/getOneValue",
    //         content: {
    //             _id: slug,
    //             // _id: id
    //         }
    //     })
    // })

    // const json = await res.json()



    // const similarRes = await fetch('https://www.iotsmile.com/iot/apiv1', {
    //     method: "POST",
    //     body: JSON.stringify({
    //         route: "values/getValuesWithData",
    //         content: {
    //             page: "Blogs"
    //             // _id: id
    //         }
    //     })
    // })

    // const similarJson = await similarRes.json()
    // console.log(json)
    return {
        props: JSON.parse(JSON.stringify({ info: res ? res.info : null, blogs: similarRes ? similarRes.info : [] }))
    }



}




class ProductPage extends React.Component {
    state = {

    }


    componentDidMount() {
        let fullUrl = siteConfig.rootDomain + Router.router.asPath
        this.setState({ fullUrl })
    }


    render() {
        var settings = {
            dots: true,
            autoplay: false,
            autoplaySpeed: 1900,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
        };


        var settings1 = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 700,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        var settings2 = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 700,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <>
                <Head>

                    {/* <title>IoTSmile Blogs</title> */}

                </Head>

                <SecondHeader />


                <div className="container my-3">
                    <div className="row justify-content-center">
                        <div className="handle-content">
                            <div className="col-12">
                                <div className="title-single-page">
                                    <h4>{this.props.info?.title}</h4>
                                </div>
                                <div className="row for-border">
                                    <div className="col-9">
                                        <div className="handle-date-and-des">
                                            <span style={{ color: '#50A887' }}>Metatrainer Content Team</span>
                                            <span>
                                                {this.props.info?.description}
                                            </span>
                                            <span>
                                                {moment(this.props.info?.cDate).format('YYYY MMM DD')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex align-item-center justify-content-end">
                                        <div className="social-media-icon">
                                            <a target="_blank"  rel="noreferrer" href={"https://www.linkedin.com/shareArticle?mini=true&url=" + this.state.fullUrl}><i className="fab fa-linkedin icon-social"></i></a>
                                            <a target="_blank"  rel="noreferrer" href={"https://twitter.com/intent/tweet?url=" + this.state.fullUrl}><i  className="fab fa-twitter icon-social"></i></a>
                                            <a target="_blank"  rel="noreferrer" href={"https://www.facebook.com/sharer/sharer.php?u=" + this.state.fullUrl + "&t=" + this.props.info?.title} ><i className="fab fa-facebook icon-social"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-for-each-blog">

                                    <img src={imageAddress(this.props.info?.image?.address, null)} alt="" className="edit-content-img" />

                                </div>
                                <div className="for-content-text ck-content">
                                    <div className="mb-5" style={{ fontSize: '17px', lineHeight: '30px', fontWeight: '350' }} dangerouslySetInnerHTML={{ __html: this.props.info?.body }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />


            </>
        )
    }
}



export default ProductPage;