import React, { Component } from 'react';
import NavigationItems from './../../component/header/navigation/NavigationItems';
import Color from './../../component/header/colorline/Color';
import './Profail.css';
import { connect } from 'react-redux';
import * as user from "../../store/action/user";
import { Link } from 'react-router-dom';


class Profail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {

        this.props.getUser();
    }

    delete_user = (e) => {
        const id = e.target.getAttribute('data-id');
        e.preventDefault();
        user.delete_user({
            id: id,
        }, function () {
            alert('ss');
        });

    }

    handleChange(event) {
        this.setState({ id: event.target.value });
        console.log(this.state.id);
    }

    render() {

        if (this.props.list !== undefined) {
            const List = this.props.list;
            var x = List.map(num => (
                <tbody key={num.id}>
                    <tr>
                        <td className="id">{num.id}</td>
                        <td className="name">{num.name}</td>
                        <td>{num.email}</td>
                        <td> <Link to="#" data-id={num.id} onClick={e => this.delete_user(e)}>delete</Link></td>
                        <td><Link to={`/edit/${num.id}`} >edit</Link></td>
                    </tr>
                </tbody>
            ));
        };

        return (
            <div>
                <NavigationItems />
                <Color />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="id">id</th>
                                <th className="id">name</th>
                                <th>email</th>
                                <th>delete</th>
                                <th>edit</th>
                            </tr>
                        </thead>
                        {x}
                    </table>
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
)(Profail);
