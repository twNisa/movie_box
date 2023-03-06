import './App.css';
import Header from './components/common/header/Header';
import {Outlet} from "react-router-dom"
import React from 'react';

function App() {

  const [movieData, setMovieData] = React.useState([])
  const [directorData, setDirectorData] = React.useState([])
  const [genreData, setGenreData] = React.useState([])

  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        return setMovieData(data)
      })
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    fetch("/api/genres")
      .then(res => res.json())
      .then(data => {
        return setGenreData(data)
      })
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    fetch("/api/directors")
      .then(res => res.json())
      .then(data => {
        return setDirectorData(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
