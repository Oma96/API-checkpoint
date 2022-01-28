import React, { useState,useEffect } from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'
import axios from "axios"
import { Spinner } from "react-bootstrap";


function MovieList({ movies, rate }) {
    const [input, setInput] = useState('')
    const [newmovies,setNewmovies]=useState([])
    const [spineer, setSpinner] = useState(false);

    useEffect(
        () =>
          axios
            .get("https://movie-app-gmc.herokuapp.com/api/movies")
            .then((res) => setNewmovies(res.data))
             .then((res) => setSpinner(true))
            .catch((err) => console.log(err)),
        []
    )

    return (
        <div>
            <Filter style={{ marginTop: 50 }} input={input} setInput={setInput} />
            <div className='movies'>

                {spineer?
                (newmovies
                    .filter(el => el.title.toUpperCase().includes(input.toUpperCase()) && el.rate >= rate)
                    .map((el, key) => <MovieCard className='card' movie={el} key={el.id} />)):
                    (<Spinner animation="border" variant="warning" />)}
            </div>







        </div>
    )
}

export default MovieList
