import React from 'react';
import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import App from './App';

// style + assets
import './assets/scss/style.scss';

// Amplify
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

// ===========================|| REACT DOM RENDER  ||=========================== //

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
