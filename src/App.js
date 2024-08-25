import Header from './components/Header'
// import './App.css'
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';
import NewBooks from './components/NewBooks'

const AppContainer = styled.div`
/* height: 100vh;
width: 100vw; */
background-image: linear-gradient(90deg, rgb(60, 56, 101),  rgb(111, 98, 132));
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`


function App() {
  return (
    // <div className='Test'>
      <AppContainer>
        <Header/>
        <Pesquisa/>
        <NewBooks/>
      </AppContainer>  
    // </div>
  )
}

export default App;
