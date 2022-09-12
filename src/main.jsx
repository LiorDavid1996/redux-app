import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import userReducer from './store/reducer/user-reducer'
import combineReducer from './store/reducer/index'
const userStore =createStore(combineReducer,{})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userStore}>
    <App />
  </Provider>
  
)
