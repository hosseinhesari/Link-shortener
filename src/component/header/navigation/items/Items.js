import React ,{Component} from 'react';
import { NavLink } from 'react-router-dom';

import './Items.css';  


export default class Items extends Component{
    render (){
        return (
            <li className="items">
                <NavLink to={this.props.link}>{this.props.children}</NavLink>
            </li>
        );
    }
}