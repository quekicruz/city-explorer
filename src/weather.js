import React from 'react'




class WeatherInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
    }
  }

// retrieveWeather = () => {
//   .then(response => {
//     this.state.weather.response;
//   }
// }

  render() {
    return (
      <div>
        <button variant="danger">Get A Weather Update</button>
      </div>
    )
  }
}

export default WeatherInput;