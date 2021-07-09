import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../../features/car/carSlice';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);
    const cars = useSelector(selectCars);
    
    const [scroll, setscroll] = useState(true);

    const scrollUp = ()=>{
      if(window.scrollY >= 100){
        setscroll(false);
      }
      else{
        setscroll(true);
      }
    }

    window.addEventListener('scroll', scrollUp)

    return (
      <div>
       {scroll?<Container >
            <NavLink to="/">
                <img src="/images/logo.svg" alt="teslalogo"/>
            </NavLink>
            <Menu>
            <NavLink to="/modelS">Model S</NavLink>
            <NavLink to="/model3">Model 3</NavLink>
            <NavLink to="/modelX">Model X</NavLink>
            <NavLink to="/modelY">Model Y</NavLink>

            </Menu>
            <RightMenu>
               <Acc>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                </Acc>
                <CustomMenu onClick={()=>setOpen(true)}/>
            </RightMenu>
            <BurgerNav show={open}>
            <CloseWrapper>
             <CustomClose onClick={()=>setOpen(false)}/>
            </CloseWrapper>
            <li><NavLink to="/modelS">Model S</NavLink></li>
            <li> <NavLink to="/model3">Model 3</NavLink></li>
            <li><NavLink to="/modelX">Model X</NavLink></li>
            <li><NavLink to="/modelY">Model Y</NavLink></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade -in</a></li>
                <li><a href="#">Test-drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Tesla Account</a></li>
            </BurgerNav>        
        </Container>:null}
        </div>
    )
}

export default Header;

const Container = styled.div `
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  transition: top 0.3s;
`
const Menu = styled.div `
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
      font-weight: 500;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }
  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div `
display: flex;
align-items: center;
   a{
      font-weight: 500;
      text-transform: uppercase;
      margin-right: 10px;
  }
`
const Acc = styled.div `
  @media(max-width: 768px){
    display: none;
  }
`

const CustomMenu = styled(MenuIcon) `
  cursor: pointer; 
`
const BurgerNav = styled.div `
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:white;
  width:300px;
  z-index:16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction:column;
  text-align: start;
  transform: ${props=> props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.3s;
  li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,.2);
  }
  a{
      font-weight: 600;
  }
  
`

const CloseWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon) `
   cursor: pointer;
`