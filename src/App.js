import React, { Component } from 'react';
import axios from 'axios'

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
    console.log(event.target.checked)
  }

  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    })
    console.log(event.target.value)
    
  }

  handleDuration = (event) => {
    this.setState({
      duration: event.target.value,
    })
    console.log(event.target.value)
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
        console.log(response);
        this.setState({
          suggestedTime: response.data.results
        },() => this.createRun(response) )
        // anon function above delays createRun until api is finished
      });
  }

    createRun = (response) => {
      // // set variables for Sunset and Sunrise times
      const morningRun = parseInt(response.data.results.sunrise)
      const nightRun = parseInt(response.data.results.sunset)
      const runDuration = parseInt(this.state.duration)
      
      const userRun = this.state.beforeSunrise ? morningRun : nightRun
      const runTime = (userRun - runDuration)
      console.log(userRun);
      console.log(this.state.beforeSunrise, 'this is current time state')

      console.log(this.state.beforeSunrise);
      console.log(nightRun)

      this.setState({
        userTime: runTime,
      })
      console.log(this.state.userTime)
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
      </main>
    )
  }
}

export default App;
