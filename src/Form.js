import React, { useState ,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import axios from "axios";
import MovieComponent from './MovieComponent';
import { MyContext } from './Context';


const Form = ({ac}) => {
    const [movie, setMovie]= useState(
        {
            title: "",
            releaseDate :""
        })
    const {movies,setMovies} = useContext(MyContext);
       
    // const [movieRelease, setMovieRelease]= useState("");
    const handleChange = (e) => {

        //const { name, value } = event.target.name;
        setMovie({...movie, [e.target.name]: e.target.value}); 
        
    };
    const handleSubmit = (e)=>{
     e.preventDefault(); 
    //  console.log(title,movieRelease);
    console.log(JSON.stringify(movie));
     axios
     .post("http://localhost:3000/movies",movie)
     .then((response) => {
       console.log(response.data);
       movies.push(response.data);
       //setMovies(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
 };
    
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Movie Name</label>
        <input type="text" id='title' name='title' onChange={handleChange} value={movie.title} />
        <label htmlFor="" >Movie Release Date</label>
        <input type="text" id='releaseDate' name='releaseDate' onChange={handleChange} value={movie.releaseDate} />
        <button type='submit'>Submit</button>
    </form>
    <button onClick={()=> ac()}>close Form</button>
    </>
  )
}

export default Form