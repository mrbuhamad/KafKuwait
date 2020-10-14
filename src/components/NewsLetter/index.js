import React, {Component} from 'react';
import {validateEmail} from "../../commonFunctions";

import './style.scss';

export class NewsLetter extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        email: '',
        errorMessage: ''
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: ''
        })
    };

    submitHandler = e => {
        e.preventDefault()

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

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        this.setState({
            errorMessage: ''
        })
    }

    render() {
        const {email, errorMessage} = this.state;

        return(
            <div className="newsLetter">
                <div className="newsLeterContent">
                    <h4 className="newsLetterTitle">News Letter</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolores doloribus ducimus est incidunt iste.</p>
                </div>
                <form onSubmit={this.submitHandler} ref={this.setWrapperRef}>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        name="email"
                        onChange={this.changeHandler}
                    />
                    <button type="submit"></button>
                </form>
                <p className={`submitInfo ${errorMessage !== '' ? 'show' : ''}`}>{errorMessage}</p>
            </div>
        )
    }
}

export default NewsLetter;