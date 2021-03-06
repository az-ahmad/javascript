import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './Reducers/RootReducer'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

const store = createStore(RootReducer)


// axios.interceptors.request.use(request => {
//   console.log(request)
//   return request
// }, error => {
//   console.log(error)
//   return Promise.reject
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
