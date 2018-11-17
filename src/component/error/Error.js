import React, { Component } from 'react';

import './Error.css';

class Error extends Component {
    render(){
        return(<div className="error">{this.props.children}</div>);
    }
}

export default Error ;