import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <div className="container">
                <Navbar className="navbar-light bg-light fixed-top">
                    <NavbarBrand>Vegies</NavbarBrand>
                    <NavbarBrand><img src="public/assets/images/logo.png" alt="" height="30"/></NavbarBrand>
                </Navbar>
            </div>
        );
    }
    
}

export default Header;