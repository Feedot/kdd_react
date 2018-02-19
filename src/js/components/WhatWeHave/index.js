import React, {Component} from 'react'

import './styles.css'

import market from '../../../img/pluses_6.jpg'
import exp from '../../../img/pluses_3.jpg'
import team from '../../../img/pluses_8.jpg'
import black from '../../../img/pluses_7.jpg'
import prod from '../../../img/pluses_5.jpg'
import delivering from  '../../../img/pluses_4.jpg'
import repair from '../../../img/pluses_2.jpg'
import sale from "../../../img/pluses_1.jpg"


class WhatWeHave extends Component{


    render(){
        return (
            <section>
                <h1>Наши основные преимущества</h1>
                <div className={"flex_wrapper"}>

                    <figure>
                        <img src={market} alt=""/>
                        <div className="p_wrapper">
                            <p>100 % покрытие<br/> рынка продаж</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={exp} alt=""/>
                        <div className="p_wrapper">
                            <p>многолетний опыт<br/> работы</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={team} alt=""/>
                        <div className="p_wrapper">
                            <p>сплоченная
                                <br/>профессиональная
                                <br/>команда</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={black} alt=""/>
                        <div className="p_wrapper">
                            <p>проведение и участие<br/>
                                в благотворительных
                                <br/>акциях</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={prod} alt=""/>
                        <div className="p_wrapper">
                            <p>постоянное <br/>обновление ассортимента</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={delivering} alt=""/>
                        <div className="p_wrapper">
                            <p>поставка<br/> товаров по спецзаказу</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={repair} alt=""/>
                        <div className="p_wrapper">
                            <p>наличие собственного <br/> сервисного центра</p>
                        </div>
                    </figure>
                    <figure>
                        <img src={sale} alt=""/>
                        <div className="p_wrapper">
                            <p>система скидок<br/> для<br/> крупных клиентов</p>
                        </div>
                    </figure>

                </div>


            </section>
        )
    }

}

export default WhatWeHave;