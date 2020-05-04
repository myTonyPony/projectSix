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
  onHandleSubmit = () => {
    axios({
      url: `https://api.sunrise-sunset.org/json`,
      method: `GET`,
      responseType: `json`,
      params: {
        lat: 43.6532,
        lng: -79.3832,
        date: '',
        sunrise: '',
        sunset: '',
      }
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          suggestedTime: response.data
        })
      });
  }

  render() {
    return (
      <main>
        <h1>Fun Run</h1>
        <Form />
      </main>
    )
  }
}

export default App;
