import React, { Component } from 'react';
import axios from 'axios'

// import components
import Form from './Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      suggestedTime: [], 
      isSunset: true,
      date: '',
      duration: '',
    }
  }
  
  handleSunset = (event) => {
    this.setState({
      isSunset: event.target.value,
    })
  }

  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    })
  }

  handleDuration = (event) => {
    this.setState({
      duration: event.target.value,
    })
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
          handleSunset={this.handleSunset}
          sunset={this.state.isSunset}
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
