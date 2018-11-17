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
            link : ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({link : event.target.value});
        
    }

    handleSubmit(event){
        event.preventDefault();
        action.add_link({
            link: this.state.link
        }, function() {
            alert(" create link");
        });
    }

    render() {
        
        return (
            <div className="link">
                <NavigationItems />
                <div className="link-color">
                    <form className="link-send" onSubmit={this.handleSubmit}>
                        <Label htmlFor="link">Simplify your links</Label>
                        <div>
                            <Input type="text" value={this.state.link} onChange={this.handleChange} placeholder="Your orginal URL here" />
                            <div>
                                <Button type="submit">Shorten</Button>
                            </div>
                        </div>
                        <h6 className="label">All goo.gl URLs and click analytics are public and can be accessed by anyone</h6>
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