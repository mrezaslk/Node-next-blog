import React, { Component } from "react"
import SectionDiv from "./SectionDiv";

class Faq extends Component {

    state = {
        item: [
            {
                title: "UI | UX Design",
                desc: "for an interacting and innovative experience for the end-users of your applicaton"
            },

            {
                title: "E-Commerce ",
                desc: "to have a future-proof custom web application developed to match your unique product | service"
            },
            {
                title: "Custom CRM",
                desc: "enable your business to sort out connections and associations with clients and prospects in a strategic and systematic way"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid p-0 m-0" id={"faq"}>
                <div className="row p-0 m-0">
                    <div className="col-lg-12 p-0 m-0">
                        <div className="for-handle-faq" style={{backgroundColor:"#003e41"}}>
                            <div className="title-faq">
                                <span style={{ padding: 0 ,color:"#fff"}}>FAQ's</span>
                            </div>
                            {/* <div className="title-faq-test">
                                <div className="for-each-item">
                                    <div className="container test-padd">
                                        <div className="row px-5 py-5 mx-0 my-0">
                                            {this.state.item.map((prop, index) => {
                                                return (
                                                    <div className="col-xl-4 px-2 justify-center">
                                                        <div className="main-item-handle my-2">

                                                            <span className="title-faq-handle">{prop.title}</span>
                                                            <span className="title-faq-des">{prop.desc}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}


                                        </div>
                                    </div>
                                </div>
                            </div> */}


                        </div>
                    </div>
                    <div className="container px-5 ">
                        <div className="row p-0 m-0">
                            {/* <div className="col-lg-6">
                                <div className="handle-faq-title">

                                    <span>
                                        Still have questions?
                                    </span>
                                </div>
                            </div> */}
                            <div className="col-xl-12 col-lg-12 col-sm-12">

                                <div className="collapsiable-handle-faq p-0 m-0">
                                    <SectionDiv />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>






            </div>
        )
    }
}


export default Faq;