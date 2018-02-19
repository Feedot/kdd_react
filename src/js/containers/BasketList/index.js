import React,{Component} from 'react'
import {connect} from 'react-redux'

import BasketItem from '../../components/BasketItem/index'
import './styles.css'


class BasketList extends Component {


    render(){

        return (

            <div className="basket_list">

                <div className="basket_table_header">

                    <span>Продукция</span>

                    <div>
                        <span> Цена </span> <span className="amount">Количество</span>
                    </div>

                </div>

                {this.props.basketList.map((item,index) => {

                    if (item.ammount !== 0) return < BasketItem key={index} data={item}/>

                })}

                <div className={"basket_table_footer"}>

                    <span>
                        Сумма  {this.props.price}₽
                    </span>

                </div>

            </div>
        )
    }

}

export default connect(
    state=>({

        basketList: state.productList.items,
        price: state.sidebar.basket.result.price

    })
)(BasketList)