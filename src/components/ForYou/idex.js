import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  width: 80%;
  height: 200px;
`
const Div = styled.div`
flex-direction: column;
justify-content: center;
height: 100%;

`
const DivButton = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;


`



const BookTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #d29048;
  text-align: center;
  margin: 10px;;
`;
const Genre = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #d29048;
  text-align: center;
  margin: 10px;
`;
const Sinopse = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #d29048;
  text-align: center;
  margin: 10px;
`
const Img = styled.img`
    width: 140px;
    align-self: baseline;
    border-radius: 10px  ;
`
const Button = styled.button`
margin-top: 10px;
height: 40px;
border-radius: 10px;
border-color: #d29048;
background-color: #d29048;
color: white;
transition: all 0.3s; // transition-all duration-300
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
