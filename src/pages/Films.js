import React, { useEffect } from 'react';
import styled from 'styled-components';
import Blklogo from '../images/blklogo.png';
import Bg from '../images/space.png';
import { useSwapi, getFilms } from '../context/SwapiState';

const FilmStyle = styled.div`
 height: 100vh;
 
.container{
  display: flex;
  justify-content: center;
  align-content: center;
}
  .film-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.1rem;
    padding: 5rem;
  }
  .film-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    width: 20rem;
    height: 30rem;
    background-color: var(--yellow);
    margin-top: 10rem;
    P,
    h1 {
      text-decoration: none;
      color: var(--white);
    }
  }
  .img-box {
    margin-top: 5rem;
    padding: 2rem;
    /* width: 13rem; */
  }
`;

function Films() {
  const [swapiState, swapiDispatch] = useSwapi();
  const { films } = swapiState;

  useEffect(() => {
    getFilms(swapiDispatch);
  }, [swapiDispatch]);

  return (
    <FilmStyle 
    style={{
      backgroundImage: `url(${Bg})`,
      backgroundSize: 'cover'
    }}>
     
        <div className='film-container'>
          {films.map((film, i) => {
            return (
              <div className='film-box' key={i}>
                <h1>{film.title}</h1>
                <p>{film.release_date}</p>
                <div className='img-box'>
                  <img src={Blklogo} alt='blklogo' />
                </div>
              </div>
            );
          })}
        </div>
      
    </FilmStyle>
  );
}

export default Films;
