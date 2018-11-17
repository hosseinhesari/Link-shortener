import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './container/home/Home';
import Login from './container/login/Login';
import Register from './container/register/Register';
import Link from './container/linkshortener/Link';
import store from './store/store';
import Profail from './container/profail/Profail';
import Edit from './container/profail/Edit';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/linkshortener" component={Link} />
            <Route path="/profail" component={Profail} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
} 

export default App;
