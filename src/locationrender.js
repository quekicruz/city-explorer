import React from 'react'
import './App.css';

class LocationRender extends React.Component{
  constructor(props) {
    super(props);
}


render(){
  return(
    <div>
        <div>{this.props.location ? <p>{this.props.location}</p> : ''}</div>
        <div>{this.props.lat ? <p>{this.props.lat}</p> : ''}</div>
        <div>{this.props.lon ? <p>{this.props.lon}</p> : ''}</div>
    </div>
  )
}
}

export default LocationRender;
