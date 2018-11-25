import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    render(){
        return(
            <input className={this.props.className} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} autoComplete="off" />
        );
    }
}
 
export default Input ;