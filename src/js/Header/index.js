import React, {Component} from 'react'

import { connect } from 'react-redux'

import logo from '../../img/logo.jpg'

import {Link} from 'react-router-dom'

import './header.css'

class Header extends Component {

    changeLink(e){

        this.props.chooseLink(e.target.name)


    }

    render(){
        return (

            <header>

                <img src={logo}/>

                <ul>
                    {
                        this.props.navigation.location.map((navItem,index)=>{

                           let activeItem = navItem.link === this.props.navigation.activeClass  ?  'active' : " "
                            return (

                                <li key={index}>

                                    <Link to={navItem.link}
                                          name={navItem.link}
                                          className={ this.props.navigation.className + " " + activeItem }
                                          onClick={this.changeLink.bind(this)}>

                                        {navItem.name.toUpperCase()}

                                    </Link>

                                </li>

                            )

                        })
                    }
                </ul>

            </header>
        )
    }

}

export default connect(
    state=>({

        navigation: state.navigation

        }),
    dispatch=>({

        chooseLink : linkName =>{

            dispatch({type:'ACTIVE_LINK', payload: linkName})

        }
    })
)(Header) ;