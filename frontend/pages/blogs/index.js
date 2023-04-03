import React, { Component } from 'react';
import Blog from '../../Components/Blog';
import MainImg from '../../Components/MainImg';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import HttpServices from '../../utils/Http.services';



export async function getServerSideProps(context) {

    let limit = 100
    let page = 0
    if (context?.query?.page) {
        page = Number(context?.query?.page) - 1
    }
    let category = null
    if (context?.query?.category) {
        category = context.query?.category
    }

    let body = {}
    if (category && category != '') {
        body.filter = {}
        body.filter['categories'] = category
    }

    body.getCount = true
    body.limit = limit
    body.skip = page

    let lng = context.locale
    if (!lng) {
        lng = 'en'
    }
    // body.lng = lng

    const blogsRes = await (await HttpServices.syncRequest('getBlogs', body)).result



    return {
        props: JSON.parse(JSON.stringify({
            blogs: blogsRes?.info ?? [],
            totalCount: blogsRes?.count,
            //   categories: catsRes.info,
            currentPage: page,
            //   featured: featured,
            //   trendings: trendings,
            category,
            limit
        }))
    }



}



export default class index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainImg
                    imageId='/cover/c-8.jpeg'
                />
                <Blog blogs={this.props.blogs} />

                <Footer />

            </>
        )
    }
}
