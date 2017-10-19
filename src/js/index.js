import '../css/styles.css'

import React from 'react'

import ReactDOM from 'react-dom';

import {createStore} from 'redux'

import {Provider} from 'react-redux'

import {BrowserRouter as Router ,Route} from 'react-router-dom'

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

function playList ( state = initialState ,action ){

    const newState = state;

    if( action.type === 'ACTIVE_LINK') {

        newState.navigation.activeClass = action.payload;

        return {...newState};

    }


    return state


}

const store = createStore(playList);

store.subscribe( ()=>{

    console.log('subscribe', store.getState());


})



ReactDOM.render(

    <Provider store={store}>

        <Router>

            <div>

                <Route exact path="/" component={Products}/>
                <Route path="/partners_and_clients" component={PartnersAndClients}/>
                <Route path="/trade_marks" component={TradeMarks}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>


            </div>

        </Router>

    </Provider>,

    document.getElementById('root')

)


