import React, { Component } from 'react'
import Link from 'next/link'
import { imageAddress, translate } from '../utils/useful'
import moment from 'jalali-moment'
import Pagination from './Pagination'
// import Pagination from './components/Pagination';

class Blog extends Component {

    state = {

    }


    changePage = (index) => {

        let query = null

        if (this.props.category) {
            query = { category: this.props.category }
        }

        Router.push({
            pathname: "/blogs/" + (Number(index) + 1),
            query
        })


    }



    render() {
        return (
            <div className="container mb-5">
                <div className="row p-0 m-0">
                    <div className="for-title-name">
                        {/* <span className="blog-name">In this section, you can see the latest articles and news</span> */}
                        <span className="under-blog-name"></span>
                    </div>

                    {this.props.blogs?.length == 0 && (
                        <div className='flexcc'>
                            <p>{translate('foundNothing')}</p>
                        </div>
                    )}
                    {this.props.blogs?.map((prop, index) => {
                        return (
                            <>
                                <Link href={"/blog/" + prop._id}>
                                <div className="col-md-6 col-12 col-lg-4 blogs-edit d-flex">
                                        <div className="for-content-blog d-flex flex-column h-100" style={{flex:1}}>
                                            <div style={{ flex: 1 }}>

                                                <div className="for-image-blog">
                                                    <img src={imageAddress(prop.image, null, 'small')} alt="" className="image-edit-blog" />
                                                </div>

                                                {/* <div className="for-title-blog">
                                                <h5>{prop.category}</h5>
                                            </div> */}
                                                <div className="for-title-blog px-3 mt-2 flex-column">
                                                    <h4>{prop.title}</h4>
                                                    <p>{prop.description}</p>

                                                </div>
                                            </div>

                                            <div className="for-description-blog px-3 mt-0">
                                                {/* <p>{prop.description}</p> */}
                                                <span>Sivan Exchange - {moment(prop.date).format('YYYY MMMM DD')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })}



                    <div className="col-12 mt-4">
                        <Pagination currentPage={this.props.currentPage} totalCount={this.props.totalCount} limit={this.props.limit} changePage={this.changePage} />
                    </div>


                </div>

            </div>
        )
    }
}

export default Blog;