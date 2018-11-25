import React, { Component } from 'react';


import './Button.css';


class Button extends Component {

    render() {
        return (
        <button type={this.props.type} className={this.props.className}>{this.props.children}</button>
        );
    }
}

export default Button;
