import logo from "../../imagens/logo.svg";
// import './style.css'
import styled from "styled-components";
import px2vw from "../../utils/px2vw";

const LogoContainer = styled.div`

  font-size: 2em;
  display:flex;
  align-items:center;
  
  @media (max-width: 600px) {
    width: auto;
    /* display: none; */
    align-items: center;
    justify-self: flex-start;
    flex: 1 1 100%; 
 
  }
  p{
    cursor: pointer;
    justify-content: end;
    display: flex;
    align-items: center;
    padding: 0.5em;
    padding-left: 0;
    font-size: ${px2vw(60)};

    @media (min-width: 600px) {
    font-size: ${px2vw(30)};
    
  }

  }
  
  p
:hover{
    cursor: pointer;
  }
  
`;
const LogoImage = styled.img`
  cursor: pointer;
  width: ${px2vw(70)};

  margin-right: ${px2vw(2)};
  margin-bottom: ${px2vw(25)};

  @media (min-width: 600px) {
    width: ${px2vw(50)};
    
  }



`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo" id="logo-img" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </LogoContainer>
  );
}
export default Logo;
