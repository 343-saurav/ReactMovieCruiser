import React, { createContext, useContext, useState } from 'react';
 
const FavContext = createContext();
 
export const FavMovieProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movies, setMovies] = useState([]);
 
  const addToFavorite = (movie) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  };
 
  const removeFromFavorite =(movie) => {
     setFavoriteMovies((prevFavorites) => prevFavorites.filter((favMovie) => favMovie.id!== movie.id));
  };
 
  return (
    <FavContext.Provider value={{ favoriteMovies, setFavoriteMovies ,addToFavorite, removeFromFavorite, movies,setMovies}}>
      {children}
    </FavContext.Provider>
  );
};
 
export const useFavMovieContext = () => {
  return useContext(FavContext);
};