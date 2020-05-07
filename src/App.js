import React, { Component } from 'react';
import axios from 'axios'
import Moment from 'react-moment'
import 'moment-timezone'

// import components
import Form from './Form';
import UserSelection from './UserSelection'


// First, we get the date for the user of when they would like to run.
// Then, we ask if they'd like to hit the sunrise or the sunset. 
// From there we save the values for the time that either the sunrise ends or sunset ends, depending on the user selection. 
// Then, we ask them for the desired duration of their run and save that value. 
// Then, we subtract that duration from either the sunrise or sunset time (depending on what they chose) to figure out when they should leave to go on their run.

class App extends Component {
  constructor() {
    super();
    this.state = {
      suggestedTime: [], 
      beforeSunrise: null,
      date: '',
      duration: 0,
      userTime:'',
    }
  }

  handleSunrise = (event) => {
    const beforeSunrise = event.target.value === 'true' ? true : false;
    this.setState({
      beforeSunrise
    })
    // console.log(event.target.checked)
  }

  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    })
    // console.log(event.target.value)
    
  }

  handleDuration = (event) => {
    this.setState({
      duration: event.target.value,
    })
    // console.log(event.target.value)
  }


  handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `https://api.sunrise-sunset.org/json`,
      method: `GET`,
      responseType: `json`,
      params: {
        lat: 43.6532,
        lng: -79.3832,
        date: this.state.date,
        
      }
    })
      .then((response) => {
        // console.log(response);
        this.setState({
          suggestedTime: response.data.results
        },() => this.createRun(response) )
        // anon function above delays createRun until api is finished
      });
  }
  stringConverter = (date) => {
    console.log(date)
    // split into three values
    //split method 
    // we may use limit on time
    const dateString = date.split("-",3 )
    console.log(dateString)
    //map to new array
    return dateString.map((date) => {
      return parseInt(date)
    })    
    // console.log(dateNumber)
  }
  // dateConverter = (date) => date.split("-", 3).map((date) => parseInt(date));
  // do the same for time - concat into one array - additional logic for the 24hr clock could be a condition inside the string converter that pops off the last two digits of that string and if am - pm change into 
  createRun = (response) => {
    const dateArray = this.stringConverter(this.state.date)
    console.log(dateArray)
      // // set variables for Sunset and Sunrise times
      const morningRun = response.data.results.sunrise
      const nightRun = response.data.results.sunset
      const runDuration = parseInt(this.state.duration)
      // DateTime dateTime = DateTime.ParseExact(time, "HH:mm:ss",
      //   CultureInfo.InvariantCulture);
      // console.log(response.data.results)
      // console.log(runDuration)

      const userRun = this.state.beforeSunrise ? morningRun : nightRun
      // const runTime = (userRun - runDuration)
// //////////need to break down date and time into individual values - converting the one string into three values //////////
      // function 

      
      
      const runningTime = new Date(`${this.state.date}(${userRun} - ${runDuration})`);
      const TIME = new Date(`${this.state.date} ${morningRun}`)
      // console.log(TIME)
      // console.log(new Date (runningTime))
      
      // console.log(this.state.date + " " +  (userRun - runDuration))
// mapping to the page // 
      // console.log(userRun);
      // console.log(this.state.beforeSunrise, 'this is current time state')

      // console.log(this.state.beforeSunrise);
      // console.log(nightRun)

      this.setState({
        userTime: runningTime,
      })
      // console.log(this.state.userTime)
      // const myTime = require('moment');
      // myTime = moment(morningRun)
      // console.log(myTime)
      // moment().format();                          // 2020-05-06T20:38:38-04:00
    }
  
      

  render() {
    return (
      <main>
        <h1>Fun Run</h1>

        <Form 
          handleSubmit={this.handleSubmit}
          handleSunrise={this.handleSunrise}
          handleDate={this.handleDate}
          date={this.state.date}
          handleDuration={this.handleDuration}
          duration={this.state.duration}
          beforeSunrise={this.state.beforeSunrise}
          />

          <UserSelection
          userInput={this.userInput}
        />
        <Moment></Moment>
      </main>
    )
  }
}

export default App;
