import React from "react";
import "./usertime.scss"

const Usertime = (props) => {
  return (
    <section className={props.nightOrDay ? "resultsSectionMorning" : "resultsSectionNight"}>
      <div className="container resultsInfo">
        <p className="resultsBlurb">{props.nightOrDay ? "Here is your morning run! Enjoy the sunrise." : "Here is your night run! Enjoy the sunset."}</p>
        <h3 className={props.nightOrDay ? "resultsMorning" : "resultsNight"}>{props.userTime}</h3>
        <button className="reset" onClick={props.resetPage}>
          <i class="fas fa-sync-alt" aria-hidden="true" title="refresh page"></i>
        </button>
      </div>
    </section>
  );
}

export default Usertime;
