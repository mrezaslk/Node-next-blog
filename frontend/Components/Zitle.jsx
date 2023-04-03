import React, { Component } from 'react'

class Zitle extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="mains d-flex p-0">
                        <div className="col-xl-4 black-layer" style={{overflowY:'hidden',position:'relative',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh' ,backgroundImage:"url(" +`${this.props.imageId}` + ")"}}>
                        <div className="logo-login-handle">
                        <a>
                            <img src="" alt="" />
                        </a>
                        <span></span>
                        <a></a>
                        <a></a>
                        </div>
                        </div>
                        <div className="col-xl-4 black-layer" style={{overflowY:'hidden',position:'relative',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh' ,backgroundImage:"url(" +`${this.props.imageIdSec}` + ")"}}>
                        <div className="logo-login-handle">
                        <a>
                            <img src="" alt="" />
                        </a>
                        <span></span>
                        <a></a>
                        <a></a>
                        </div>
                        </div>
                        <div className="col-xl-4 black-layer" style={{overflowY:'hidden',position:'relative',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh' ,backgroundImage:"url(" +`${this.props.imageIdThird}` + ")"}}>
                        <div className="logo-login-handle">
                        <a>
                            <img src="" alt="" />
                        </a>
                        <span></span>
                        <a></a>
                        <a></a>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default  Zitle;
