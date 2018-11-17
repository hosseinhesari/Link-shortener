import React, { Component } from 'react';
import NavigationItems from './../../component/header/navigation/NavigationItems';
import Color from './../../component/header/colorline/Color';
import Input from './../../component/form/item/input/Input';
import Button from './../../component/form/item/button/Button';
import Label from './../../component/form/item/label/Label';

import './Login.css';


class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            email : '',
            password : '',
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <NavigationItems />
                <Color />
                <div className="login">
                    <form onSubmit={this.handleSubmit}>
                        <div className="title-login">
                            Login to your account
                        </div>
                        <hr />
                        <div>

                            <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="enter email" />
                        </div>
                        <div>
                            <Label htmlFor="Password">Password</Label>
                            <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="password" />
                        </div>
                        <div className="buttom">
                            <Button type="submit" >Sign in</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;