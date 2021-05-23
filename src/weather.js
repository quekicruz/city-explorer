import React from 'react'
import Card from 'react-bootstrap/Card'
import './App.css';


class WeatherInput extends React.Component {

  render() {
    return (
      <div>
       <Card style={{width: '400px'}} bg='primary' text='white'> 
            <Card.Body>
            <Card.Title>{this.props.date}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            </Card.Body> 
        </Card>
      </div>
    )
  }
}

export default WeatherInput;