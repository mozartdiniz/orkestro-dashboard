import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { Provider } from 'react-redux';

// Store
import store from './store/configureStore';

// Global style
import GlobalStyle from './Index.style';

const app = (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
