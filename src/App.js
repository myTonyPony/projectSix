import React, { Component } from 'react';
import axios from 'axios'

// import components
import Header from './components/Header/Header'
import Form from './components/Form/Form';
import Usertime from './components/UserTime/Usertime';

//Sass
import './styles/variable.scss'
import './styles/setup.scss'
import './styles/global.scss'

// First, we get the date for the user of when they would like to run.
// Then, we ask if they'd like to hit the sunrise or the sunset. 
// From there we save the values for the time that either the sunrise ends or sunset ends, depending on the user selection. 
// Then, we ask them for the desired duration of their run and save that value. 
// Then, we subtract that duration from either the sunrise or sunset time (depending on what they chose) to figure out when they should leave to go on their run.

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiTimes: [], 
      beforeSunrise: null,
      date: '',
      duration: 0,
      userTime:[],
      morningRun: '',
      nightRun: '',
      showForm: true
    }
  }

  handleSunrise = (event) => {
    const beforeSunrise = event.target.value === 'true' ? true : false;
    this.setState({
      beforeSunrise
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

  // to remove and show form after selection
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.toggleForm();
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
        this.setState({
          apiTimes: response.data.results
        },() => this.createRun() )
        // anon function above delays createRun until api is finished
      });
  }

  //split into three functions and pass the params to the createRun
  dateConverter = (date) => {
  // converts user selected date into number values
    const dateString = date.split("-", 3)
    //map to new array
    return dateString.map((date) => {
      return parseInt(date)
    })
  }
   // converts sunrise time
  sunriseTimeConverter = () => {
    // converts the sunrise time from API - from string to number values
    const sunriseStringOne = this.state.apiTimes.sunrise.split(':', 3)
    const seconds = sunriseStringOne[2].split(" ", 1)
    const sunriseStringThree = sunriseStringOne.pop()
    // concat the two arrays together with out AM/PM values
    const finalSunriseString = sunriseStringOne.concat(seconds)
    // convert array into number values
    const finalSunriseNumber = finalSunriseString.map((sRiseTimes) => {
      return parseInt(sRiseTimes)
    })
    return finalSunriseNumber
  }

  // convert sunset time
  sunsetTimeConverter = () => {
    // coverts sunset time into number values
    const sunsetStringOne = this.state.apiTimes.sunset.split(':', 3)
    const secondsTwo = sunsetStringOne[2].split(" ", 1)
    const sunsetStringThree = sunsetStringOne.pop()
    // concat the two arrays together with out AM/PM values
    const finalSunsetString = sunsetStringOne.concat(secondsTwo)
    // convert array into number values
    const finalSunsetNumber = finalSunsetString.map((sunsetTimes) => {
      return parseInt(sunsetTimes)
    })
    return finalSunsetNumber;
  }

  // this converts the sunrise time to 24 hour time
  convertTimeFormat = (formattedTime) => {
    const timeToConvert = [...formattedTime]

    if (timeToConvert[0] === 12) {
      const newHour = timeToConvert[0] - 12
      const newTimeToConvert = timeToConvert.shift()
      const formattedTimeAgain = timeToConvert.unshift(newHour)

    } else {
      const sameHour = timeToConvert[0] - 0
    }
    //returns to the function in createRun
    return timeToConvert;
  }

  //this converts the sunset time to EST time
  timeToEst = (easternTime) => {
    
    if (easternTime[3] >= 5) {
      return easternTime[3] - 4
    } else {
      return easternTime[3] + 20
    }
  }

  resetPage = () => {
    window.location.reload()
  }

  // creates user run
  createRun = () => {
    // this is the value returned from timeConverter
    const dateArray = this.dateConverter(this.state.date)
    // this the value returned from the sunriseTimeConverter
    const sunriseTimeArray = this.sunriseTimeConverter()
    const sunsetTimeArray = this.sunsetTimeConverter()
    
    const formattedSunsetArray = this.convertTimeFormat(sunsetTimeArray)

    const sunsetDateArray = dateArray.concat(formattedSunsetArray)
    const sunriseDateArray = dateArray.concat(sunriseTimeArray);

    const convertedToSunsetEst = this.timeToEst(sunsetDateArray)
    const convertedToSunriseEst = this.timeToEst(sunriseDateArray)

    const sunsetDateArrayFinal = [...sunsetDateArray]
    sunsetDateArrayFinal[3] = convertedToSunsetEst;

    const sunriseDateArrayFinal = [...sunriseDateArray]
    sunriseDateArrayFinal[3] = convertedToSunriseEst;

    const sunsetDateObject = new Date(...sunsetDateArrayFinal);

    const sunriseDateObject = new Date(...sunriseDateArrayFinal)
    
    const runDuration = parseInt(this.state.duration);

      // set variables for Sunset and Sunrise times
    let morningRun = sunriseDateObject;
    morningRun.setMinutes(morningRun.getMinutes()-runDuration)

    let nightRun = sunsetDateObject;
    nightRun.setMinutes(nightRun.getMinutes()-runDuration)

    const morningRunString = morningRun.toTimeString()

    const nightRunString = nightRun.toTimeString()

    const finalMorningString = morningRunString.slice(0,8)

    const finalNightString = nightRunString.slice(0,8)

    const userRun = this.state.beforeSunrise ? finalMorningString : finalNightString

// setting state with new string
      this.setState({
        userTime: userRun
      })
    }

  render() {
    return (
      <div>
        <Header />
        <section className="formSection" id="form">
          <div>   
        {this.state.showForm ?
          <Form 
            handleSubmit={this.handleSubmit}
            handleSunrise={this.handleSunrise}
            handleDate={this.handleDate}
            date={this.state.date}
            handleDuration={this.handleDuration}
            duration={this.state.duration}
            beforeSunrise={this.state.beforeSunrise}
            />
              : <Usertime 
              userTime={this.state.userTime}
              resetPage={this.resetPage}
              nightOrDay={this.state.beforeSunrise} />
            }
            </div>
          </section>
      </div>
    )
  }
}

export default App;
