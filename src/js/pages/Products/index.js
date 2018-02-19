import React,{Component} from 'react'
import { connect } from 'react-redux'


import Header from '../../containers/Header/index'
import SideBar from "../../containers/SideBar/index"
import ProductList from '../../containers/ProductList/index'
import ModalWindow from '../../containers/ModalWindow/index'
import Footer from '../../containers/Footer/index'

class Products extends Component {

    constructor(){

        super();

        this.state = {

            className: 'up'

        }

    }


    componentDidMount(event){

        window.onscroll = (event) => {


            let correctScroll = event.target.scrollingElement.scrollTop;

            let  aside =  document.querySelector('aside')

                if ( aside ) {

                    aside = aside.offsetHeight + 80;

                    correctScroll < aside ? this.setState({ className:"up" }) : this.setState({ className:"up active" });

                }


        }

    }


    render(){

        return (

            <div className="products_list">

                <Header/>

                <div className={'products '+ this.props.className}>
                    <SideBar />
                    <ProductList name = {this.state.className}/>
                </div>

                <Footer/>

                <ModalWindow/>

            </div>
        )
    }

}

export default connect(
    state=>({
        className: state.navigation.classes.headerClassName
    })
)(Products)
