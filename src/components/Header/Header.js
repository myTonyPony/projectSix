import React from 'react';

function Header(props) {
  return(
      <header>
          <div className="headerContainer container">
              <div className="headerContent">
                  <h1>Twilight Me</h1>
              </div>
              <div className="hederInfo dropdown">
                  <div className="infoButton">
                      <button><i onClick={props.toggleInfo} className="fas fa-info-circle"></i></button>
                  </div>
                  <div className={props.toggleInfo ? "dropdownContent" :"hidden"}>
                      <p>You can define twilight simply as the time of day between daylight and darkness, whether that's after sunset, or before sunrise. It's a time when the light from the sky appears diffused and often pinkish.</p>
                      <p> You want to experience this on your run! Let us twilight you: click on "go run!" below.</p>
                  </div>
                  <div className="runButton">
                      <a href="#form" className="goRun btn" onClick={props.clicked}>go run!</a>
                  </div>
              </div>
          </div>
      </header>
  );
};

export default Header;
