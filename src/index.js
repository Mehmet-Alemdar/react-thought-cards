import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import ThoughtForm from './components/ThoughtForm'
ReactDOM.render(
  <Provider store={store}>
    <App />
    <ThoughtForm/>
  </Provider>,
  document.getElementById('root')
);
