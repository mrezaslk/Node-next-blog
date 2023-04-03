import React, { Component } from 'react'
// import index from '../pages/aboutus'

class Ourteam extends Component {


    state = {
        show: false,
        team: [
            // {
            //     img: '/profile/.jpeg',
            //     name: 'X',
            //     position: 'Chief executive officer',
            // },
            {
                img: '/profile-1/p-2.jpg',
                name: 'farhad pooladi ',
                position: 'chief executive officer ',
            },
            {
                img: '/profile-1/p-11.jpg',
                name: 'Fariborz Irani',
                position: 'Chief Operating Officer',
            },
            {
                img: '/profile-1/p-14.jpg',
                name: 'Habib Irani ',
                position: 'Co-Founder & Chief Product Officer ',
            },
            {
                img: '/profile-1/p-9.jpg',
                name: 'Kourosh Fard',
                position: 'Co-Founder & Chief Marketing Officer ',
            },
            {
                img: '/profile-1/p-4.jpg',
                name: 'Pouya Pezhman ',
                position: 'Technical Lead',
            },
            {
                img: '/profile-1/p-16.jpg',
                name: 'Reza Osouli ',
                position: 'Backend Developer',
            },
            {
                img: '/profile-1/p-21.jpeg',
                name: 'Darya Farivar ',
                position: 'Backend Developer',
            },
            {
                img: '/profile-1/profile.png',
                name: '',
                position: 'DevOps Engineer',
            },
            {
                img: '/profile-1/profile.png',
                name: '',
                position: 'Android Developer',
            },
            {
                img: '/profile-1/profile.png',
                name: '',
                position: 'iOS Developer',
            },
            {
                img: '/profile-1/p-3.jpg',
                name: 'Maryam Ghasemi ',
                position: 'Front-End Developer',
            },
            {
                img: '/profile-1/p-6.jpg',
                name: 'Mohammadreza Salek',
                position: 'Front-End Developer',
            },
            {
                img: '/profile-1/p-7.jpg',
                name: 'Shirin Irani',
                position: 'Project Manager',
            },
            {
                img: '/profile-1/profile.png',
                name: '',
                position: 'Scrum Master',
            },
            {
                img: '/profile-1/p-12.jpg',
                name: 'Jalil Alizadeh ',
                position: 'Data Scientist',
            },
            {
                img: '/profile-1/p-5.jpg',
                name: 'Helia Majd',
                position: 'Quality Assurance',
            },

              
            {
                img: '/profile-1/p-1.jpg',
                name: 'sadaf alidoost',
                position: 'graphic design',
            },

            {
                img: '/profile-1/p-17.jpg',
                name: 'tirajeh farahani',
                position: 'design specialist',
            },

            {
                img: '/profile-1/p-13.jpg',
                name: 'mahyar yekezare',
                position: 'seo specialist',
            },

            {
                img: '/profile-1/p-18.jpg',
                name: 'Sepehr Akbarian',
                position: 'PR Manager ',
            },
            {
                img: '/profile-1/p-8.jpg',
                name: 'Pouria Azad ',
                position: 'Marketing strategist',
            },
            {
                img: '/profile-1/p-15.jpg',
                name: 'Kamran Mozafari',
                position: 'Digital Marketing Manager',
            },

            {
                img: '/profile-1/p-10.jpg',
                name: 'salar saadat',
                position: 'marketing analyst',
            },
           
          
           
            
            
           
           
           
           
           
            // {
            //     img: '/profile-1/profile-1.jpg',
            //     name: 'Maryam Alinia',
            //     position: ' UI/UX designer ',
            // },
           
            {
                img: '/profile-1/p-19.jpg',
                name: 'soheil akbarian',
                position: 'content expert',
            },
         
           
           
            {
                img: '/profile-1/p-20.jpg',
                name: 'parham soheili',
                position: 'social media executive',
            },
           
           
        ]
    }

    hoverTest(index) {
        this.setState({ showIndex: index })
    }


    closeHover() {
        this.setState({ showIndex: null })
    }
    render() {
        return (
            <div className="container">
                <p className="ourteam-title">Our Team</p>
                <div className="row">
                    {this.state.team.map((prop, index) => {
                        return (
                            <div key={index} className="col-xl-3 col-md-4 col-sm-12 my-2 for-background-test" >
                                <img src={prop?.img} alt="" className="profile-our-team" />
                                <div className="hide pt-4">
                                    <p className='px-3' style={{fontSize:"32px",fontWeight:"bold"}}>{prop.name}</p>
                                    <p className='px-3' style={{color:"#ddd"}}>{prop.position}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default Ourteam;
