import { useState } from 'react';
import styled from 'styled-components';
import Bottom from './components.js/Bottom';
import Main from './components.js/Main';
import Top from './components.js/Top';
function App() {

  return (
    <div className="App">
      <Container>
      <Top/>
      <Main />
      </Container>
    </div>
  );
}


const Container = styled.div`
width: 375px;
height: 100%;
background-color: #FB6B6B;
margin: auto;
position: relative;
`

export default App;
