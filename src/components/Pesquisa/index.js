import Imput from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { books } from "./dadosPesquisa"
 
const PesquisaContainer = styled.section`
padding: 85px 0;
height:270px;
width: 100%;
text-align: center;
color: white;
`
const Titulo = styled.h2`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: white;
text-align: center;
font-size: 36px;
font-weight: 600;
`
const Subtitulo = styled.h3`
color: white;
text-align: center;
font-size: 16px;
justify-content: center;
margin-bottom: 50px;
font-weight: 500;


`

function Pesquisa(){
    const [searchedBooks,setSearchedBooks] = useState([])
    console.log(searchedBooks)
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante!</Subtitulo>
            <Imput placeholder ='Escreva sua proxima leitura' autoFocus
            onBlur={event => {
               const typedText = event.target.value;
               const typedResult = books.filter(book => book.name.includes(typedText));
               setSearchedBooks(typedResult)
            }}
            />
        </PesquisaContainer>
    )
};
export default Pesquisa