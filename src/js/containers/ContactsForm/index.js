import React,{Component} from 'react'
import {connect} from 'react-redux'



import './styles.css'

class ContactsForm extends Component {

    checkForNumber (e){

        let theEvent = e || window.event,
            key = theEvent.keyCode || theEvent.which,
            regex = /[0-9]/;

        key = String.fromCharCode(key);

        if ( !regex.test(key) ) {

            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();

        }
    }

    ajax(e){

        const form = new FormData(document.getElementById('conatactForm'));

        fetch ( "buy.php", {

            method: "POST",
            body: form,

        }).then( ( response ) => {

             if (response.status === 200) return response.text()

             else this.props.onCloseModalWindow( response.status )


        }).then( text => {

            if( text === "fieldError" ) this.props.onCloseModalWindow('field_error');

            else {
                    this.props.onCloseModalWindow({ status: 200 });

                    this.name.value = "";
                    this.email.value = "";
                    this.message.value = "";
                    this.phone.value = ""
            }

        })

        e.preventDefault()

    }

    render(){

        return (
            <div className="content_form">
                    {/*<p>Мы здесь, чтобы ответить на любые вопросы, которые могут возникнуть в отношении нашей компании. Обратитесь к нам, и мы в скором времени вам ответим.</p>*/}
                <form id="conatactForm" onSubmit={this.ajax.bind(this)}>
                    <div className="input_up">
                        <span className='name'><input name="name"
                                                      ref={input=> this.name = input}
                                                      placeholder="Ваше имя*"
                                                      type="text" required/></span>
                        <span className="email"><input name="email"
                                                       ref={input=> this.email = input}
                                                       type="email" required
                                                       placeholder="Ваша почта*"
                                                       pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}/>
                        </span>
                        <span className="number"><input name="phone"
                                                        onKeyPress={this.checkForNumber.bind(this)}
                                                        placeholder="Ваш телефон*"
                                                        ref={input=> this.phone = input}
                                                        type="phone" required/>
                    </span>
                    </div>
                    <span className="message" ><textarea
                        name="message"
                        ref={input=> this.message = input}
                        placeholder="Мы здесь, чтобы ответить на любые вопросы, которые могут возникнуть в отношении нашей компании."></textarea></span><br/>
                    <button type="submit">{this.props.buttonName}</button>

                </form>

            </div>
        )
    }

}

export default connect(
    state =>({}),
    dispatch=>({

        onCloseModalWindow: ( responseStatus )=>{

            dispatch({type:"OPEN_SUCCESS_WINDOW", payload: responseStatus})


        }
    })

)(ContactsForm)

