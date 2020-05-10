import React from 'react'

function Form(props) {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <h3>When would you like to run?</h3>
      <div className="formParent">
        <div className="dateParent">
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
        <div className="radioParent">
          <input
            type="radio"
            id="beforeSunrise"
            name="beforeSunrise"
            value='true'
            onChange={props.handleSunrise}
          />
          <label htmlFor="beforeSunrise">Before Sunrise</label>

          <input
            type="radio"
            id="beforeSunset"
            name="beforeSunrise"
            value='false'
            onChange={props.handleSunrise}
            required
          />
          <label htmlFor="beforeSunset">Before Sunset</label>
        </div>

        <select onChange={props.handleDuration} value={props.duration} required>
          <option value="">Run Duration</option>
          <option value="15">15 Minutes</option>
          <option value="30">30 Minutes</option>
          <option value="45">45 Minutes</option>
          <option value="60">60 Minutes</option>
        </select>
        <button type="submit" className="submit" className="submit btn">Twilight Me</button>
      </div>
    </form>
  );
}

export default Form;