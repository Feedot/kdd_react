import React, {Component} from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

import './styles.css'

class Navigation extends Component {

    doRightButton(e){
        if(!e.target.className){
            this.props.onReturnClasses()
        }


    }

    render(){
        return (

            <ul className='nav'>

                {
                    this.props.navigation.location.map((navItem,index)=>{

                        return (

                            <li key={index}>

                                <NavLink exact to={navItem.link}
                                         onClick={this.doRightButton.bind(this)}>

                                    {navItem.name.toUpperCase()}

                                </NavLink>

                            </li>

                        )

                    })
                }
            </ul>
        )

    }

}

export default connect(
    state=>({

        navigation: state.navigation,
        classButton: state.navigation.classes.classButton,
        pathname: state.navigation.pathname

    }),
dispatch=>({

    changeClass: (button)=>{

        dispatch({type:"CHANGE_MENU_BUTTON_CLASS", payload:button})

    },
    onReturnClasses:()=>{
        dispatch({type:"RETURN_CLASSES"})
    }
})


)(Navigation)