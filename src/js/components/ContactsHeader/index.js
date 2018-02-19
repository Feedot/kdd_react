import React, {Component} from 'react'
import { connect } from 'react-redux'

import './styles.css'

class ContactsHeader extends Component {

    render(){

        return (

            <div className="contacts_header">

                <div className="wrapper">

                    <h1>
                        Все лучшее для Вас!
                        <span>Нам важно, чтобы вы были здоровы!</span>
                    </h1>

                    <a href='#section1' >Свяжитесь с нами</a>

                </div>
            </div>

        )
    }

}

export default connect(

    state=>({}),

    dispatch=>({})

)(ContactsHeader) ;