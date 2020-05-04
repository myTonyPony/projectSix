import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {
  constructor() {
    super();
    this.state = {
      suggestedTime: [], 
    }
  }
  componentDidMount() {
    axios({
      url: `https://api.sunrise-sunset.org/json`,
      method: `GET`,
      responseType: `json`,
      params: {
        lat: 43.6532,
        lng: -79.3832,
        date: 'tomorrow',
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
      </main>
    )
  }
}

export default App;
