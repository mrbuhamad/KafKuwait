import React, {Component} from 'react';
import CountDown from 'reactjs-countdown';
import Sparkle from 'react-sparkle';

// component
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import NewsLetter from "../../components/NewsLetter";
import ContactForm from "../../components/ContactForm";
import Logo from "../../components/Logo/Logo";

// images
import logo from '../../images/icon/logo.png';
import BgShape from '../../images/shape/bg-shape1.png';
import BgShape2 from '../../images/shape/shape2.png';

// css
import './style.scss';

class ComingSoonIco extends Component {

    state = {
        open: false
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
        return (
            <div className="comingSoonIco">
                <img src={BgShape} alt="shape" className="bgShape"/>
                <img src={BgShape2} alt="shape" className="bgShape2"/>
                <div className="sparkleWrapper">
                    <Sparkle
                        flicker={false}
                        flickerSpeed={'slower'}
                        fadeOutSpeed={5}
                        overflowPx={50}
                        minSize={1}
                        maxSize={3}
                        count={300}
                        color={'#FFF'}
                    />
                </div>
                <div className="icoHeader">
                    <Logo url={logo} />
                    <SocialLinks/>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="icoContent">
                                <h2>Coming Soon</h2>
                                <CountDown
                                    end="August 22, 2019"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="iconContentRight">
                                <NewsLetter />
                                <div className="contactUs2" onClick={this.modalShow}>Contact Us</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm
                    open={this.state.open}
                    modalClose={this.modalClose}
                />
            </div>
        );
    }
}

export default ComingSoonIco;