import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link, useNavigate, redirect } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../common/Card'

const Container = styled.section`
  width: 100%;
  section.heading{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    h2{
      font-size: 1.8rem;
    }
    a{
      text-decoration: none;
    }
    button{
      background: none;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #f23;
      font-size: 1rem;
      transition: opacity 0.2s ease;
      &:hover{
        opacity: 0.6;
      }
    }

  }
  section.content{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    overflow-x: hidden;
  }
`


function HorizontalContainer({title, movies}) {
  const navigate = useNavigate()

  
  function getFullname(director){
    let fullname = ""
    if(director.first_name && director.last_name){
      fullname = director.first_name + " " + director.last_name
    }
    if(!director.first_name || !director.last_name){
      fullname = ""
    }
    return fullname
  }

  function routeToMovie(id){
    navigate(`/movie/${id}`)
  }
  function routeToDirector(e, id){
    e.stopPropagation()
    navigate(`/director/${id}`)

  }
  const movieCards = movies.map(movie => (
    <Card key={movie._id} id={movie._id} onClick={()=> routeToMovie(movie._id)}>
      <img src={movie.img_url} alt={movie.title} />
      <p className='minor'>{movie.release_date.split("-")[0]}</p>
      <h4>{movie.title}</h4>
      <p className="director" onClick={(e)=>routeToDirector(e, movie.director._id)}>{getFullname(movie.director)}</p>
      <p className='minor genres'>{movie.genre.map((g, index, arr) => {
        return `${g.name}${index !== arr.length-1 ? ",  " : ""} `
        })}</p>
    </Card>
  ))

  return (
    <Container>
      <section className='heading'>
        <h2>{title}</h2>
        <Link to='/movies'><button>See more {<FiChevronRight />}</button></Link>
      </section>
      <section className='content'>
        {movieCards}
      </section>

    </Container>
  )
}

export default HorizontalContainer