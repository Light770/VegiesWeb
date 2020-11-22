import React, { Component } from 'react';

class HeadImage extends Component {
    render() {
        return(
            <div>
                <picture className="bg-image">
                    <source media="(max-width: 600px)" srcset="assets/images/bglegumes_600.png"/>
                    <source media="(max-width: 920px)" srcset="assets/images/bglegumes_920.png"/>
                    <source media="(max-width: 1280px)" srcset="assets/images/bglegumes_1280.png"/>
                    <img src="assets/images/bglegumes.png" alt=""/>
                </picture>
            </div>
        );
    }
    
}

export default HeadImage;