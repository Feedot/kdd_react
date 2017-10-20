import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter as Router} from 'react-router-redux'

import App from "./containers/App/index"
import store, {history} from "./store"
import '../css/styles.css'

store.subscribe( ()=>{

    console.log('subscribe', store.getState());


})

const root = document.getElementById('root');

ReactDOM.render(

    <Provider store={store}>

        <Router history={history} >

            <App/>

        </Router>

    </Provider>,

    root

)


