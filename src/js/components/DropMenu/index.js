import React,{Component} from 'react'
import {connect} from 'react-redux'

import  injectTapEventPlugin from  "react-tap-event-plugin"

injectTapEventPlugin();

import './styles.css'


class SideBar extends Component {


    changeActiveItem(e){

        this.props.onChangeActiveItem(e.target.id);


    }


    render(){

        return (

            <div className="type_bar">
                    {
                        this.props.items.map( (item,index) => {

                            if(item.id === this.props.activeItem){

                                return (
                                    <div key={index}>
                                        <button className="show" onClick={this.changeActiveItem.bind(this)}
                                                key={index}
                                                id={item.id}>{item.name}
                                        </button>
                                    </div>
                                )

                            }else{

                                return (
                                    <div key={index}>
                                        <button onClick={this.changeActiveItem.bind(this)}
                                                key={index}
                                                id={item.id}>{item.name}
                                        </button>
                                    </div>
                                )

                            }

                        })
                    }
            </div>
        )

    }

}

export default connect(
    state=>({
        items:state.sidebar.categories.items,
        activeItem:state.sidebar.categories.activeItem.id,

    }),
    dispatch=>({

        onChangeActiveItem: (targetId) =>{

            dispatch({type:"CHANGE_ACTIVE_ITEM", payload:targetId})


        }
    })
)(SideBar)