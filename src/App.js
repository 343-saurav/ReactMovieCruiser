import React, { useState } from 'react'
import MovieComponent from './MovieComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import FavouriteMovie from './FavouriteMovie';
import { MyContext } from './Context';
import { useContext } from 'react';


const App = () => {
  
  const [Favdata,setFavData] = useState([]);
  const [movies,setMovies] = useState([]);
  return (
    <>
    <div className="row ">
    <MyContext.Provider value={{Favdata,setFavData,movies, setMovies}}>
      {/* <MovieComponent /> */}
      <div className="col-lg-6 ">
      <MovieComponent/>
      </div>
      <div className="col-lg-6 ">
         <h1>Favourites</h1>
         <FavouriteMovie/>
      </div>
    </MyContext.Provider>
      
    </div>
    
    </>
  )
}

export default App