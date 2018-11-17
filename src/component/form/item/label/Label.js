import React, { Component } from 'react';

import './Label.css';
class Label extends Component {

    render() {
        return (

            <label htmlFor={this.props.htmlFor} className="label">{this.props.children}</label>
        );
    }

}

export default Label;