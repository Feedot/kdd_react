import React,{Component} from 'react'
import {connect} from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import doctors from "../../../img/doctors_team.jpg"

import './styles.css'

class SectionAboutUs extends Component {

    render(){

        return (

            <div className = "section_about_us">

                <ScrollableAnchor id={'aboutUs'}>
                    <div className="anchor">
                    </div>
                </ScrollableAnchor>

                <h1>
                    О НАС
                </h1>

                <div className="wrapper">

                    <figure className = "image">

                        <img src={doctors} alt=""/>

                    </figure>


                    <figure className="text">

                        <p> ООО « Купеческий дом Донбасс» - активно развивающаяся компания, занимается оптовыми поставками медицинской техники и оборудования по всей территории Донецкой области. В их число входят: электронные и механические измерители артериального давления, стетоскопы, электронные термометры, небулайзеры, ортопедическая продукция (костыли, ходунки, трости), медтекстиль и компрессионный трикотаж.</p>

                    </figure>

                </div>

            </div>

        )
    }

}

export default connect (

    state => ({ }),

    dispatch => ({ })

) (SectionAboutUs) ;