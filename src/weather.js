import React from 'react'
import Button from 'react-bootstrap/Button'



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
        <Button variant="danger">Get A Weather Update</Button>
      </div>
    )
  }
}

export default WeatherInput;