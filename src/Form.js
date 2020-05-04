import React from 'react'



        function Form (props){    
            return (
            <form action="" onSubmit={props.handleSubmit}>
                <h3>when would you like to run?</h3>

                <input 
                    type="radio" 
                    id="beforeSunrise" 
                    name="sunrise" value={props.isSunset}
                    onChange={props.handleSunset}/>
                <label htmlFor="beforeSunrise">before sunrise</label>

                <input 
                    type="radio" 
                    id="beforeSunset" 
                    name="sunrise" value={props.isSunset}
                    onChange={props.handleSunset}
                    />
                <label htmlFor="beforeSunset">before sunset</label>

                {/* consider error handling - min and max */}
                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    onChange={props.handleDate}
                    value={props.date}
                    />
                <label htmlFor="date"></label>

                <select 
                    onChange={props.handleDuration} value={props.duration}>
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
        );
    }

export default Form;