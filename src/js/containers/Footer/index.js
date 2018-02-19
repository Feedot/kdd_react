import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import logo from '../../../img/logo.png'
import images from '../../images'
import './styles.css'

class Footer extends Component {

    render(){

        return (
            <footer>
                <div className="wrapper">

                    <div className="first">
                        <Link to={this.props.pathname}><img src={logo} alt=""/></Link>
                        <p>Мы здесь, чтобы ответить на любые вопросы, которые могут возникнуть в отношении нашей компании. Обратитесь к нам, и мы в скором времени вам ответим.</p>
                        <span><a href="kupecheskiydom.com">(c) kupecheskiydom.com</a></span>
                    </div>

                    <div className="second">

                        <h3>Свяжитесь с нами:</h3>
                        <div>
                            <p>
                                <span>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                г. Донецк, проспект Ильича 44
                            </p>
                        </div>

                        <div>
                            <p>
                                <span>
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                </span>
                                Понедельник - Пятница 9:00 - 17:00
                            </p>
                        </div>

                        <div>
                            <p>
                                <span>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                <a href={'tel: +380509491502'}>+38(050)949-15-02</a>,
                                <a href={'tel: +380504730805'}> +38(050)473-08-05</a>
                            </p>
                        </div>

                    </div>

                    <div className="third">

                        <h3>Оставайтесь на связи:</h3>

                        <form>

                            <input ref={input => this.input = input}
                                   type="email"
                                   placeholder="Введите ваш email...."
                                   pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}
                                   required />
                            <button>Отправить</button>
                        </form>

                        <div>
                            <h3>Наши партнеры:</h3>
                            <div className={"partners_icon"}>

                                {
                                    this.props.imagesList.map((img,index)=>{
                                        return (

                                            <div  className="img_wrapper">

                                                <img key={index} src={images[img]} />

                                            </div>

                                        )

                                })

                            }</div>

                        </div>

                    </div>
                </div>
            </footer>
        )
    }

}

export default connect (
    state => ({
        pathname: state.navigation.pathname,
        imagesList: state.partnersAndClients
    }),

    dispatch => ({ })
)(Footer)