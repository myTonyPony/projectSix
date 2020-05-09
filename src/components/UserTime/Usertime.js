import React from "react";
import "./usertime.scss"

const Usertime = (props) => {
  console.log(props);
  return (
    <section className="resultsSectionMorning">
      <div className="container resultsInfo">
        <p className="resultsBlurb">Morning person eh? Here is your morning run</p>
        <h3 className="results">{props.userTime}</h3>
      </div>
    </section>
  );
}

export default Usertime;
