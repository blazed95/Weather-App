import React from 'react';
import Weather from "./components/Weaher.js";
import Form from "./components/Form.js";
import Titles from "./components/Titles.js";
import API_KEY from "./config.js";

//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      description: undefined,
      error: false
    };

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async (e) => {
    e.preventDefault();
    // Prevent default behavour--- Dont fetch data imidiatly. w8 till i press the button then fetch
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    console.log("boom")

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const response = await api_call.json();

    if (city && country) {
      console.log(response);

      this.setState({
        city: response.name,
        country: response.sys.country,
        temperature: response.main.temp,
        description: response.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        error: "Please Enter Values"
      });

    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container title-container">
            <div className="row">
              <div className="col-xs 7 ">
                <Titles />
                <br></br>
                <Form getWeather={this.getWeather} />
                <br></br>
                <br></br>
                <Weather
                  city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temperature}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default App;
