// import State from './redux/State';
// import Store from './redux/Store';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'


// let Rerender = (state) => {
// let rerender = (state) => {
let rerender = () => {
  // debugger
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App 
          // state={state}
          // dispatch={Store.Dispatch.bind(Store)}
          // dispatch={store.dispatch.bind(store)}
          // checkIsInputNumber={Store.CheckIsInputNumber.bind(Store)}
          />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    reportWebVitals();
  }
// console.log(Store1)
// Rerender(State);
// rerender(store.getState());
rerender();

// State.subscribe(Rerender)
// Store.Subscribe(Rerender)
// Store.subscribe(rerender)
// store.subscribe(() => {
//   let state = store.getState();
//   rerender(state);
// })
// store.subscribe(() => rerender(store.getState()))
store.subscribe(() => rerender())