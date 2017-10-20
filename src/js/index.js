import '../css/styles.css'

import React from 'react'

import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import {Route} from 'react-router-dom'

import {ConnectedRouter as Router} from 'react-router-redux'

import Products from "./pages/Products";

import PartnersAndClients from "./pages/PartnersAndClients"

import TradeMarks from "./pages/TradeMarks"

import About from "./pages/About"

import Contacts from "./pages/Contacts"

import store, {history} from "./store"

store.subscribe( ()=>{

    console.log('subscribe', store.getState());


})



ReactDOM.render(

    <Provider store={store}>

        <Router history={history} >

            <div >

                <Route exact path="/" component={Products}/>
                <Route exact path="/partners_and_clients" component={PartnersAndClients}/>
                <Route exact path="/trade_marks" component={TradeMarks}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>


            </div>

        </Router>

    </Provider>,

    document.getElementById('root')

)


