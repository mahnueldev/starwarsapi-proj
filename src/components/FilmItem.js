import React, {useEffect} from 'react';
import styled from 'styled-components'
import Blklogo from '../images/blklogo.png'
import { Link } from 'react-router-dom';
import {useSwapi, getFilms} from '../context/SwapiState'


const FilmStyle = styled.div`
.container-sec{
  
margin: 20rem 10rem;

}
.film-container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
}
.film-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    width: 20rem;
    height: 30rem;
    background-color: var(--yellow);
    P, h1{
      text-decoration: none;
      color: var(--white);
    }
}
.img-box{
margin-top: 5rem;
padding: 2rem;
/* width: 13rem; */
}
`


function FilmItem({dat}) {
const [swapiState, swapiDispatch] = useSwapi();
const { films  } = swapiState;

const {title, release_date} = films;

useEffect(() => {
  getFilms(swapiDispatch);
}, [swapiDispatch]);


  return (
      <FilmStyle>
        <div className="container-sec">
          <div className="film-container">
          {dat.map((films, i) =>{
              return (
                  
                  <Link  className="film-box" key={i} to="/people">
            <h1>{title}</h1>
            <p>{release_date}</p>
            <div className= "img-box">
      <img src={Blklogo} alt= "blklogo"/>
    </div>
        </Link>
              )
            }
              )}
    </div>
    </div>
    </FilmStyle>
  )
}

export default FilmItem