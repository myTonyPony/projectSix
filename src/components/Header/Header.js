import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerContainer container">
                    <div className="headerContent">
                        <h1>Twilight Me</h1>
                    </div>
                    <div className="hederInfo dropdown" tabIndex="0">
                        <div className="infoButton">
                            <i className="fas fa-info-circle" tabIndex="0"></i>
                        </div>
                        <div className="dropdownContent" tabIndex="0">
                            <p>You can define twilight simply as the time of day between daylight and darkness, whether that's after sunset, or before sunrise. It's a time when the light from the sky appears diffused and often pinkish.</p>
                            <p> You want to experience this on your run! Let us twilight you: click on "go run!" below.</p>
                        </div>
                        <div className="runButton">
                            <a href="#form" className="goRun btn" onClick={this.clicked}>go run!</a>
                        </div>
                    </div>
                    </div>
            </header>
        );
    }
}

export default Header;