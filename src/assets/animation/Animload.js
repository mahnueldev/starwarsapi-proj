import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';


const AnimStyle = styled.div`
 .container{
     width: 50vw;
     height: 50vh;

 }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Animload = () => {
    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../lottie/loading.json')
      })
    }, [])
    
    return (
        <AnimStyle>
        
        <div className="container" ref={container}></div>
      
      </AnimStyle>
    );
  }

export default Animload;

