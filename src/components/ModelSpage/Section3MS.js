import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { selectCars } from '../../features/car/carSlice';
import { useSelector } from 'react-redux';

const Section3MS = () => {

  const cars = useSelector(selectCars);
  return (
    <>
    <Wrapper>
      <Fade bottom>
      <Wrap>
        <WrapImg bgImg = {cars[0]}/>
        <Cont>
          <ContContainer>
            <h4>Gaming</h4>
            <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
          </ContContainer>
        </Cont>
      </Wrap>
        </Fade>
        <Fade bottom>
      <Wrap>
        <Cont>
          <ContContainer>
            <h4>Stay Connected</h4>
            <p>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.

</p>
          </ContContainer>
        </Cont>
        <WrapImg bgImg = {cars[1]}/>
      </Wrap>
      </Fade>
      <Fade bottom>
      <Wrap>
        <WrapImg bgImg = {cars[2]}/>
        <Cont>
          <ContContainer>
            <h4>Your best Audio system</h4>
            <p>A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.</p>
          </ContContainer>
        </Cont>
      </Wrap>
      </Fade>
      <Fade bottom>
      <Wrap>
        <Cont>
          <ContContainer>
            <h4>Real Storage</h4>
            <p>With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.</p>
          </ContContainer>
        </Cont>
        <WrapImg bgImg = {cars[3]}/>
      </Wrap>
      </Fade>
      </Wrapper>
    </>
  )
}

export default Section3MS;

const Wrapper = styled.div `
padding-top: 100px;
padding-left: 100px;
padding-right: 100px;
padding-bottom: 0;
   background-color: black ;
   @media screen and (max-width: 1024px){
    padding-left: 0;
    padding-right: 0;
   }
`

const Wrap = styled.div `
   display: flex;
   flex-wrap: wrap;
   @media screen and (max-width: 1024px){
     flex-flow: row wrap;
   }
`

const WrapImg = styled.div `
  
  background-image: ${props => `url("/images/${props.bgImg}")`};
  height: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  @media screen and (max-width: 1024px){
     display: block;
     order: 1;
     width: 100%;
     height: 250px;
   }
`
const Cont = styled.div `
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px){
     display: block;
     order: 2;
     width: 100%;
   }
`
const ContContainer = styled.div `

 text-align: left;
 padding: 100px;
 @media screen and (max-width: 1024px){
     padding: 25px;
   }
 h4{
  color: white;
   margin-bottom: 10px;
   font-weight: bold;
   @media screen and (max-width: 1024px){
    margin-bottom: 15px;
   }
 }
 p{
  color: white;
 }
`