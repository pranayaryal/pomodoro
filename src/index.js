import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import pomo from './reducers'

let store = createStore(pomo)

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>, 
    
    
document.getElementById('root'));
registerServiceWorker();
