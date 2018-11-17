import React, { Component } from 'react';
import NavigationItems from './../../component/header/navigation/NavigationItems';
import Color from './../../component/header/colorline/Color';
import './Profail.css';
import { connect } from 'react-redux';
import * as user from "../../store/action/user";
import { Link } from 'react-router-dom';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
            var x =  List.map(num => (
                <Paper>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell numeric>Calories</TableCell>
                                <TableCell numeric>Fat (g)</TableCell>
                                <TableCell numeric>Carbs (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={num.id}>
                                <TableCell component="th" scope="row">   {num.id} </TableCell>
                                <TableCell numeric>{num.name}</TableCell>
                                <TableCell numeric>{num.email}</TableCell>
                                <TableCell numeric>{num.password}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

                // <table key={num.id} className="table">
                //     <tr>
                //         <th>id</th>
                //         <th>name</th>
                //         <th>email</th>
                //         <th>password</th>
                //         <th>delete</th>
                //         <th>edit</th>
                //     </tr>
                //     <tr>
                //         <td>{num.id}</td>
                //         <td>{num.name}</td>
                //         <td>{num.email}</td>
                //         <td>{num.password}</td>
                //         <td><a href="#" data-id={num.id} onClick={e => this.delete_user(e)}>delete</a></td>
                //         <td><Link to={`/edit/${num.id}`} >e</Link></td>
                //     </tr>
                // </table>
            ));
        }

        return (
            <div>
                <NavigationItems />
                <Color />
                {x}
                
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
