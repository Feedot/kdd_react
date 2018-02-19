
import React,{Component} from 'react'
import { connect } from 'react-redux'

import './styles.css'

import images from  '../../images'

class ModalContentPage extends Component{

    changeAmmount(e){
        if (e.target.name === "toBasket" ) {

            this.props.onChangeAmmount({

                ammount:this.input.value,
                name: this.input.name

            }, e.target.name )

        }else if( e.target.name === this.props.content.name ){

            this.props.onChangeAmmount({

                ammount:this.input.value,
                name: this.input.name

            }, 'delete' )
        }
        else if (e.target.name === 'delete') {

            this.props.onChangeAmmount({

                ammount:0,
                name: this.input.name

            }, e.target.name )

        }
    }
    closeModalWindow(){

        this.props.onCloseModalWindow('');


    }

    componentDidMount(){
        this.input.focus()
        this.input.selectionStart = this.input.value.length;
        this.input.select()


    }

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

    render(){
        let defaultValue = this.props.ammount === 0 ?  1 : this.props.ammount,
            className = 'side_bar_content_page';
        if(this.props.ammount !== 0 )  className = 'side_bar_content_page active';
        return (

                <div className="main_content_page">
                    <div className="info">
                        <button onClick={this.closeModalWindow.bind(this)} className="close"></button>
                        <img src={images[this.props.content.img]} alt=""/>
                        <div className="wrapper">
                            <p className="name">{this.props.content.name}</p>
                            <p>{this.props.content.text}</p>
                            <div className={className}>
                                <span className="price">{"₽" + this.props.content.price}</span>
                                <input
                                    type='text'
                                    onKeyPress={this.checkForNumber.bind(this)}
                                    name={this.props.content.name}
                                    ref={ input=> this.input = input }
                                    defaultValue={defaultValue}
                                    maxLength="3"
                                />
                                <button className="in_basket" name="toBasket" onClick={this.changeAmmount.bind(this)}>+ Добавить в корзину</button>
                                <button className="delete update" name={this.props.content.name} onClick={this.changeAmmount.bind(this)}>Обновить</button>
                                <br/>
                                <span className="desc">Товар в корзине:</span>
                                <br/>
                                <button className="delete" name="delete" onClick={this.changeAmmount.bind(this)}>Удалить</button>
                            </div>
                        </div>
                    </div>

                </div>

        )
    }

}

export default  connect (
    state=>({

        content: state.modalWindow.windowOfProduct.content,
        ammount: state.modalWindow.windowOfProduct.content.ammount
    }),

    dispatch=>({

        onCloseModalWindow: emptyString=>{

            dispatch({type:"MODAL_WINDOW", payload:emptyString})

        },

        onChangeAmmount:(object,target)=>{

            dispatch({type:"CHANGE_AMMOUNT",payload:object});

            dispatch({type:'ADD_TO_BASKET'})


            if ( target === "delete" ||  target === "toBasket" ) dispatch({type:"MODAL_WINDOW", payload:''});

        },

    })

)(ModalContentPage)











