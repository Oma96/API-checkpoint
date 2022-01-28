import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import ReactPlayer from "react-player"
import {Button} from 'react-bootstrap'


function MovieDetails({ movies }) {
    let navigate= useNavigate()
    const { id } = useParams()
    const movie = movies.find(el => el.id == id)
    
    return (
        <div>
            <h2 style={{ maxWidth: 500, fontSize: 20, marginLeft: 450, marginTop: 50 }}>{movie.description}</h2>
            <ReactPlayer style={{ marginLeft: 400, marginTop: 50 }} url={movie.trailer}></ReactPlayer>
            <Button variant='secondary' style={{marginTop:50}} onClick={()=>{ navigate("/")}} >Go back to home page</Button>
        </div>
    )
}

export default MovieDetails
