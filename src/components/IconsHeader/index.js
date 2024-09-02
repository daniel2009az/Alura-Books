import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
// import './style.css'
import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

const IconsContainer = styled.ul`
  display: flex;
  /* flex-direction: column; */
  max-height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-left: ${px2vw(10)};
  padding-right: ${px2vw(10)};

  @media (min-width: 450px){
    flex-direction: row;    
  }

`
export const Icon = styled.li`
cursor: pointer;
margin-left: ${px2vw(35)};
img{
    padding-right: 0.5em;
    max-width: 2.5em;
    width: ${px2vw(100)};
    @media (max-width: 768px) {
        max-width: 2.0em;

    }
}
`
let icons = [perfil, sacola]

function IconsHeader (){
    return (
        <IconsContainer>
            {icons.map((icon, i) => (
                <Icon><img src={icon} alt={i === 0? 'perfil': 'sacola'} /></Icon>
            ))}
        </IconsContainer>
    )
}

export default IconsHeader