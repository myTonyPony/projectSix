import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            

            <form action="">
                <h3>when would you like to run?</h3>

                <input type="radio" id="beforeSunrise" name="sunrise" value="beforeSunrise" />
                <label htmlFor="beforeSunrise">before sunrise</label>

                <input type="radio" id="beforeSunset" name="sunrise" value="beforeSunset" />
                <label htmlFor="beforeSunset">before sunset</label>
{/* consider error handling - min and max */}
                <input type="date" name="date" id="date" />
                <label htmlFor="date"></label>
                <select>
                    <option value="">run duration</option>
                    <option value="">15 mins</option>
                    <option value="">30 mins</option>
                    <option value="">45 mins</option>
                    <option value="">60 mins</option>
                </select>
                <div>
                    <button type="submit">twilight me</button>
                </div>
            </form>
        )
    }
}



export default Form;