import React, { useState, useRef } from 'react';
import Collapsible from 'react-collapsible';


const SectionComp = ({ title, titlesec, titlethird, titlefour, titlefive, titlesix, titleseven }) => {

    const parentRef = useRef();

    // if (parentRef.current) console.log(parentRef.current.scrollHeight);
    const [showSection, setShowSection] = useState(false);



    const openSection = () => {

        setShowSection(prev => !prev)
        console.log("true");

    }

    return (
        <>

            <div className="section-div" onClick={openSection}>
                <div className="text-section">

                    <h3>
                        <span id="sec">{`${title}`}</span>

                    </h3>
                </div>
                <div className="text-section hidden">
                    <img src={showSection ? 'assets/images/7.svg' : 'assets/images/8.svg'} alt="" className="svg-test" />


                </div>
            </div>

            <Collapsible open={showSection ? true : false} >
                <div className='current-section-content' >
                    <div className="card-section-main">

                        <div className="card-section-items">
                            <div className="card-discription-item">
                                <p className="edit-asnwer-faq">{`${titlefive}`}</p>

                            </div>
                        </div>
                    </div>

                </div>

            </Collapsible>

        </>

        // 

        /* // </Collapse> */








        // </>

        /* <div className="current-section-content" ref={parrentRef}
                style={
                    showSection ? { height: "0px" } :
                        { height: parrentRef.current.scrollHeight + "px" }}
            >
                <div className="card-section-main">
                    <div className="card-section-items">
                        <div className="div-number-circ">
                            <div className="div-for-number">
                                {`${titlethird}`}
                            </div>
                            <div className="check-box">
                                <i class="fas fa-check check-item"></i></div>
                        </div>
                    </div>
                    <div className="card-section-items">
                        <div className="card-discription-item">
                            <h4>{`${titlefour}`}</h4>
                            <p>{`${titlefive}`}</p>
                            <div className="for-episode-and-clock">
                                <span>{`${titlesix}`}</span>
                                <div className="minutes">
                                    <i class="fas fa-clock section-clock"></i>
                                    <span id="minute">{`${titleseven}`}</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div> */




    )
}

export default SectionComp;
