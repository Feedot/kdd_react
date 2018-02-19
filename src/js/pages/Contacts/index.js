import React,{Component} from 'react'

import ScrollableAnchor from 'react-scrollable-anchor'

import Header from '../../containers/Header/index'
import './styles.css'
import ContactsForm from '../../containers/ContactsForm/index'
import ContactsInfo from '../../components/ContactsInfo/index'
import ContactsWorkingDays from '../../components/ContactsWorkingDays/index'
import ContactsHeader from '../../components/ContactsHeader/index'
import ModalWindow from '../../containers/ModalWindow/index'
import Map from '../../components/Map/index'
import Footer from '../../containers/Footer/index'

export default class Contacts extends Component {

    render(){

        return (
            <div className="contacts">
                <Header/>
                <ContactsHeader/>
                <ContactsInfo/>
                <ContactsWorkingDays/>

                <section >
                    <ScrollableAnchor id={'section1'}>
                        <div className="anchor">
                        </div>
                    </ScrollableAnchor>
                    <h1 className="connect_with">Свяжитесь с нами</h1>
                    <div className="form_wrapper">
                        <ContactsForm buttonName={"Отправить"}/>
                    </div>
                </section>

                <Map
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyDyBXmsAGOQq-lE3OgK6825V6iRCDvqV6I"}
                    loadingElement={<div  style={{ height: `200px` }} />}
                    containerElement={<div className={'ggl_map'}></div>}
                    mapElement={<div style={{height:100+'%'}}></div>}/>

                <ModalWindow/>
                <Footer/>

            </div>

        )
    }

}