import IconsHeader from '../IconsHeader'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import px2vw from '../../utils/px2vw'
const HeaderContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  padding: 0em 1em;
  margin-top: 1em;
  padding-bottom: 1em;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  height: 3em;
  align-items: center;

  :nth-child(1){
    /* justify-content: start; */
  }
  
  @media(min-width: 425px){
    max-height: 4em;
  }
  @media(min-width: 750px){
    max-height: 4em;
  }
  @media(min-width: 1024px){
    max-height: 4.5em;
    min-height: 4em;
  }

  @media(min-width: 1440px){
    min-height: ${px2vw(80)}; 
    max-height: 100%;
    
    }
  @media (max-width: 600px){
    div :nth-child(1){
      display: none;
    }
    div :nth-child(2){
      display: none;
    }
  
  }

`
  const HeaderContainerMob = styled.div`
  display: none;
  align-items: center;
 justify-content: center;
 background-color: whitesmoke;
 max-width: 100%;
 box-sizing: border-box;
 max-height: 4em;
 p{
  margin: 0.2em;
 }


  @media (max-width: 600px){  
   display: flex;
  }
  `
  const HeaderContainerP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  `

//   const LogoContainer = styled.div`
function Header(){
  return(
      <HeaderContainerP>
        <HeaderContainerMob>
        <Link to= "/"><Logo/></Link>

        </HeaderContainerMob>
        
        <HeaderContainer>
          <Link to= "/"><Logo/></Link>
          <OpcoesHeader/>
          <IconsHeader/>
        </HeaderContainer> 
      </HeaderContainerP>

      
    )
}
export default Header