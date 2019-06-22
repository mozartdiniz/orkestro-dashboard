import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TestStyle from './App.style';
import Map from './components/map/Map';
import { IAppState } from './store/interfaces';
import { fetchDriver } from './store/drivers/actions';

const App: React.FC = () => {
  const drivers = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDriver());
  }, []);

  console.log(drivers);
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
        <Map />
      </header>
    </TestStyle>
  );
};

export default App;
