import React,{Component} from 'react'
import {connect} from 'react-redux'

import './styles.css'



class BasketNavigation extends Component {

    showModalWindow(){

        let correctArray = this.props.productList.filter(item => {
            if(item.ammount !== 0) return item ;
        })

        this.props.onShowModalWindow({
            type:"array",
            content:correctArray
        });

    }

    render(){
       let  basketClassName = this.props.quantity!==0 ? this.props.classes.className + " active": this.props.classes.className;
        return (

            <div className={basketClassName}>
                <h3>{this.props.name}</h3>
                <div className={this.props.classes.classSum}><span>{this.props.quantity}</span> товар(ов) на сумму: </div>
                <p className={this.props.classes.classNameWith}>{this.props.price + "₽"}</p>
                <p className={this.props.classes.classNameEmpty}>Пусто</p>
                <button onClick={this.showModalWindow.bind(this)} className={this.props.classes.classNameButton}>Оформить</button>
            </div>

        )
    }

}

export default connect(
    state=>({

        productList: state.productList.items,
        quantity: state.sidebar.basket.result.quantity,
        name:state.sidebar.basket.name,
        price:state.sidebar.basket.result.price,
        classes: state.sidebar.basket.classes

    }),
    dispatch=>({
        onShowModalWindow:object=>{

           dispatch({type: "MODAL_WINDOW", payload: object})
            if(window.innerWidth < 900 ) dispatch({type: 'SHOW_CLOSE_MOBILE_FILTER'});

        }
    })
)(BasketNavigation)