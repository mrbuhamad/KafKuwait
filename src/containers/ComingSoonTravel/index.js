import React, {Component} from 'react';
import CountDown from 'reactjs-countdown';

// component
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import TravelPosts from "../../components/TravelPosts";
import TravelContactForm from "../../components/TravelContactForm";

// css
import './style.scss';
import {validateEmail} from "../../commonFunctions";

// images



class ComingSoonTravel extends Component {

    state = {
        email: '',
        open: false,
        errorMessage: ''
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: ''
        })
    };

    contactHandler = () => {
        this.setState({
            open: !this.state.open
        })
    };

    submitHandler = e => {
        e.preventDefault();

        const {email} = this.state;

        if (validateEmail(email)){
            this.setState({
                email: '',
                errorMessage: 'Successfully Subscribed!'
            })
        } else {
            this.setState({
                errorMessage: 'Please give a valid email!'
            })
        }
    };

    render() {

        const {email, open, errorMessage} = this.state;

        return (
            <div className="comingSoonTravel">
                <div className="container-fluid p-0">
                    <Row className="no-gutters">
                        <Col lg={7}>
                            <div className="travelContent">
                                <div className="tvsTitle">
                                    <h2>Coming Soon</h2>
                                </div>
                                <div className="countDown">
                                    <CountDown
                                        end="August 22, 2019"
                                    />
                                </div>
                                <div className="newsletterForm">
                                    <p className={`submitInfo ${errorMessage !== '' ? 'show' : ''}`}>{errorMessage}</p>
                                    <form onSubmit={this.submitHandler}>
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            value={email}
                                            name="email"
                                            className="form-control"
                                            onChange={this.changeHandler}
                                        />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                                <div className="social">
                                    <p>Stay Connected :</p>
                                    <SocialLinks/>
                                </div>
                                <div className={`hamburgerBtn ${open ? 'active' : ''}`} onClick={this.contactHandler}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <TravelPosts/>
                            <TravelContactForm contactHandler={this.contactHandler} open={open} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ComingSoonTravel;