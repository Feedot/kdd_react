import React,{Component} from 'react'
import {connect} from 'react-redux'


// import BasketSideBar from '../BasketSideBar/index'
import BasketList from '../BasketList/index'
import ContactsForm from '../ContactsForm/index'
import './styles.css'

class BasketContent extends Component {

    render(){

        return (
            <div className={"basket_content"}>
                <h1>Корзина</h1>
                <BasketList/>
                <ContactsForm buttonName="Оформить заказ"/>
                {/*<BasketSideBar/>*/}

            </div>
        )
    }

}

export default connect(
    state=>({})
)(BasketContent)