
import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
// import LocationRender from './locationrender'
// import WeatherInput from './weather';


const API_KEY = process.env.REACT_APP_API_CITY_KEY


class locationform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      location: {},
      searchQuery: '',
      map: null,
      forecast: null,
    }

  }

  usLocationData = (e) => {
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        let location = response.data[0];
        this.setState({
          location: location,
          map: `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=10`
        })
      })
      .catch(error => { console.log("Error, can not be displayed") })
  }


  euroLocationData = (e) => {
    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        let location = response.data[0];
        this.setState({
          location: location,
          map: `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=10`
        })
      })
      .catch(error => { console.log("Error, can not be displayed") })
  }

  getWeatherData = (e) => {
    axios.get(`https://localhost:3050/weather?lat=${e.lat}&lon=${e.lon}&searchQuery=${e.display_name}`)
    .then(response => {
        this.setState({forecast: response.data})
    }) 
  }

  render() {
    return (

      <div className='locationForm'>
        <Form>
          <Form.Label>
            Enter Desired City
          </Form.Label>
          <Form.Group>
            <Form.Label>
              <input onChange={(e) => this.setState({ search: e.target.value })} placeholder='Find City' type='text' />
            </Form.Label>
          </Form.Group>
          <Button variant="success" type="button" onClick={this.usLocationData}>Explore</Button>
          <Form.Group><Button variant="primary" type="button">Get The Weather</Button></Form.Group>
          <Form.Text>
            <div id="locationTitle">{this.state.location.display_name ? <div>{this.state.location.display_name}, {this.state.location.lat}, {this.state.location.lon}</div> : ''}</div>
          </Form.Text>
          {/* <img src={this.state.map ? this.state.map : null} alt="Location-Map" />  */}
        </Form>
        {/* <WeatherInput /> */}

      </div>

    );
  }
}



export default locationform;





















