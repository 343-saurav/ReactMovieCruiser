import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
 import  { MyContext } from './Context.js';
const FavouriteMovie = () => {
     const [favorites,setFavourites] = useState([])
    const {Favdata,setFavData} = useContext(MyContext);
 

    // alert("B")
    var url ="http://localhost:3000/favourites";
    // console.log("oooooooooo")
    

    useEffect(() => {
        axios.get(url).then((response) => {
            setFavData(response.data);
        })
    })
     function DeleteFav(id){
        axios.delete(`http://localhost:3000/favourites/${id}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

     }

     
 
    // console.loq("AAAAA"+ props.favourite)
    return (
        <>
         {
            Favdata.map(movie => 
               <>
    
    
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterPath} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {movie.releaseDate}
                </Card.Text>
                <Button  variant="primary"onClick={()=>DeleteFav(movie.id)} >Delete</Button>
            </Card.Body>
            </Card>
    
               </>
    
    
            )
         } 
         
        </>
      )
}

export default FavouriteMovie