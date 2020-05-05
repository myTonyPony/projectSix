import React, { Component } from 'react';
import axios from 'axios'

// import components
import Form from './Form';


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
      isSunrise: true,
      date: '',
      duration: '',
    }
  }

  handleSunrise = (event) => {
    this.setState({
      isSunrise: event.target.value,
    })
    console.log(event.target.value)
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
      }
    })
      .then((response) => {
        console.log(response.data.results.sunrise)
        console.log(response.data.results.sunset)
        this.setState({
          suggestedTime: response.data.results
        })
      });
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
          />
      </main>
    )
  }
}

export default App;
