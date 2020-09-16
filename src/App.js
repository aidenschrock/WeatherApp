
import React from 'react';

import './App.css';
import './css/weather-icons.min.css';
import './css/bootstrap.min.css';
import Weather from './components/weather.component';
import Form from './components/form.component.jsx'


const API_key = "a03fb2dfe69f2eeba7e41840ccb2806e";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false

    };


    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"

    };
  }

  get_WeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 299:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 499:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 599:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeID >= 600 && rangeID <= 699:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeID >= 700 && rangeID <= 799:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  calFarhenheit(temp) {
    let farh = Math.floor(temp * 9 / 5 + 32);
    return farh;
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {

      const api_call = await fetch(`http://api.weatherstack.com/forecast?access_key=${API_key}&query=${city},${country}`)

      const response = await api_call.json();

      console.log(response);
      let dates = null
      if(response?.forecast){ 
        dates = Object.keys(response.forecast)
      }


      this.setState({
        city: `${response.location.name},${response.location.country}`,
        farhenheit: this.calFarhenheit(response.current.temperature),
        temp_max: dates ? this.calFarhenheit(response.forecast[dates[0]].maxtemp) : null,
        temp_min: dates ? this.calFarhenheit(response.forecast[dates[0]].mintemp) : null,
        description: response.current.weather_descriptions,
        error: false
      });

      this.get_WeatherIcon(this.weatherIcon, response.current.weather_code);

    } else {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_farhenheit={this.state.farhenheit}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  };

};


export default App;

