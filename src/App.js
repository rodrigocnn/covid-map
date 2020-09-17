import React from 'react';
import GlobalStyle from './commons/styles/global-style'
import {StylesProvider} from '@material-ui/styles'
import {CssBaseline} from '@material-ui/core'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
     <StylesProvider injectFirst>
      <CssBaseline/>
       <GlobalStyle/>
        <Main/>
      </StylesProvider>
    </div>
   
  );
}

export default App;
