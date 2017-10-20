import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Products from "../../pages/Products";
import PartnersAndClients from "../../pages/PartnersAndClients"
import TradeMarks from "../../pages/TradeMarks"
import About from "../../pages/About"
import Contacts from "../../pages/Contacts"

export default class App extends Component{

    render(){
        return (

            <div >
                <Route exact path="/" component={Products}/>
                <Route exact path="/partners_and_clients" component={PartnersAndClients}/>
                <Route exact path="/trade_marks" component={TradeMarks}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>
            </div>

        )
    }

}