import React from 'react';
import styled from 'styled-components'
import Blklogo from '../images/blklogo.png'
import { Link } from 'react-router-dom';


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


function FilmItem({data}) {

  return (
      <FilmStyle>
        <div className="container-sec">
          <div className="film-container">
          {data.map((films, i) =>{
              return (
                  
                  <Link  className="film-box" key={i} to="/people">
            <h1>{films.title}</h1>
            <p>{films.release_date}</p>
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