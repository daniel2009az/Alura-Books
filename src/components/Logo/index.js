import logo from '../../imagens/logo.svg'
// import './style.css'
import styled from 'styled-components'

const LogoContainer = styled.div`
display: flex;
font-size: 30px;
`
const LogoImage = styled.img`
margin-right: 8px; 
`

function  Logo () {
    return (
        <LogoContainer>
        <LogoImage src ={logo}
         alt='logo' 
         id='logo-img'
        />
        <p> <strong>Alura</strong> Books</p>
      </LogoContainer>
    )

}
export default Logo;