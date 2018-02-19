import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route } from 'react-router'

import App from "./containers/App/index"
import store, {history} from "./store"
import '../css/styles.css'


// store.subscribe( ()=>{
//
//     console.log('subscribe', store.getState());
//
//
// })

// if ( window.location.pathname !== '/dist' ) {  window.location.pathname = '/dist' };

export const pathname = window.location.pathname;
console.log(pathname);



ReactDOM.render(

    <Provider store={store}>

        <Router history={history} >

            <App name={pathname}/>

        </Router>

    </Provider>,

    document.getElementById('root')

);


