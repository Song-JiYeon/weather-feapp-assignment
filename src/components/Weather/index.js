import React from "react";
// Stateless component

const API = 'http://localhost:8888/weather-service/weathers?cityName=';

class Weather extends React.Component{
  state = {
    city : "No Data",
    cityName : "No Data",
    main : "No Data",
    description : "No Data",
    temp : "No Data",
  };
  componentDidMount(){
    const { city } = this.state;
    const {cityName} = this.props.match.params;
    const API_CITY = `${API}${cityName}`;
    const citiesData = fetch(API_CITY)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        city: data.name,
        main : data.weather[0].main,
        description : data.weather[0].description,
        temp : data.main.temp,
      });
    })
    .catch((error) => console.error("Error:", error))
  }
  render(){
    const { city } = this.state;
    const { main } = this.state;
    const { description } = this.state;
    const { temp } = this.state;
 
    return(
      <div>
        <h2>cityName : {city}</h2>
        <h2>weather : {main}</h2>
        <h2>description : {description}</h2>
        <h2>temperature : {temp}</h2>
      </div>
       
    );
  }
}
export default Weather;
