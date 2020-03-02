import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';

import {JokesProvider} from 'context/JokesContext';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <JokesProvider>
        <div className="App">
          <Routes />
        </div>
      </JokesProvider>
    </BrowserRouter>
  );
}

export default App;
