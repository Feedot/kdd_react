import '../css/styles.css'

import React from 'react'

import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'

import {Provider} from 'react-redux'

import { Router ,Route} from 'react-router-dom'

import Products from "./Products";

import PartnersAndClients from "./PartnersAndClients"

import TradeMarks from "./TradeMarks"

import About from "./About"

import Contacts from "./Contacts"

const initialState = {

    navigation: {

        location: [ {
            name:'Продукты',
            link:'/'
        },
            {
                name:'Партнеры и Клиенты',
                link:'/partners_and_clients'
            },{
                name:'Торговые марки',
                link: '/trade_marks'
            },
            {
                name:'О нас',
                link:'/about'
            },
            {
                name:' Контакты',
                link: '/contacts'
            }
        ],
        activeClass:'/',
        className:'link_location'
    }

}

const history = createHistory();

const enhancers = []

const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);
function reducer ( state = initialState ,action ){

    const newState = state;

    if( action.type === 'ACTIVE_LINK') {

        newState.navigation.activeClass = action.payload;

        return {...newState};

    }


    return state


}

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


