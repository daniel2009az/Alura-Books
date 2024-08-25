import styled from "styled-components"

 export const Title = styled.h1`
padding: 30px 0;
align-items: center;    
color: ${props => props.cor || '#fff'};
font-size: ${ props => props.size || '18px'};
text-align:${props => props.align || 'center'};
font-family: ${props => props.font || 'Arial, Helvetica, sans-serif' };
margin: 0;
font-weight: 700;
/* opacity: %; */
background: rgba(255,255,255, .7) ;
width: 100%;



`