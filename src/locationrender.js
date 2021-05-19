import React from 'react'
import './App.css';


class LocationRender extends React.Component{
  

render(){
  console.log(this.props.location);
  return(
    <div>
        <div>{this.props.location.display_name ? <p>{this.props.location.display_name}</p> : ''}</div>
        {/* <div>{this.props.lat ? <p>{this.props.lat}</p> : ''}</div>
        <div>{this.props.lon ? <p>{this.props.lon}</p> : ''}</div> */}
    </div>
  )
}
}

export default LocationRender;
