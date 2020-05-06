import React from 'react'



        function Form (props){    
            return (
              <form action="" onSubmit={props.handleSubmit}>
                <h3>when would you like to run?</h3>

                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={props.handleDate}
                  value={props.date}
                />
                <label htmlFor="date"></label>
                <input
                  type="radio"
                  id="beforeSunrise"
                  name="beforeSunrise"
                  value='true'
                  onChange={props.handleSunrise}
                />
                <label htmlFor="beforeSunrise">before sunrise</label>

                <input
                  type="radio"
                  id="beforeSunset"
                  name="beforeSunrise"
                  value='false'
                  onChange={props.handleSunrise}
                />
                <label htmlFor="beforeSunset">before sunset</label>

                {/* consider error handling - min and max */}

                <select onChange={props.handleDuration} value={props.duration}>
                  <option value="">run duration</option>
                  <option value="900">15 mins</option>
                  <option value="1800">30 mins</option>
                  <option value="2700">45 mins</option>
                  <option value="3600">60 mins</option>
                </select>
                <div>
                  <button type="submit">twilight me</button> 
                  {/* change to input */}
                </div>
              </form>
            );
    }

export default Form;