import { render } from '@testing-library/react'
import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import LocationModal from 'react-bootstrap/Modal'


const API_KEY = 'pk.45e40665638c57469563d1aac7854979'

  
  class locationform extends React.Component {
    constructor(props) {
    super(props)
    this.State = {
      data: [],
      location: {},
       searchQuery:'',
  
    }
    
  }
  
  
  getLocationData = async (event) => {
    event.preventDefault();
    console.log()
    const USAPI = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`;
       const res = await axios.get(USAPI);
       console.log(res.data[0])
      this.setState({ location:res.data[0] });
      this.setState({toggle:true});
    const EUROAPI = `https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`
    const eurores = await axios.get(EUROAPI);
    this.setState({ location:eurores.data[0] });
    this.setState({toggle:true});
  }
  
  
  render(){
    return (
      <div id="form">
      <Form onSubmit={(e) => this.getLocationData(e)} >
      <Form.Label>Enter The City You Would Like To Explore</Form.Label>
      <Form.Control id="formentry" onChange={(e) => this.setState({ searchQuery: e.target.value })} type='text'  placeholder="Enter City Name" />
    <Button variant="success" type="submit">
      Explore!
    </Button>
      </Form>
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

















