import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <div>
                <Navbar className="navbar fixed-top navbar-light bg-light">
                    <div className="button-main-menu">
                        <button>
                            <span className="fa fa-bars fa-2x"></span>
                            Products
                        </button>
                    </div>
                    <NavbarBrand className="navbrand"><img src="assets/images/logo.png" alt="" height="50vh"/></NavbarBrand>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="search-button"><span className="fa fa-search fa-2x"></span></button>
                    </form>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <button className="nav-item-button">
                                <span className="fa fa-user fa-2x"></span>
                                <a className="nav-link" href="#">Account</a>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-item-button">
                                <span className="fa fa-list-ul fa-2x"></span>
                                <a className="nav-link" href="#">Lists</a>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-item-button">
                                <span className="fa fa-shopping-cart fa-2x"></span>
                                <a className="nav-link" href="#">Cart</a>
                            </button>
                        </li>
                    </ul>
                </Navbar>
            </div>
        );
    }
    
}

export default Header;