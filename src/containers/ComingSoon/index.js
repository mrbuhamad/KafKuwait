import React, { Component } from "react";
import CountDown from "reactjs-countdown";

// component
import NewsLetter from "../../components/NewsLetter";
import ImageSlideShow from "../../components/ImageSlideShow";
import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Logo from "../../components/Logo/Logo";

// images
import logo from "../../images/icon/logo.png";
import SliderImage1 from "../../images/bg/bg1.jpg";
import SliderImage2 from "../../images/bg/bg2.jpg";
// css
import "./style.scss";

const SliderImages = [{ url: SliderImage1 }, { url: SliderImage2 }];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
};

export class ComingSoon extends Component {
  state = {
    open: "",
  };

  modalClose = () => {
    this.setState({
      open: "",
    });
  };
  modalShow = () => {
    this.setState({
      open: "show",
    });
  };

  render() {
    return (
      <div className="comingSoon">
        <Logo url={logo} />
        <div className="slideShowWrapper">
          <ImageSlideShow
            fadeProperties={fadeProperties}
            sliderImages={SliderImages}
          />
        </div>
        <SocialLinks />
        <div className="cmContent">
          <h2>Coming Soon</h2>
          <CountDown end="August 22, 2021" />
          <NewsLetter />
        </div>
        <div className="arrowLineDown"></div>
        <div className="contactUs" onClick={this.modalShow}>
          Contact Us
        </div>
        <ContactForm open={this.state.open} modalClose={this.modalClose} />
      </div>
    );
  }
}

export default ComingSoon;
