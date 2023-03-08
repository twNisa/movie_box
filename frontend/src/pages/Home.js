import React from "react";
import styled from "styled-components";
import Carousel from "../components/Home/Carousel";
import { MainContainer, MainContent } from "../components/styled/MainContainer";
import HorizontalContainer from "../components/Home/HorizontalContainer";

export default function Home(){
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

  const newArrivals = movieData.sort((a, b) => (
    a.release_date > b.release_date ? -1 : a.release_date < b.release_date ? 1 : 0
  ))
  const featured = movieData.slice(0, 5)
  return (
    <MainContainer>
      <Carousel movies={featured}/>
      <MainContent>
        <HorizontalContainer title={"Featured Movies"} movies={featured} />
        <HorizontalContainer title={"New Arrivals"} movies={newArrivals} />
      </MainContent>
    </MainContainer>
  )
}