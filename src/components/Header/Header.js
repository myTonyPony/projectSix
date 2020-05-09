import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
     
    render() {
        return (
            <header>
                <div className="headerContainer">
                    <div className="headerContent">
                        <h1>Twilight Me</h1>
                    </div>
                    <div className="infoButton dropdown">
                        <i className="fas fa-info-circle"></i>
                        <div className="dropdownContent">
                            <p>You can define twilight simply as the time of day between daylight and darkness, whether that's after sunset, or before sunrise. It's a time when the light from the sky appears diffused and often pinkish.</p>
                            <p> You want to experience this on your run! Let us twilight you: click on "go run!" above.</p>
                        </div>
                    </div>
                    <a href="#form" className="goRun btn" onClick={this.clicked}>go run!</a>
                </div>
            </header>
        );
    }
}

export default Header;