import React from 'react';
import './App.scss';

import {JokesProvider} from 'context/JokesContext';
import Home from 'components/Home';

function App() {
  return (
    <JokesProvider>
      <div className="App">
        <Home />
      </div>
    </JokesProvider>
  );
}

export default App;
