import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div>





      <Card style={{ width: '18rem' }}>
       
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{movie.username}</ListGroupItem>
          <ListGroupItem>{movie.email}</ListGroupItem>
          <ListGroupItem>{movie.address.suite}</ListGroupItem>
          <ListGroupItem>{movie.address.city}</ListGroupItem>
          <ListGroupItem>{movie.address.zipcode}</ListGroupItem>
          <ListGroupItem>{movie.address.geo.lat}</ListGroupItem>
          <ListGroupItem>{movie.address.geo.lng}</ListGroupItem>
        </ListGroup>

      </Card>


    </div>
  )
}

export default MovieCard
