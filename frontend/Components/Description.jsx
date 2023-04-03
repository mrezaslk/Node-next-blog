import React from 'react'
import Modal from './Modal';

class Description extends React.Component {

    state = {
        beOpen: 0,
        works: [
            {
                img: 'assets/images/1.svg',
                title: 'Planning and Consulting',
                desc: 'Producing new solutions that improve our products, business opportunities, company, and employee well-being.',
                id: 0,

            },
            {
                img: 'assets/images/2.svg',
                title: 'Visual and Technical Design',
                desc: 'Having confidence in/respect for our colleagues intelligence, dedication, and ability to do their jobs well.',
                id: 1,
            },
            {
                img: 'assets/images/3.svg',
                title: 'Development',
                desc: 'Relentlessly directing our talent and attentiveness to producing our best work and best outcomes',
                id: 2,
            },
            {
                img: 'assets/images/5.svg',
                title: 'Deployment',
                desc: 'Enthusiastically cooperating with o advance and complete tasks, big and small.',
                id: 3,
            },
            {
                img: 'assets/images/4.svg',
                title: 'Upgrades',
                desc: 'The confidence to explore new ideas, embrace new experiences, and take calculated risks',
                id: 4,
            },
            {
                img: 'assets/images/6.svg',
                title: 'Maintenance',
                desc: 'The confidence to explore new ideas, embrace new experiences, and take calculated risks',
                id: 5,
            },
        ],

        item1: [{
            img: 'assets/images/1.svg',
            title: 'Planning and Consulting',
            desc: 'Producing new solutions that improve our products, business opportunities, company, and employee well-being.',
            id: 0,

        }],
        item2: [{
            img: 'assets/images/2.svg',
            title: 'Visual and Technical Design',
            desc: 'Having confidence in/respect for our colleagues intelligence, dedication, and ability to do their jobs well.',
            id: 1,
        }],
        item3: [{
            img: 'assets/images/3.svg',
            title: 'Development',
            desc: 'Relentlessly directing our talent and attentiveness to producing our best work and best outcomes',
            id: 2,
        }],
        item4: [{
            img: 'assets/images/4.svg',
            title: 'Deployment',
            desc: 'Enthusiastically cooperating with our colleagues to advance and complete tasks, big and small.',
            id: 3,
        }],
        item5: [
            {
                img: 'assets/images/5.svg',
                title: 'Upgrades',
                desc: 'The confidence to explore new ideas, embrace new experiences, and take calculated risks',
                id: 4,
            }],
        item6: [
            {
                img: 'assets/images/6.svg',
                title: 'Maintenance',
                desc: 'The confidence to explore new ideas, embrace new experiences, and take calculated risks',
                id: 4,
            }
        ]
    }

    openModal(index) {

        switch (index) {
            case 0:
                this.setState({ beOpen: 0 })
                this.showDesc.showModal();
                break;
            case 1:
                this.setState({ beOpen: 1 })
                this.showDesc.showModal();
                break;
            case 2:
                this.setState({ beOpen: 2 })
                this.showDesc.showModal();
                break;
            case 3:
                this.setState({ beOpen: 3 })
                this.showDesc.showModal();
                break;
            case 4:
                this.setState({ beOpen: 4 })
                this.showDesc.showModal();
                break;
            case 5:
                this.setState({ beOpen: 5 })
                this.showDesc.showModal();
                break;


            default:
                break;
        }
    }



    render() {

        return (
            <div className="container" id='weWork'>

                <div className="contain">
                    {/* <div className="wrapper-for-form">
                        <h2 style={{ color: '#107355' }}>We Love Greate Content</h2>
                        <p>
                            Whether that’s important hard-hitting journalism, captivating and entertaining videos, the latest scores of our favorite teams, or the intel that motivates companies to change course or people to invest big, we believe there will always be a demand for words and scenes that make a difference.
                            <br />
                            <br />


                            And we know that in order to profitably create quality content, media companies can’t rely on advertising alone.
                            <br />
                            <br />


                            We’re even more passionate about solving that problem. We’ve built tools that make it easy for great media companies to market, sell, and fulfill their content across any channel their audience wants. Our tools give business users control over the complete experience, from targeting the right segments through creating incentives for users to register and pay to retaining those customers and minimizing churn – without going to the IT team again.
                            <br />
                            <br />


                            Whether you’re looking to understand your audience, optimize your ad inventory, reduce ad blocking, grow registrations, or launch a paid content strategy, Piano delivers the tools and analytics you’ll need to create and visualize empirical results.

                        </p>
                    </div> */}
                </div>

                <div className="contain-dd">
                    <div className="wrapper-for-handle">
                        <h2 id="big-txt">How We Work</h2>
                        <span style={{ textAlign: 'center' }}>metatrine is designed with tech – both online and off – in mind</span>

                        <ul className="driven-item">
                            <div className="row">
                                {this.state.works.map((item, index) => {
                                    return (
                                        <div key={index} className="col-xl-4">
                                            <div><img onClick={() => this.openModal(index)} src={item.img} alt="" className="creativ-pic" /></div>
                                            <h3 className="small-tt">{item.title}</h3>
                                            <p className="small-txt text-center">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                        <Modal ref={el => this.showDesc = el} maxWidth={800}>

                            {this.state.beOpen == 0 && (
                                <div className="description">
                                    {this.state.item1.map((prop, index) => {
                                        return (
                                            <>
                                                <img src={prop.img} alt="" className="img-svg-modal" />
                                                <h4>{prop.title}</h4>
                                                <p>{prop.desc}</p>
                                            </>
                                        )
                                    })}

                                </div>

                            )}
                            {this.state.beOpen == 1 && (
                                <div className="description">
                                    {this.state.item2.map((prop, index) => {
                                        return (
                                            <>
                                                <img src={prop.img} alt="" className="img-svg-modal" />
                                                <h4>{prop.title}</h4>
                                                <p>{prop.desc}</p>
                                            </>
                                        )
                                    })}
                                </div>

                            )}
                            {this.state.beOpen == 2 && (
                                <div className="description">
                                    {this.state.item3.map((prop, index) => {
                                        return (
                                            <>
                                                <img src={prop.img} alt="" className="img-svg-modal" />
                                                <h4>{prop.title}</h4>
                                                <p>{prop.desc}</p>
                                            </>
                                        )
                                    })}
                                </div>

                            )}
                            {this.state.beOpen == 3 && (
                                <div className="description">
                                    {this.state.item4.map((prop, index) => {
                                        return (
                                            <>
                                                <img src={prop.img} alt="" className="img-svg-modal" />
                                                <h4>{prop.title}</h4>
                                                <p>{prop.desc}</p>
                                            </>
                                        )
                                    })}
                                </div>

                            )}
                            {this.state.beOpen == 4 && (
                                <div className="description">
                                    {this.state.item5.map((prop, index) => {
                                        return (
                                            <>
                                                <img src={prop.img} alt="" className="img-svg-modal" />
                                                <h4>{prop.title}</h4>
                                                <p>{prop.desc}</p>
                                            </>
                                        )
                                    })}
                                </div>

                            )}
                            {this.state.beOpen == 5 && (
                                <div className="description">
                                    {this.state.item6.map((prop, index) => {
                                        return (
                                            <>
                                                <img src={prop.img} alt="" className="img-svg-modal" />
                                                <h4>{prop.title}</h4>
                                                <p>{prop.desc}</p>
                                            </>
                                        )
                                    })}
                                </div>

                            )}





                        </Modal>
                    </div>
                </div>
            </div >
        )
    }
}

export default Description;
