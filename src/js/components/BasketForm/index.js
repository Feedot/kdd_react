import React,{Component} from 'react'
import {connect} from 'react-redux'

import './styles.css'




class BasketForm extends Component {

    checkForNumber (event){

        let theEvent = event || window.event,
            key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);

        let regex = /[0-9]/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    ajaxToMail(e){

        e.preventDefault()

        let offer = this.props.items.reduce((str,item)=>{


            if(item.ammount !== 0 ){

                str += item.ammount + "шт " + item.name + "; "

            }

            return str


        },"")


        this.products.value = offer;



        const form = new FormData(document.getElementById('send'));

        fetch ( "buy.php", {

            method: "POST",
            body: form

        }).then( ( response ) => {

            if(response.status === 200) return response.text();

            else{

                this.props.onCloseModalWindow('', response.status)

            }

        }).then( text => {

            if (text === "fieldError") this.props.onCloseModalWindow("","field_error");
            else this.props.onCloseModalWindow( '', 200 );

        })


    }

    render(){

        return (

            <form id="send" onSubmit={this.ajaxToMail.bind(this)}>

                <input ref={input=>this.name = input} name="name" type="text" placeholder="Имя" required/>
                <input ref={input=>this.email = input} name="email" type="email" placeholder="Почта" required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}/>
                <input onKeyPress={this.checkForNumber.bind(this)} ref={input=>this.phone = input} name="phone" type="tel" placeholder="Телефон" required/>
                <input ref={input=>this.products = input} name="products" type='hidden'/>
                <textarea name="message" placeholder="Коментарий к заказу..."></textarea>
                <button type="submit">Готово</button>

            </form>

        )
    }

}

export default connect(
    state=>({

        items: state.productList.items

    }),
    dispatch=>({

        onCloseModalWindow: (emptyString, responseStatus)=>{

            dispatch({type:"MODAL_WINDOW", payload:emptyString})

            if(responseStatus === 200){

                dispatch({type:"CLEAR_BASKET"});
                dispatch({type:'ADD_TO_BASKET'})

            }

            dispatch({type:"OPEN_SUCCESS_WINDOW", payload: responseStatus})


        }

    })
)(BasketForm)