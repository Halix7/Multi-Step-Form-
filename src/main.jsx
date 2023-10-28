import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router
 
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router 
  >
      <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={450}
        classNames={'fade'}
        >
        <App />
        </CSSTransition>
      </TransitionGroup>

   
    </Router>
  </React.StrictMode>,
)
