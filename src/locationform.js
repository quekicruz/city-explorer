import { render } from '@testing-library/react'
import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import LocationRender from './locationrender.js'


const API_KEY = process.env.REACT_APP_API_KEY;

  
  class locationform extends React.Component {
    constructor(props) {
    super(props)
    this.State = {
      location: {},
       searchQuery:'',
  
    }
    
  }


  setLocationData = (data) => {
    this.setState({ data: data});
  }


  setLocation = (locationObj) => {
    this.setState({ location: locationObj }, () => console.log(this.state));
  }
  

  getLocationData = async (event) => {
    event.preventDefault();
    console.log()
    let USAPI = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`);
    this.setLocation(USAPI.data[0]);
    let EUROAPI = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`);
    this.setLocation(EUROAPI.data[0]);
  }
  
  
  render(){
    return (
      <div id="form">
      <Form>
      <Form.Label>Enter The City You Would Like To Explore</Form.Label>
      <Form.Control id="formentry" onChange={(e) => this.setState({ searchQuery: e.target.value })} type='text'  placeholder="Enter City Name" />
    <Button variant="success" onSubmit={(e) => this.getLocationData(e)} >
      Explore!
    </Button>
      </Form>
      <LocationRender location={this.state.location.display_name} lat={this.state.location.lat} lon={this.state.location.lon} img={this.state.img}/>
      </div>
  
  )
}
}
export default locationform;




//   getLocation = async () => {
//     const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`;
//     const res = await axios.get(API);
//     console.log(res.data[0])
//     this.setState({ location:res.data[0] });
//   }

//   render() {
//     return(
//       <>
//         <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
//         <button onClick={this.getLocation}>Explore!</button>
//         {this.state.location.place_id && 
//           <h2>The city is: {this.state.location.display_name}</h2>
//         }
//       </>
//     )
//   }
// }

















