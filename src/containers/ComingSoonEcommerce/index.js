import React,{Component} from 'react';
import CountDown from 'reactjs-countdown';

// component
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import NewsLetter from "../../components/NewsLetter";
import ContactForm from "../../components/ContactForm";
import EcommerceProductRight from "../../components/EcommerceProductRight";
import Logo from "../../components/Logo/Logo";

// images
import EcommerceBg from '../../images/bg/ecommercebg1.jpg';
import logoBlack from '../../images/icon/logo-black.png';

// css
import './style.scss';

export class ComingSoonEcommerce extends Component{

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
            <div className="ecommerceCm">
                <Logo url={logoBlack}/>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                                <div className="cmContent" style={{background: `url(${EcommerceBg}) center/cover no-repeat`}}>
                                    <h2>Coming Soon</h2>
                                    <CountDown
                                        end="August 22, 2019"
                                    />
                                    <NewsLetter />
                                    <div className="contactUs2" onClick={this.modalShow}>Contact Us</div>
                                    <SocialLinks/>
                                </div>
                            <ContactForm
                                open={this.state.open}
                                modalClose={this.modalClose}
                            />
                        </div>
                        <div className="col-lg-6">
                            <EcommerceProductRight/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComingSoonEcommerce;