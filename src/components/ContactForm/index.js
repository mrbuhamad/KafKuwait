import React, {Component} from 'react';

import './style.scss';
import {validateEmail} from "../../commonFunctions";

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        errors: '',
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitHandler = e => {
        e.preventDefault();
        
        const errors = this.validate();

        if (errors){
            return this.setState({
                errors: errors || {},
            });
        }

        this.setState({
            name: '',
            email: '',
            message: '',
            errors: {},
        });

        alert('Successfully Send!');
    };

    validate = () => {
        let errors = {};

        const { name, email, message} = this.state;

        if (name === '') {
            errors.name = 'Please give a name';
        }
        if (name !== '') {
            delete errors.name;
        }
        if (email !== '' || validateEmail(email)) {
            delete errors.email;
        }
        if (email === '' || !validateEmail(email)) {
            errors.email = 'Please give a valid email';
        }

        if (message === '') {
            errors.message = 'Please give message';
        }
        if (message !== '') {
            delete errors.message;
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    modalClose = () => {
        this.props.modalClose();
        this.setState({
            errors: {},
        });
    }

    render() {
        const {open} = this.props;
        let {name, email, message } =  this.state;

        return (
            <div className={`contactWrapper ${open}`}>
                <div className="modalClose" onClick={this.modalClose}>
                    <span></span>
                    <span></span>
                </div>
                <div className="cntInner">
                    <div className="cntHead">
                        <h4>Contact with us</h4>
                    </div>
                    <div className="cntForm">
                        <form onSubmit={this.submitHandler}>
                            <div className="formBox">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={this.changeHandler}
                                    placeholder="Enter your name"
                                />
                                <span className="isInValid">{this.state.errors.name}</span>
                            </div>
                            <div className="formBox">
                                <label htmlFor="name">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={this.changeHandler}
                                    placeholder="Enter your email"
                                />
                                <span className="isInValid">{this.state.errors.email}</span>
                            </div>
                            <div className="formBox">
                                <label htmlFor="name">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your Message"
                                    value={message}
                                    onChange={this.changeHandler}
                                ></textarea>
                                <span className="isInValid">{this.state.errors.message}</span>
                            </div>
                            <div className="formSubmit">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;