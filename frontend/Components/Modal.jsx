import React from "react";

class Modal extends React.Component {
    state = {
        opacity: 1,
        showModal: false,
        maxWidth: 600
    }

    hideModal = () => {
        this.setState({ opacity: 0 })
        if (this.props.onClose) {
            this.props.onClose()
        }
        setTimeout(() => {
            this.setState({ showModal: false })
        }, 550);



    }

    showModal = () => {
        this.setState({ opacity: 1 })
        this.setState({ showModal: true })

    }

    componentDidMount() {
        if (this.props.maxWidth) {
            this.setState({ maxWidth: this.props.maxWidth })
        }
    }

    render() {
        if (this.state.showModal) {
            return (
                <div style={{ ...styles, opacity: this.state.opacity, overflow: 'auto', paddingBottom: '14%', backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'rgba(0,0,0,0.4)', }}>
                    <a style={{ ...backStyles }} onClick={() => { if (!this.props.dontHideOnOverlay) this.hideModal() }}></a>

                    <div style={{ ...contentStyle, maxWidth: this.state.maxWidth, overflow: 'visible' }}>
                        {this.props.children}
                    </div>

                    <div onClick={() => { this.hideModal() }} style={{ height: 30, width: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 10, right: 10, backgroundColor: '#00000050', color: '#fff', borderRadius: 30, fontSize: 20, cursor: 'pointer' }}>
                        <span>X</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}


const styles = {
    transition: 'all 0.5s ease-out , z-index 0s',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(20,30,40,0.4)',

    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 100,
    top: 0,
    left: 0,
    paddingTop: '5%',
    paddingLeft: '0%',

}


const backStyles = {
    // transition: 'all 0.5s ease-out',
    // backgroundColor:'rgba(0,0,0,0.6)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    // zIndex:2000,
    top: 0,
    left: 0,
    // paddingTop:'10%',
    // paddingLeft:'0%',

}



const contentStyle = {
    position: 'relative',
    backgroundColor: '#fff',
    margin: 'auto',
    padding: 0,
    border: '0px solid #888',
    width: '80%',
    borderRadius: 10,
    // padding: 30
    // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    // -webkit-animation-name: animatetop;
    // -webkit-animation-duration: 0.4s;
    // animation-name: animatetop;
    // animation-duration: 0.4s
}

export default Modal;
