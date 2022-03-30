import './App.css';
import SearchIcon from './search.svg'


import React from 'react';
import { useEffect } from 'react';
// 9fd24c6b 
const API_URL = 'http://www.omdbapi.com?apikey=9fd24c6b';


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

    </div>
  );
}

export default App;
