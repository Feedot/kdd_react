import React,{Component} from 'react'
import {connect} from 'react-redux'

import DropMenu from '../../components/DropMenu/index'
import PriceNavigation from '../../components/PriceNavigation'
import BasketNavigation from '../../components/BasketNavigation'
import './styles.css'



class SideBar extends Component {

    componentDidMount(){

    }

    closeMobileFilter(){
        this.props.onCloseMobileFilter()
    }

    render(){

        return (

            <aside className={this.props.class}>
                <div className="side_bar_wrapper">

                    <h1>{this.props.sidebar.h1}</h1>

                    <DropMenu/>
                    <PriceNavigation/>
                    <BasketNavigation/>
                    <div className={"ready_wrapper"}>
                        <button className='ready' onClick={this.closeMobileFilter.bind(this)}>Готово</button>
                    </div>

                </div>
            </aside>

        )
    }

}

export default connect(
    state=>({
        sidebar:state.sidebar,
        class: state.sidebar.classes.classSideBar
    }),
    dispatch=>({
        onCloseMobileFilter: () => {
            dispatch({type: 'SHOW_CLOSE_MOBILE_FILTER'})
        }
    })
)(SideBar)