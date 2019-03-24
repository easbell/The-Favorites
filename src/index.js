import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
