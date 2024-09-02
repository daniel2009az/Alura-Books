// import './style.css'
import px2vw from '../../utils/px2vw';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const OpcoesContainer = styled.ul`
display: flex;
align-items: center;
justify-content: center;  
flex: 1 1 100%;
width: fit-content;
max-height: 100%;
padding: 0.5em;
:nth-child(2){
margin-left: ${px2vw(100)};
margin-right: ${px2vw(100)};
}

` 
const Opcao  = styled.li`
font-size: 1.5em;
p{
  cursor: pointer;
  font-size: ${px2vw(50)};


  @media (min-width: 600px) {
    font-size: ${px2vw(25)};
    
  }
  @media (min-width: 900px) {
    font-size: ${px2vw(20)};
    
  }
  


}

`


const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function OpcoesHeader () {
    return(
        <OpcoesContainer>
        {opcoes.map((text) =>(
          <Link to ={`/${text.toLowerCase().replace(" ", "-")}`} ><Opcao><p>{text}</p></Opcao></Link>
        ))}
        </OpcoesContainer>
    )

    
}
export default OpcoesHeader;