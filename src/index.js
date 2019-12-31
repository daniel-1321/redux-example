import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {rootReducer} from './reducers/index';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calculator from './component/calculator';
import Result from './component/result';
import Menu from './component/menu';
import Product from './component/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartList from './component/cartlist';

const myStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={myStore}>
        <Router>
            <Menu></Menu>
            <Switch>
                <Route exact path = '/' component= {App}></Route>
                <Route path = '/calculator' component= {Calculator}></Route>
                <Route path = '/result' component= {Result}></Route>
                <Route path = '/product' component= {Product}></Route>
                <Route path = '/cart' component= {CartList}></Route>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
