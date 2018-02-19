import React, {Component} from 'react'
import { connect } from 'react-redux'

import './styles.css'

class ContactsWorkingDays extends Component {

    render(){

        return (

            <div className="contacts_wd">
                <h1>Рабочие часы </h1>

                <div className="wrapper">
                    <div className="main_block ">
                        <div className="circle ">
                            <div className="under_circle">
                            </div>

                            <p>ПН</p>
                        </div>
                        9.00 - 17:00
                    </div>
                    <div className="main_block down">
                        <div className="circle tue">
                            <p>ВТ</p>
                        </div>
                        9.00 - 17:00
                    </div>
                    <div className="main_block">
                        <div className="circle wed">
                            <p>СР</p>
                        </div>
                        9.00 - 17:00
                    </div>
                    <div className="main_block down">
                        <div className="circle thu">
                            <p>ЧТ</p>
                        </div>
                        9.00 - 17:00
                    </div>
                    <div className="main_block">
                        <div className="circle fri">
                            <p>ПТ</p>
                        </div>
                        9.00 - 17:00
                    </div>
                    <div className="main_block down wk">
                        <div className="circle sat">
                            <p>СБ</p>
                        </div>
                        ВЫХОДНОЙ
                    </div>
                    <div className="main_block wk">
                        <div className="circle sun">
                            <p>ВС</p>
                        </div>
                        ВЫХОДНОЙ
                    </div>
                </div>

            </div>

        )
    }

}

export default connect(

    state=>({}),

    dispatch=>({})

)(ContactsWorkingDays) ;