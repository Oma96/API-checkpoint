import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div>





      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{movie.rate}</ListGroupItem>
          <Link to={`/details/${movie.id}`}><Button >More details</Button> </Link>
        </ListGroup>

      </Card>


    </div>
  )
}

export default MovieCard
