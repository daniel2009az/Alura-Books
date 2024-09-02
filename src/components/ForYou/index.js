import styled from "styled-components";
import px2vw from "../../utils/px2vw";
const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  padding: ${px2vw(20)};
  border-radius: 10px;
  margin: 0.4em;
  width: 95%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
  @media(min-width: 425px){
    height: 100%;
  }
  @media(min-width: 767px){
    height: 100;
    padding: ${px2vw(10)};
  }

`
const Div = styled.div`
display: flex;
flex-direction: column;
flex : 1 1 100%;
/* justify-content: baseline; */
/* flex: 1 1 2em; */
justify-content: space-between;

`
const DivButton = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
/* height: 100%; */
max-height: 100%;
flex-shrink: 1;
box-sizing: border-box;


`



const BookTitle = styled.h3`
  font-size: ${px2vw(64)};
  font-weight: 700;
  color: #d29048;
  text-align: center;
  margin: 0.2em;
  @media(min-width: 425px){
    font-size: ${px2vw(38)};
  }
  @media(min-width: 375px){
    font-size: ${px2vw(58)};
  }
  @media(min-width: 768px){
    font-size: ${px2vw(48)};
  }
  @media(min-width: 925px){
   font-size: ${px2vw(28)};
  
  }
`;
const Genre = styled.h2`
  font-size: ${px2vw(44)};
  font-weight: 500;
  color: #d29048;
  text-align: center;
  margin: 0.2em;
  @media(min-width: 425px){
    font-size: ${px2vw(38)};
  }
  @media(min-width: 375px){
    font-size: ${px2vw(52)};
  }
  @media(min-width: 768px){
    font-size: ${px2vw(38)};
  }
  @media(min-width: 925px){
   font-size: ${px2vw(22)};
  
  }
`;
const Sinopse = styled.p`
  font-size: ${px2vw(40)};
  font-weight: 500;
  color: #d29048;
  text-align: center;
  margin: 10px;
  @media(min-width: 425px){
    font-size: ${px2vw(28)};
  }
  @media(min-width: 375px){
    font-size: ${px2vw(48)} ;
  }
  @media(min-width: 320px){
    font-size: ${px2vw(48)} ;
  }
  @media(min-width: 768px){
    font-size: ${px2vw(28)};
  }
  @media(min-width: 925px){
   font-size: ${px2vw(18)};
  
  }
`
const Img = styled.img`
    flex-grow: 1;
    width:${ px2vw(350)};
    align-self: center  ;
    border-radius: 10px  ;
   
    @media(min-width: 600px){
    width: ${px2vw(208)};
    max-width: 10em;  
    
  }
`
const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8em;
  font-size: ${px2vw(32)};
  border-radius: 10px;
  border: 1px solid #d29048;
  background-color: #d29048;
  color: white;
  transition: all 0.3s;
  height: ${px2vw(80)};
@media(min-width: 425px){
height: ${px2vw(70)};
}
@media(min-width: 767px){
  max-height: 2.2em;
  font-size: ${px2vw(20)};
}
&:hover {
    /* transform: translate(-1px, -1px); // hover:translate-x-[-4px] hover:translate-y-[-4px] */
    border-radius: 0.375rem; // hover:rounded-md
    box-shadow:  2px 2px 5px #0e3b2c; // hover:shadow-[4px_4px_0px_black]
    background: rgba(210,144,72, .6);
    border-color: rgba(210,144,72, .5);
    cursor: pointer;
  }
`

function Foryou({ bookTitle, genre, sinopse, img }) {
  return (
      <Card>
        <Div>
          <BookTitle>{bookTitle}</BookTitle>
          <Genre>{genre}</Genre>
          <Sinopse> <strong>Sinopse: </strong><br/>{sinopse}</Sinopse>
        </Div>
        <DivButton>
        <Img src={img} />
        <Button>Saiba Mais</Button>
        </DivButton>
      </Card>

  );
}

export default Foryou;
