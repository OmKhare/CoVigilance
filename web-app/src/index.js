import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { initializeApp } from 'firebase/app'

// Use your config values here.
const firebaseConfig = {
  apiKey: 'AIzaSyC93Peub_i0HvX_3aQBICCC6NfB8mfydPY',
  authDomain: 'covigilence1-ecf6e.firebaseapp.com',
  databaseURL: 'https://covigilence1-ecf6e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'covigilence1-ecf6e',
  storageBucket: 'covigilence1-ecf6e.appspot.com',
  messagingSenderId: '112440149008',
  appId: '1:112440149008:web:893c50ca30069240d3b695',
  measurementId: 'G-BF4CFHN3M5',
}

const app = initializeApp(firebaseConfig)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)