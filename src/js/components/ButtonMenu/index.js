import React, {Component} from 'react'
import { connect } from 'react-redux'

import './styles.css'

class ButtonMenu extends Component {

    changeButtonClass(e){

        let screen;

        if (e.target.className === ''){

            if(window.innerWidth > 900) screen = 'full_screen';
            else if(700 < window.innerWidth && window.innerWidth < 900) screen = 'tablet'
            else if (400 < window.innerWidth < 700) screen = 'mobile';
            else if (window.innerWidth < 400) screen = 'mini_mobile'

        }

        this.props.changeClass(e.target.className, screen);

    }


    render(){

        return (
            <button className={this.props.className} onClick={this.changeButtonClass.bind(this)}>
                <span>

                </span>
            </button>
        )
    }

}

export default connect(
    state=>({

        className: state.navigation.classes.classButton

    }),

    dispatch=>({

        changeClass: (button, name)=>{

            dispatch({type:"CHANGE_MENU_BUTTON_CLASS", payload:button})

            if (name) dispatch({type:"CHANGE_HEADER_CLASS", payload: name })


        }

    })

)(ButtonMenu)