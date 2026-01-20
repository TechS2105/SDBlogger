import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import '../public/styles/main style folder/index.css';
import {Provider} from 'react-redux';
import Store from './app/Store';

createRoot(document.getElementById('root')).render(

  <Provider store={Store}>

    <App />

  </Provider>

);