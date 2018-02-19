import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";
import bWellLogo from "../../../img/b_well_logo.jpg";
import microlifeLogo from "../../../img/microlife.jpg";
import andLogo from "../../../img/and_logo.png";

class TradeMarksMain extends Component {
  render() {
    return (
      <div className="trade_marks_main">
        <h1> Торговые марки </h1>

        <div className="trade_marks_wrapper">
          <figure>
            <img src={bWellLogo} className="logo_name" />
          </figure>

          <figure className="content">
            <p>
              B.Well – европейская компания, создающая медицинские приборы и
              товары для здоровья всей семьи. Компания B.Well была основана
              группой британских докторов в 2004 году в Лондоне. Всего за
              несколько лет медицинские приборы B.Well завоевали доверие многих
              английских семей, и сегодня бренд является одним из самых
              конкурентоспособных в Европе.
            </p>
          </figure>
        </div>
        <div className="trade_marks_wrapper second">
          <figure className="content">
            <p>
              Microlife - швейцарская компания,мировой лидер в разработке и
              производстве медицинского диагностического оборудования для
              использования в домашних и клинических условиях.Основной
              продукцией являются электронные и механические измерители
              артериального давления, стетоскопы, электронные термометры,
              небулайзеры.
            </p>
          </figure>

          <figure>
            <img src={microlifeLogo} className="logo_name" />
          </figure>
        </div>
        <div className="trade_marks_wrapper third">
          <figure>
            <img src={andLogo} className="logo_name" />
          </figure>
          <figure>
            <p>
              A&D является ведущим мировым производителем профессионального и
              бытового медицинского оборудования. Качество электронных
              тонометров и другой продукции A&D подтверждено многочисленными
              сертификатами, а сама компания полностью соответствует стандартам
              ISO. Продажа тонометров A&D ведется практически по всему миру.<br />
              Компания A&D была основана в 1977 году в Токио, и в этом году
              отпраздновала свое тридцатипятилетие.
            </p>
          </figure>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}))(TradeMarksMain);
