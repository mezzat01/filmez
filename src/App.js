import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

import React from 'react';
import { useEffect } from 'react';
// 9fd24c6b 
const API_URL = 'http://www.omdbapi.com?apikey=9fd24c6b';



const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}



const App = () => {
// Creating a function that will fetch our movies .
const searchMovies = async (title) => {
      const response = await fetch (`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search);

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
      value="Superman"
      onChange={() => {}}
      />
      <img 
         src={SearchIcon}
         alt="search"
         onClick={() => {}}
      />
     </div>

   <div className='container'>
         <MovieCard movie1={movie1}/>
   </div>

    </div>
  );
}

export default App;
