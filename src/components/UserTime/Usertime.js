import React from "react";

const Usertime = (props) => {
  console.log(props);
  return (
    <section className="resultsSectionMorning">
      <div className="container resultsInfo">
        <h3 className="results">{props.userTime}</h3>
        <button className="reset" onClick={props.resetPage}><i class="fas fa-sync-alt" aria-hidden="true" title="refresh page"></i></button>
      </div>
    </section>
  );
}

export default Usertime;
