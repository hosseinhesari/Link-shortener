import React, { Component } from 'react';
import NavigationItems from './../../component/header/navigation/NavigationItems';
import Input from '../../component/form/item/input/Input';
import { connect } from 'react-redux';
import './Link.css';
import Label from '../../component/form/item/label/Label';
import Button from '../../component/form/item/button/Button';
import * as action from "../../store/action/action";

class Link extends Component {

    componentDidMount() {
        this.props.getLink();
    }

    constructor(props) {
        super(props);
        this.state = {
            link: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ link: event.target.value });

    }

    handleSubmit(event) {
        event.preventDefault();
        action.add_link({
            link: this.state.link
        }, function () {
            alert(" create link");
        });
    }

    render() {

        return (
            <div>
            <NavigationItems />
            <div className="color">
                <form onSubmit={this.handleSubmit}>
                    <Label className="container">Simplify your links</Label>
                    <div className="row">
                        <Input className="col-6" type="text" value={this.state.link} onChange={this.handleChange} placeholder="Your orginal URL here" />
                        <Button className="col-1" type="submit">Shorten</Button>
                    </div>
                    <h6 className="container">All goo.gl URLs and click analytics are public and can be accessed by anyone</h6>
                </form>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.link_list[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLink: () => {
            dispatch(action.get_links());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);