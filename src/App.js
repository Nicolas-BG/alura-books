//import './App.css';
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import UltimosLancamentos from './components/UltimosLancamentos'
import styled from 'styled-components';


const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: 300vh;
    background-image: linear-gradient(90deg,#002F52 35%, #326589);
  
  li {
    list-style: none;
  }
`

function App() {
  return (
    //<div className="App">...</div>
    <AppContainer>
      <Header/>     
      <Pesquisa/>      
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
