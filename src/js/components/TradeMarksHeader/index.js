import React,{Component} from 'react'
import {connect} from 'react-redux'

import './styles.css'

class TradeMarksHeader extends Component {

    render(){

        return (
            <div className="trade_marks_header">

                <h1><span> (c) </span> Мы надежный, чеcтный и сильный партнер.
                </h1>


            </div>
        )
    }

}

export default connect(
    state=>({
    })
)(TradeMarksHeader)
