// import State from './redux/State';
import Store from './redux/Store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// let Rerender = (state) => {
let Rerender = (state) => {
    ReactDOM.render(
      <React.StrictMode>
          <App 
          state={state}
          dispatch={Store.Dispatch.bind(Store)}
          // checkIsInputNumber={Store.CheckIsInputNumber.bind(Store)}
          />
      </React.StrictMode>,
      document.getElementById('root')
    );
    reportWebVitals();
  }

// Rerender(State);
Rerender(Store.getState());

// State.subscribe(Rerender)
Store.Subscribe(Rerender)