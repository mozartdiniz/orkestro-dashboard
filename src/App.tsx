import React from 'react';

import TestStyle from './App.style';

const App: React.FC = () => {
  return (
    <TestStyle>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </TestStyle>
  );
};

export default App;
