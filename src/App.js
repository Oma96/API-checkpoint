
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Rate from './Components/Rate';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieDetails from './Components/MovieDetails';




function App() {
  
  const [movies,setMovies] = useState([ 
    {id:1,
    title: "Titanic",
    description:"Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of the RMS Titanic, and stars Leonardo DiCaprio and Kate Winslet",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nKVRfytJzAMSPKajwcL9h85D1IsbGtPi6Q&usqp=CAU",
    rate:2,
    trailer:"https://youtu.be/kVrqfYjkTdQ"},
    {id:2,
      title:"Spider-Man:No Way Home",
     description:"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing",
     image: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",
     rate:4,
     trailer:"https://youtu.be/JfVOs4VSpmA"
    },
    {id:3,
      title:"Bohemian Rhapsody ",
     description:"Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock musical band Queen",
    image:"https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg",
    rate:5,
    trailer:"https://youtu.be/mP0VHJYFOAU"
  }
  ])

  const [rate, setRate]=useState(1)

  
  return (
    <Router >
        <div className="App">
         <h1 >Movies Land</h1>
     
        <Routes>
         <Route path="/" element={<><Rate rate={rate} setRate={setRate}/> <MovieList movies={movies} rate={rate}/> <AddMovie movies={movies} setMovies={setMovies}/></>}/>
         <Route path ="/details/:id" element={<MovieDetails movies={movies} />}/>
       </Routes>

     </div>
    </Router>
    
  );
}

export default App;
