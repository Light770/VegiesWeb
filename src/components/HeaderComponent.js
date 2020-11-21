import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <div className="container">
                <Navbar className="navbar-light bg-light fixed-top">
                    <NavbarBrand><img src="assets/images/logo.png" alt="" height="100"/></NavbarBrand>
                </Navbar>
            </div>
        );
    }
    
}

export default Header;