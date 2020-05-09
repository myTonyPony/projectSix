import React from 'react'
import '../../styles/variable.scss'
import './form.scss'



        function Form (props){    
            return (
              <form action="" onSubmit={props.handleSubmit}>
                <h3>when would you like to run?</h3>
                  <div className="formParent">
                    <div className="dateParent">
                      <label htmlFor="date" className="dateLabel">Date:</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={props.handleDate}
                        value={props.date}
                        required
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
                      <label htmlFor="beforeSunrise">before sunrise</label>

                      <input
                        type="radio"
                        id="beforeSunset"
                        name="beforeSunrise"
                        value='false'
                        onChange={props.handleSunrise}
                        required
                      />
                      <label htmlFor="beforeSunset">before sunset</label>
                    </div>

                    <select onChange={props.handleDuration} value={props.duration} required>
                      <option value="">run duration</option>
                      <option value="15">15 mins</option>
                      <option value="30">30 mins</option>
                      <option value="45">45 mins</option>
                      <option value="60">60 mins</option>
                    </select>
                    <button type="submit" className="btn submit">twilight me</button> 
                </div>
              </form>
            );
    }

export default Form;