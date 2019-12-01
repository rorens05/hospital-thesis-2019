import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'

import { BrowserRouter as Router  } from 'react-router-dom';

const store = createStore(
  rootReducer,
)

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL + "/hospital-thesis-2019"}><App /></Router>
  </Provider>, document.getElementById('root')
); 