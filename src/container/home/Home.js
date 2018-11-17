import React, { Component } from 'react';
import NavbarItems from './../../component/header/navigation/NavigationItems';
import Color from '../../component/header/colorline/Color';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <NavbarItems />
                <Color/>
                <div className="home">
                    <div className="col-3"><h2><i class="material-icons icon-link">link</i>Shorten</h2>Hello Shorten your URL so it’s ready to be shared everywhere</div>
                    <div className="col-3"><h2><i class="material-icons icon-track">trending_up</i>Track</h2>Analytics help you know where your clicks are coming from</div>
                    <div className="col-3"><h2><i class="material-icons icon-pepole">people</i>Learn</h2>Understand and visualize your audience</div>
                </div>
            </div>
        );
        
    }
}
export default Home;