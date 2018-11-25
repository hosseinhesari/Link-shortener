import React, { Component } from 'react';
import NavigationItems from './../../component/header/navigation/NavigationItems';
import Color from './../../component/header/colorline/Color';
import Input from '../../component/form/item/input/Input';
import Label from '../../component/form/item/label/Label';
import Button from '../../component/form/item/button/Button';
import * as user from "../../store/action/user";
import './Edit.css';



const initiaState = {
    name: '',
    email: '',
    password: '',
}

class Edit extends Component {

    

    constructor(props){
        super(props);
        this.state = initiaState;


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        const id = this.props.match.params.id;
        event.preventDefault();
        user.put_user({
            id: id ,
            name: this.state.name ,
            email: this.state.email,
            password: this.state.password,
        }, function () {
            alert("DONE");
        });

    }
    handleChange = event => {

        this.setState({ [event.target.name]: event.target.value });
    }

    render() {        
        return (
            <div>
                <NavigationItems />
                <Color />
                <div className="edit">
                    <form onSubmit={this.handleSubmit} >
                        <div className="title-edit">
                            Edit User
                    </div>
                        <hr />
                        <div>
                            <Label htmlFor="name">Name :</Label>
                            <Input className="col-12" type="name"  onChange={this.handleChange} name="name" placeholder="enter name"  />
                        </div>
                        <div>
                            <Label htmlFor="email" >Email address :</Label>
                            <Input className="col-12" name="email"  onChange={this.handleChange}  placeholder="enter email" />
                        </div>
                        <div>
                            <Label htmlFor="Password">Password :</Label>
                            <Input className="col-12" type="password"  onChange={this.handleChange} name="password" placeholder="password" />
                        </div>
                        <div>
                            <Label htmlFor="password_confirm">Confirm Password :</Label>
                            <Input className="col-12" type="password" onChange={this.handleChange} name="password_confirm" placeholder="confirm-password" />
                        </div>

                        <div className="buttom">
                            <Button type="submit" >create</Button>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}



export default (Edit);

