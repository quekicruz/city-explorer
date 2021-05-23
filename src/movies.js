import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'




class Movies extends React.Component {
 
  render() {

    return(
        <div id="movieCard">
            <Card style={{width: '400px'}} bg='secondary' text='white'> 
                <Card.Body>
                    <Card.Text>{this.props.title}</Card.Text>
                    <Card.Text>{this.props.overview}</Card.Text>
              
                </Card.Body>
            </Card>
      </div>
      )
  }
}

export default Movies; 