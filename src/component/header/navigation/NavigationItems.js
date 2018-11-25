import React, { Component } from 'react';
import Items from './items/Items';

import './NavigationItems.css';

class Navbar extends Component {

    render() {
        return (
            <ul className="navigation">
                <Items link="/linkshortener">LinkShortener</Items>
                <Items link="/profail" >Profail</Items>
                <Items link="/login">Login</Items>
                <Items link="/register" >Register</Items>
                
            </ul>
        );
    }
}
export default Navbar; 