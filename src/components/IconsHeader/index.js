import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
// import './style.css'
import styled from 'styled-components'

const IconsContainer = styled.ul`
display: flex;
align-items: center;

`
export const Icon = styled.li`
cursor: pointer;
margin-left: 30px;
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