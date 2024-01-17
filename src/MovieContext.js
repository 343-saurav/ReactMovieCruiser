import React, { useState ,createContext} from 'react'

export const FavMovieContext = createContext();

export default function MovieContext() {
    const [favorites,setFavourites]=useState([]);
  
}
