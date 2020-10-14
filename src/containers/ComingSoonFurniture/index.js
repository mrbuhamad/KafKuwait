import React,{Component} from 'react';
import CountDown from 'reactjs-countdown';

// component
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import NewsLetter from "../../components/NewsLetter";
import ContactForm from "../../components/ContactForm";
import Logo from "../../components/Logo/Logo";

// images
import FurnitureBg from '../../images/bg/bg3.jpg';
import logoBlack from '../../images/icon/logo.png';

// css
import './style.scss';

export class ComingSoonFurniture extends Component{

    state = {
        open: ''
    };

    modalClose = () => {
        this.setState({
            open: ''
        })
    };
    modalShow = () => {
        this.setState({
            open: 'show'
        })
    };

    render() {
        return(
            <div className="funitureWrapper" style={{background: `url(${FurnitureBg}) center/cover no-repeat`}}>
                <Logo url={logoBlack}/>
                <SocialLinks/>
                <div className="container-fluid p-0">
                    <div className="cmContent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2>Coming Soon</h2>
                                <NewsLetter />
                                <div className="contactUs2" onClick={this.modalShow}>Contact Us</div>
                                <ContactForm
                                    open={this.state.open}
                                    modalClose={this.modalClose}
                                />
                            </div>
                            <div className="col-lg-6">
                                <CountDown
                                    end="August 22, 2019"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComingSoonFurniture;