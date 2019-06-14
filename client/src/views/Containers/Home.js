import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'


class Home extends Component { 
   constructor(props) {
      super(props)

      this.state = {
         value: '',
         pressure: '',
         tempHigh: '',
         temp: '',
         tempLow: '',
         city: '',
         weather: ''
      }
      this.getWeatherInfo = this.getWeatherInfo.bind(this);
      this.handleChange = this.handleChange.bind(this)
   }

   async componentDidMount() {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=11375,us&appid=b0bbd64a26c6a0fb7234ef7ab2296b74`)

      const weatherInfo = res.data;
      console.log(weatherInfo, 'what is weather info')
      const pressure = weatherInfo.main.pressure;
      const tempHigh = weatherInfo.main.temp_max;
      const tempLow = weatherInfo.main.temp_min;
      const city = weatherInfo.name;
      const temp = weatherInfo.main.temp;
      const weather = weatherInfo.weather[0].main

      this.setState({
         pressure,
         temp,
         tempHigh,
         tempLow,
         city,
         weather
      })
   }

   async getWeatherInfo(zipcode) {
      this.setState({
         city: 'Woodbury'
      })
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=b0bbd64a26c6a0fb7234ef7ab2296b74`)

      const weatherInfo = res.data;
      console.log(weatherInfo, 'what is weather info')
   }

   handleChange(event) {
      this.setState({value: event.target.value})
   }

   render() {
   return (
      <div>
         <div className='header'>
            <h1>RainOrShine</h1>
            <br></br>
            
         </div><h4>Your search location is {this.state.city}:</h4>
            <ul>
               <li>Weather: {this.state.weather}</li>
               <li>Pressure: {this.state.pressure}</li>
               <li>Current Temp: {this.state.temp} °</li>
               <li>High: {this.state.tempHigh}°</li>
               <li>Low: {this.state.tempLow}°</li>
               

            </ul>
         <div className = 'current-weather-info'>
         
        <img src='https://cdn.dribbble.com/users/2055420/screenshots/6024723/cloud-400x300.gif'/>
        </div>
         <div className="instructions">
            <p>Enter a US zipcode below to get the current weather conditions for the area.</p>
         </div>
         <div className='zipcodeInput'>
	  <form >
	     <input type='text' placeholder='Enter zipcode..' name='zipcode'onChange={this.handleChange}/>
	     <button className='button' onClick={()=> {this.getWeatherInfo(this.state.value)}}>ENTER</button>
	  </form>
         </div>
      </div>
   )
   }
}

export default Home