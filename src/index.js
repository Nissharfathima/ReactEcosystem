import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import {configureStore} from './store.js';

ReactDom.render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>,
     document.getElementById('root'));