import React, { Component } from 'react';


import './Button.css';


class Button extends Component {

    render() {
        return (
        <button type={this.props.type} className="button">{this.props.children}</button>
        );
    }
}

export default Button;
