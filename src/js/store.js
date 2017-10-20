import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducers/rootReducer'

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

export const history = createHistory();

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

export default store;