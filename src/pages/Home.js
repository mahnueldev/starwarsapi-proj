import React from 'react';
import styled from 'styled-components';

import SwLogo from '../images/sw-logo.png';
import Bg from '../images/space_ship.jpg';
import Films from './Films';

const HomeStyle = styled.div`
  .bg-sec-container {
    display: flex;
    justify-content: center;
    align-content: center;
    /* padding: 10rem; */
  }
  .bg-sec {
    width: 48rem;
    height: 25rem;
    padding: 4rem;

    margin-top: 30rem;
  }
  .bg-style {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw;
  }
`;

function Home() {
  return (
    <HomeStyle>
      <div className='bg-sec-container'>
        <div
          className='bg-style'
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: 'cover',
          }}
        >
          <div className='bg-sec'>
            <img src={SwLogo} alt='mee' />
          </div>
        </div>
      </div>
      <Films/>
    </HomeStyle>
  );
}

export default Home;
