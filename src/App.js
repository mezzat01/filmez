import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

import React from 'react';
import { useEffect, useState } from 'react';
// 9fd24c6b 
const API_URL = 'http://www.omdbapi.com?apikey=9fd24c6b';



const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm,setSearchTerm] = useState('');
// using useEffect to make the search bar work


// Creating a function that will fetch our movies .
const searchMovies = async (title) => {
      const response = await fetch (`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);

}
// We will use useEffect to fetch api as soon as our component loads .
  useEffect(() => {
     searchMovies('Spiderman');
  },[]);

  return (
    <div className="App">
     <h1>Filmez</h1>

     <div className='search'>
      <input 
      placeholder='Search any movie'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img 
         src={SearchIcon}
         alt="search"
         onClick={() => searchMovies(searchTerm)}
      />
     </div>
{
 // Cheking if the movie exist then place it to movie card :
 movies?.length > 0
  ?(
    <div className='container'>
  {/* Mapping arround the found movies in the search and displaying them */}
  {movies.map((movie) => (
    <MovieCard movie={movie}/>
  ))}

</div>
 // Else
  ) : (
     <div className='Empty' >
       <h2>No movies found</h2>
     </div>
  )
}
  

  </div>
  );
}

export default App;
