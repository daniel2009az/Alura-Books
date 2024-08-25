import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { books } from "./dadosPesquisa"
 
const SearchContainer = styled.section`
height: 100%;
padding: 50px 0;
padding-top: 85px;
text-align: center;
/* color: white; */
display: flex;
flex-direction: column;
align-items: center;
`
const Titulo = styled.h2`
font-family: 'Arial, Helvetica, sans-serif';
color: white;
text-align: center;
font-size: 30px;
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
export const BookContainer  = styled.ul`
width: 80%;
align-content: center;
justify-content: center;
display: flex;
flex-wrap: wrap;
margin-top: 40px;
padding-top: 30px;
padding-inline-start: 0px;;;


`
export const BookItem = styled.li`
transition: all 0.5s; // transition-all duration-300
&:hover {
    transform: translate(-4px, -4px); // hover:translate-x-[-4px] hover:translate-y-[-4px]
    border-radius: 0.375rem; // hover:rounded-md
    box-shadow:  4px 4px 5px #0e3b2c, inset 1px 1px 2px wheat; // hover:shadow-[4px_4px_0px_black]
  }

color: white;
font-weight: 500;
text-shadow: 1px 1px 1px black;
align-items: center;
text-align: center;
justify-content: center;
padding: 15px 5px;
width: 15%;
/* width: auto;
height: auto; */
min-width: 200px;
max-height: 350px;
max-width: 200px;
margin-top: 10px;



&:p{
    text-align: center;
    display: contents;
    font-size: 15px;
    align-items: center;

    
}
img{
    cursor:pointer;
    width: auto;
    height: auto; 

    max-height: 250px;
}
p{
    cursor: pointer
}

`
function Search(){
    const handleKey = (event) => {
        if(event.key === 'Enter'){
            const typedText = event.target.value
            const typedResult = books.filter(book => book.name.includes(typedText))
            setSearchedBooks(typedResult)
            
        }
    }
    const [searchedBooks,setSearchedBooks] = useState([])
    console.log(searchedBooks)
    return(
        
        <SearchContainer bk = 'linear-gradient(90deg, rgb(60, 56,101),  rgb(111, 98, 132))' 
        >
            <Titulo>JÁ SABE POR ONDE COMEÇAR?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante!</Subtitulo>
            <Input placeholder ='Escreva sua proxima leitura'  onKeyDown={handleKey}
            onBlur={event => {
               const typedText = event.target.value;
               const typedResult = books.filter(book => book.name.includes(typedText));
               setSearchedBooks(typedResult)
            }}
            />
            <BookContainer >
            {searchedBooks.map(book  => (
                <BookItem>
                    <img src={book.src} alt={book.name} />
                    <p>{book.name}</p>
                </BookItem>
            ))}
            </BookContainer>
        </SearchContainer>
        
    )
};
export default Search