import React,{Component} from 'react'
import {connect} from 'react-redux'

import Header from '../../containers/Header/index'
import images from '../../images'
import LazyImage from "../../components/LazyImage/index";

class PartnersAndClients extends Component {

    render(){

        return (
            <div className="partner_and_clients">
                <Header/>
                <h1 className="head">Партнеры и Клиенты</h1>
                <section>

                    <div className={'part_wrapper'}>

                        {
                            this.props.imagesList.map((img,index)=>{
                                return (
                                    <div key={index}  className="img_wrapper">
                                        <img key={index} src={images[img]}/>
                                    </div>

                                    )

                        })
                        }

                    </div>

                </section>
            </div>
        )
    }

}

export default connect(
    state=>({
        imagesList: state.partnersAndClients
    })
)(PartnersAndClients)
