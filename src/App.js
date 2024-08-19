import Header from './components/Header'
// import './App.css'
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';

const AppContainer = styled.div`
height: 100vh;
width: 100vw;
background-image: linear-gradient(90deg, rgb(9, 9, 57),  rgb(111, 98, 132));

`



function App() {
  return (
    // <div className='Test'>
      <AppContainer>
        <Header/>
        <Pesquisa/>
      </AppContainer>  
    // </div>
  )
}

export default App;
