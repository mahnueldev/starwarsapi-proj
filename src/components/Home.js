import React from 'react'
import styled from 'styled-components'
// import NavMenu from '../components/NavMenu';
import SwLogo from '../images/sw-logo.png'

const HomeStyle = styled.div`
.bg-sec-container{
    display: flex;
    justify-content: center;
    align-content: center;
    /* padding: 10rem; */
}
.bg-sec{
    width: 48rem;
    height: 20rem;
    /* padding: 10rem; */
    
    margin-top: 30rem;
   
}

`

function Home() {
  return (
      <HomeStyle>
          
          <div className="bg-sec-container">
    <div className= "bg-sec">
      <img src={SwLogo} alt= "mee"/>
    </div>
    </div>
    </HomeStyle>
  )
}

export default Home