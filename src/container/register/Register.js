import React, { Component } from 'react';
import NavigationItems from './../../component/header/navigation/NavigationItems';
import Color from './../../component/header/colorline/Color';
import Input from './../../component/form/item/input/Input';
import Button from './../../component/form/item/button/Button';
import Label from './../../component/form/item/label/Label';
import Error from './../../component/error/Error';
import { connect } from 'react-redux';
import * as user from "../../store/action/user";



import './Register.css';

const initiaState = {
    name: '',
    email: '',
    password: '',
    password_confirm: '',
    nameError: '',
    emailError: '',
    passwordError: '',
}

class Register extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    constructor(props) {
        super(props);
        this.state = initiaState;


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.name) {
            nameError = 'name reuired';
        }

        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }
        if (this.state.password !== this.state.password_confirm) {
            passwordError = 'password confirm';
        }

        if (emailError || nameError || passwordError) {
            this.setState({ emailError, nameError, passwordError });
            return false;
        }
        return true;
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        user.add_user({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }, function () {
            alert("register");
        });

        const isValide = this.validate();
        if (isValide) {

            this.setState(initiaState);
        }

    }

    render() {
        return (
            <div>
                <NavigationItems />
                <Color />
                <div className="register">
                    <form onSubmit={this.handleSubmit}>
                        <div className="title-register">
                            Register
                    </div>
                        <hr />
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input type="name" value={this.state.name} onChange={this.handleChange} name="name" placeholder="enter name" />
                        </div>
                        <Error>{this.state.nameError}</Error>
                        <div>
                            <Label htmlFor="email" >Email address</Label>
                            <Input value={this.state.email} onChange={this.handleChange} name="email" placeholder="enter email" />
                        </div>
                        <Error>{this.state.emailError}</Error>
                        <div>
                            <Label htmlFor="Password">Password</Label>
                            <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="password" />
                        </div>
                        <div>
                            <Label htmlFor="password_confirm">Confirm Password</Label>
                            <Input type="password" value={this.state.password_confirm} onChange={this.handleChange} name="password_confirm" placeholder="confirm-password" />
                        </div>
                        <Error>{this.state.passwordError}</Error>
                        <div className="buttom">
                            <Button type="submit" >create</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {    
    return {
        list: state.list_user[0]
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            dispatch(user.get_user());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
