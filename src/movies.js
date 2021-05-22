import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'




class Movies extends React.Component {
  constructor(props){
    super(props);
    this.state= {
    movie1: '',
    movie2: '',
    movie3: '',
    movie4: '',
    movie5: '',
    movie6: '',
    movie7: '',
    movie8: '',
    movie9: '',
    movie10: '',
    }
  }

  render() {

    return(
      <div></div>
      // <Card>
      //   <Card.Title variant="info">Top 10 Movies From:</Card.Title>
      //   {this.props.movieData.slice(0,10).map(movie => {
      //     return (
      //       <>
      //       <Card.Title>{movie.title}</Card.Title>
      //       <Card.Text>{movie.overview}</Card.Text>
      //       <Card.Text>{movie.vote_average}</Card.Text>
      //       <Card.Text>{movie.vote_count}</Card.Text>
      //       <Card.Footer>{movie.title}</Card.Footer>
      //       </>
      //     )
      //   })}
      // </Card>
      )
  }
}

export default Movies; 