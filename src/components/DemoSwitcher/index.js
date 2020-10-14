import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './style.scss';

export class DemoSwitcher extends Component{

    state = {
        show: '',
        pathname: 'ecm'
    };

    toggleHandler = () => {
        this.setState({
            show: !this.state.show
        })
    };

    componentDidMount() {
        let pathname = window.location.pathname.replace("/","");
        if (pathname === ''){
            return pathname = 'ecm';
        }
        this.setState({
            pathname,
        })
    }

    colorHandler = prop => () => {
        this.setState({
            pathname: prop,
        })
    };

    render(){

        let {show, pathname} = this.state;

        return(
            <div className={`chooseDemoWrapper ${show ? 'visible' : ''}`}>
                <div className={`closer ${pathname}`} onClick={this.toggleHandler}>
                    <span></span>
                    <span></span>
                </div>
                <div className="list">
                    <NavLink onClick={this.colorHandler('ecm')} exact activeClassName="active" className={`chooseDemo ${pathname}`} to="/">Ecommerce Version</NavLink>
                    <NavLink onClick={this.colorHandler('ico')} className={`chooseDemo ${pathname}`} to="/ico">Ico Version</NavLink>
                    <NavLink onClick={this.colorHandler('dark')} className={`chooseDemo ${pathname}`} to="/dark">Dark Version</NavLink>
                    <NavLink onClick={this.colorHandler('furniture')} className={`chooseDemo ${pathname}`} to="/furniture">Furniture Version</NavLink>
                    <NavLink onClick={this.colorHandler('travel')} className={`chooseDemo ${pathname}`} to="/travel">Travel Version</NavLink>
                </div>
            </div>
        )
    }
}

export default DemoSwitcher;