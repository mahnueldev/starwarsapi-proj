import React from 'react';
import styled from 'styled-components';
import Blklogo from '../images/blklogo.png';


const FilmStyle = styled.div`
margin-top: 5rem;
 

    .film-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem;
      width: 20rem;
      height: 30rem;
      background-color: var(--yellow);
      margin-top: 10rem;
      transition: 0.8s;
      :hover {
        transform: translate(0, -10px);
      }
    }
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

function FilmItem({ film }) {
  const { title, release_date } = film;

  return (
    <FilmStyle>
     
        <div className='film-box'>
          <h1>{title}</h1>
          <p>{release_date}</p>
          <div className='img-box'>
            <img src={Blklogo} alt='blklogo' />
          </div>
        </div>
      
      
    </FilmStyle>
    );
}

export default FilmItem;
