import React, { useState,useEffect,createContext, useContext } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavouriteMovie from './FavouriteMovie';
import {MyContext} from './Context.js'
import Form from './Form.js';

const url = "http://localhost:3000/movies";

const MovieComponent = () => {
   // const [movies, setMovies] = useState([])
    const {Favdata,setFavdata} = useContext(MyContext);
    const {movies,setMovies} = useContext(MyContext);
    const[formshow, setFormshow] = useState(false)
    //const [favorites,setFavourites] = useState([])
    // const {addToFavorite} = useFavMovieContext();
     
//       async  function fetchfavorites () {
//         debugger;
//         alert("called")
//        const response =  await axios.get('http://localhost:3000/favourites');
       
//             //  const users = await response.data;
//             setFavourites(await response.data);
//             // console.log("users are " + users);
           
//             // console.log("A" +response.data);
           
//             console.log("B" + favorites);
//             // alert(favorites.length);
//             // <FavouriteMovie/>
// //   alert(d.length)
          
//     }
    

    useEffect(() => {
      axios.get(url).then((response) => {
        setMovies(response.data);
      })
        
    },[]);

    
    async function addFavourites(movie) {

        if (Favdata.find((temp) => temp.title === movie.title) != null) {
            alert("Movie already exist");
          }
          else{
       axios.post('http://localhost:3000/favourites', {
      title: movie.title,
      releaseDate: movie.releaseDate,
      posterPath:movie.posterPath          
}
)
          
.then(response => console.log(response.data))
.catch(error => console.error(error));   
          }
// addToFavorite(movie);
       
    }
    const ac = () =>{debugger
        // alert("Movie already exist");
        setFormshow(false);
    }

  return (
    <>
    <h1>Movies</h1>
     {
        movies.map(movie => 
           <>


    <Card style={{ width: '18rem' }}>
           
      <Card.Img variant="top" src={movie.posterPath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.releaseDate}
        </Card.Text>
        <Button onClick={()=>addFavourites(movie)} variant="primary">ADD Favourites</Button>
        <br />
        <br />
        <Button  variant="primary" onClick={()=> setFormshow(true)}>Add a new Movie</Button>
       

      </Card.Body>
    </Card>
</>


        )
     } 
     {
        formshow === false ? '' : <Form formshow={formshow} ac={ac} /> 
     }
    </>
  )
}

export default MovieComponent