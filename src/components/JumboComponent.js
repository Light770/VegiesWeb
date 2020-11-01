import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';

class Jumbo extends Component {
    render() {
        return(
            <div className="container">
                <Jumbotron>
                    <img src="public/assets/images/bglegumes.png" alt=""></img>
                </Jumbotron>
            </div>
        );
    }
    
}

export default Jumbo;