import React, {Component} from "react";

import './style.scss';

import BgImage from '../../images/bg/bg4.jpg';
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Button from "reactstrap/es/Button";
import FontAwesome from "../UiStyle/FontAwesome";

export class TravelContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitHandler = e => {
        e.preventDefault();
        
        console.log('fghjkl;hgfdfg');
    };


    render() {

        const {open, contactHandler} = this.props;
        const {name, email, message} = this.state;

        return(
            <div className={`tvContact ${open ? 'show' : ''}`} style={{background: `url(${BgImage}) center/cover no-repeat`}}>
                <div className="closser" onClick={contactHandler}><FontAwesome name="times" /></div>
                <Form onSubmit={this.submitHandler}>
                    <h4>Contact Form</h4>
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            name="name"
                            onChange={this.changeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            name="email"
                            onChange={this.changeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="message">Message</label>
                        <input
                            type="text"
                            placeholder="Enter your message"
                            value={message}
                            name="message"
                            onChange={this.changeHandler}
                        />
                    </FormGroup>
                    <Button className="cbtn" type="submit">Send</Button>
                </Form>
            </div>
        )
    }
}

export default TravelContactForm;