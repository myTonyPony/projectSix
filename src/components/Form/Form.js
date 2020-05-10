import React from 'react'

function Form(props) {
  return (
    <div>
    <h3>When would you like to run?</h3>
    <form action="" onSubmit={props.handleSubmit}>
      <div className="formParent">
        <div className="dateParent">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={props.handleDate}
            value={props.date}
            required
            min="1980-01-02"
            max="2040-01-02"
          />
        </div>
        <p className="radio">Time of day</p>
        <select onChange={props.handleSunrise} required>
          <option value="">Time</option>
          <option value="true">Before Sunrise</option>
          <option value="false">Before Sunset</option>
        </select>
        <p className="select">Run duration</p>
        <select onChange={props.handleDuration} value={props.duration} required>
          <option value="">Minutes</option>
          <option value="15">15 Minutes</option>
          <option value="30">30 Minutes</option>
          <option value="45">45 Minutes</option>
          <option value="60">60 Minutes</option>
        </select>
        <button type="submit" className="submit btn">Twilight Me</button>
      </div>
    </form>
    </div>
  );
}

export default Form;