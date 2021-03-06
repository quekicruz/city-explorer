
import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
// import WeatherInput from './weather'
import LocationGrabber from './locationgrabber'
// import Movies from './movies'
import MapImage from './mapimage'
// import Error from './error'


const API_KEY = process.env.REACT_APP_API_CITY_KEY


class locationform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      location: {},
      searchQuery: '',
      map: null,
      forecast: [],
      weather: null,
      movie: '',
      img: {},
      showError: false,
      error: undefined,
      lat: '',
      lon: '',
      display_name: '',
    }

  }


  getLocationData = () => {
    let response = axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)

    .then(response => {
      let location = response.data[0];
      console.log(response.data);
        this.setState({
          lat: location.lat,
          lon: location.lon,
          display_name: location.display_name,
        });
        console.log('This is the state of lat and lon after .get', this.state.lat, this.state.lon);
        this.setState({location: location})
        this.retrieveMovieData(this.state.searchQuery)
        this.retrieveMapData(response.data[0])
        this.retrieveWeatherData(this.state.lat, this.state.lon)
      })
      .catch(error => this.generateError(error))
      
      console.log(response)
  }

  
  retrieveWeatherData = async (lat, lon) => { 
    try{
      console.log('inside weather data')
      const weatherData = await axios.get(`http://localhost:3050/weather`,{params: {
        lat: lat,
        lon: lon,
        // display_name: this.state.display_name,
      }})
      this.setState({weather: weatherData.data});
      console.log(this.state.weather);
    } catch(error){
      console.log('Weather Error', error)
    }

    
  }


  retrieveMapData = (area) => {
    let mapImg = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${area.lat},${area.lon}&zoom=15`
    this.setState({img: mapImg});
  }


  retrieveMovieData = () => {
    axios.get(`http://localhost:3050/movies/?name=${this.state.searchQuery}`)
    .then(response => {
      this.setState({movies: response.data})
      this.setState({error: ''});
    this.setState({showError: false});
    })
    .catch(error => this.generateError(error));
  }


  generateError = (error) => {

    if (this.state.showError === false){
      this.setState({showError: true}); 
      this.setState({error: error.toString()});
      } else {
      console.log(this.state.showError);
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div className='locationForm'>

           {/* <Error error={this.state.error} showError={this.state.showError}/> */}

        <Form>
          <Form.Label>
            Enter Desired City
          </Form.Label>
          <Form.Group>
            <Form.Label>
              <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder='Find City' type='text' />
            </Form.Label>
          </Form.Group>
          <Button variant="success" type="button" onClick={this.getLocationData}>Explore</Button>
        </Form>
          <LocationGrabber location={this.state.location.display_name} lat={this.state.location.lat} lon={this.state.location.lon} img={this.state.img} />
          <MapImage img={this.state.img}/> 

      </div>

    );
  }
}



export default locationform;
























