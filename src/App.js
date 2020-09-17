
import React from 'react';

import './App.css';
import './css/weather-icons.min.css';
import './css/bootstrap.min.css';
import Weather from './components/weather.component';
import Form from './components/form.component.jsx'


const API_key = "3c4b4a4758aef4aef45036a83dcf6281";

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
    let farh = Math.floor((temp-273.15) * 9 / 5 + 32);
    return farh;
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {

      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
      const response = await api_call.json();

      console.log(response);
      

      this.setState({
        city: `${response.name},${response.sys.country}`,
        farhenheit: this.calFarhenheit(response.main.temp),
        temp_max: this.calFarhenheit(response.main.temp_max),
        temp_min:this.calFarhenheit(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

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

