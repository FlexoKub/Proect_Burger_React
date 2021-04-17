
import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';


function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
    </React.Fragment>
  );
}

export default App;
