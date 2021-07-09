import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const SectionMS = () => {
  return (
    <Wrap>
      <Fade bottom>
        <ItemText>
          <h1>Model S</h1>
          <p>Plaid</p>
        </ItemText>
      </Fade>
      <Config>
      <BottomCont>
        <Cont>
          <h1>390 mi</h1>
          <p>Range (est.)</p>
        </Cont>
        <Cont>
          <h1>1.99 s</h1>
          <p>0-60mph*</p>
        </Cont>
        <Cont>
          <h1>200 mph</h1>
          <p>Top Speed+</p>
        </Cont>
        <Cont4>
          <h1>1,020 hp</h1>
          <p>Peak Power</p>
        </Cont4>
      </BottomCont>
        <OrderBtn>
          <p>Order Now</p>
        </OrderBtn>
        </Config>
    </Wrap>
  )
}

export default SectionMS;


const Wrap = styled.div` 
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   display:flex;
   flex-direction:column;
   justify-content: space-between;
   align-items: center;
   background-image: url("/images/model-s.jpg")
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1{
      color: black;
  }
`
const Config = styled.div `
  display: flex;
  align-items: center;
  /* Media Query for Mobile Devices */
@media (max-width: 480px) {
  flex-direction: column;
  
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
  flex-direction: column;
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){
  
}
`

const BottomCont = styled.div`
   color: white;
   display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 50px;
   h1{
       color: white;
       font-weight: medium;
   }
   p{
       color: white;
   }
     /* Media Query for Mobile Devices */
@media (max-width: 480px) {
  /* flex-direction: column; */
  margin-left: 40px;
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
  /* flex-direction: column; */
  margin-left: 40px;
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){
  
}
  
`
const Cont = styled.div`
  display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    h1{
      font-size: 1.2rem;
    }
    /*  */
}


`
const Cont4 = styled.div `
  margin-bottom: 30px;
  
  @media(max-width: 768px){
    display: none;
  }
`

const OrderBtn = styled.div`
   margin-left: 30px;
  margin-bottom: 30px;
  border: 3px solid white;
  height: 40px;
  width: 150px;
  color:white;
  display:flex;
  justify-content: center;
  align-items:center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size:12px;
  cursor:pointer;
  transition: 0.3s ease-in-out;
  p{
    color: white;
  }
  &:hover{
    background-color: white;
    & p{
        color: rgba(23,26,32,0.8);
    }
  }
  @media (max-width: 480px) {
  width: 200px;
  margin-left: 0;
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
  width: 300px;
  margin-left: 0;
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){
  
}
`
