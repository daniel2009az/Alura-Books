import styled from "styled-components";
import { Title } from "../Title";
import { DadosNewBooks } from './DadosNewBooks';
import { BookContainer } from "../Pesquisa";
import { BookItem } from "../Pesquisa";
import Foryou from "../ForYou"; 
 export const Section = styled.section`
text-align: center;
color: white;
display: ${props => props.display || 'flex'};
flex-direction: column;
align-items: center;
 background-image: linear-gradient(90deg, rgb(220, 220,220),  rgb(180, 180, 180));
 width: 100%;
 box-sizing: border-box;
 max-width: 100%;
 `
 const Div = styled.div`
 display: flex;
    flex-direction: row;
 @media(max-width: 767px) {
  display: flex;
  flex-wrap: wrap;  
 }

 `


 function NewBooks (){
    return (
        <Div>
            <Section >
                <Title cor = '#D29048' size='1.em' >NOVOS LANÇAMENTOS</Title>
                <BookContainer>
                    {DadosNewBooks.map((book) => 
                    <BookItem>
                        <img src = {book.src} alt={book.name}/>
                        <p>{book.name}</p>

                    </BookItem>
                    )}
                </BookContainer>
            </Section>
            <Section >
                <Title cor = '#D29048' size= '1.em' >RECOMENDAÇÕES</Title>
                {DadosNewBooks.map((book) => 
                    <Foryou 
                    bookTitle={book.name} 
                    genre={book.genre} 
                    sinopse={book.sinopse} 
                    img={book.src}/>
                )}
                        
            </Section>
            

        </Div>
)
}
export default NewBooks;