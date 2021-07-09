import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section2MS = () => {
    return (
        <div>
            <Heading>
                <Fade bottom>
                    <h1>All New Interiors</h1>
                </Fade>
            </Heading>
            <Wrap />
        </div>
    )
}

export default Section2MS;

const Wrap = styled.div`
   width: 100%;
   height: 800px;
   background-size: cover;
   background-size:100% 120%;
   background-repeat: no-repeat;
   background-image:url("/images/new-interior.jpg");
   @media (max-width: 480px) {
    width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   align-items: center;
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
    width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   align-items: center;
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){
    width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   align-items: center;
}
`
const Heading = styled.div`
   background-color: black;
   width: 100%;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   h1{
       color: white;
   }
   @media(max-width: 768px){
    h1{
        font-size: 1.5rem;
    }
  }
`




