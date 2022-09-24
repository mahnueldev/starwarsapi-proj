import React, { useEffect } from 'react';
import styled from 'styled-components';
import Bg from '../images/space.png';
import { useSwapi, getFilms } from '../context/SwapiState';
import FilmItem from '../components/FilmItem';

const FilmStyle = styled.div`

  height: 100vh;
  .film-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.1rem;
    padding: 5rem;
  }
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
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
        backgroundSize: 'cover',
      }}
    >
      <div className="film-container">
      {films.map((film, i) => {
        return(
        <FilmItem film={film} key={i} />
        )
      })}
      </div>
    </FilmStyle>
  );
}

export default Films;
