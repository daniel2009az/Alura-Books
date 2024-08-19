// import './style.css'
import styled from 'styled-components';

const OpcoesContainer = styled.ul`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
:nth-child(2){
margin-left: 45px;
margin-right: 45px;
}
` 
const Opcao  = styled.li`
font-size: 20px;
p{
  cursor: pointer;
}

`

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function OpcoesHeader () {
    return(
        <OpcoesContainer>
        {opcoes.map((text) =>(
          <Opcao><p>{text}</p></Opcao>
        ))}
        </OpcoesContainer>
    )

    
}
export default OpcoesHeader;