import React, {Component} from 'react'
import { connect } from 'react-redux'

import './styles.css'

class ContactsInfo extends Component {

    render(){

        return (

            <div className="contacts_info">

                <h1>Контакты</h1>

                <div className="info_wrapper">

                    <div>
                        <span>
                           <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                        </span>
                        <p>г.Донецк, <br/>
                            проспект Ильича 44</p>
                    </div>

                    <div>
                        <span><i class="fa fa-phone fa-3x" aria-hidden="true"></i></span>
                        <p><a href={'tel: +380509491502'}>+38(050)949-15-02</a><br/>
                            <a href={'tel: +380504730805'}>+38(050)473-08-05</a>
                        </p>
                    </div>

                    <div>
                        <span><i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i></span>
                        <p>
                            <a href="mailto: bugaev.kdd@mail.ru">bugaev.kdd@mail.ru</a><br/>
                            <a href="mailto: sergey.antonov-kdd@mail.ru">sergey.antonov-kdd@mail.ru</a>
                        </p>
                    </div>

                </div>

            </div>

        )
    }

}

export default connect(

    state=>({}),

    dispatch=>({})

)(ContactsInfo) ;