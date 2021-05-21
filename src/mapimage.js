import React from 'react'
import './App.css'
// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;


class MapImage extends React.Component {

  render(){
    return(
      <div>
        <img src={this.props.img} alt={this.props.img}/>
      </div>
    )
  }
}

export default MapImage;