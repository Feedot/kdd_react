import React, { Component } from "react";
import { Route } from "react-router";

import Products from "../../pages/Products";
import PartnersAndClients from "../../pages/PartnersAndClients";
import TradeMarks from "../../pages/TradeMarks";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Basket from "../../pages/Basket";

const publicPath = "/";

export const routeCodes = {
  about: publicPath,
  contacts: `${publicPath}contacts`,
  products: `${publicPath}products`,
  tradeMarks: `${publicPath}trade_marks`,
  basket: `${publicPath}basket`
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={routeCodes.products} component={Products} />
        <Route exact path={routeCodes.tradeMarks} component={TradeMarks} />
        <Route exact path={routeCodes.about} component={About} />
        <Route exact path={routeCodes.contacts} component={Contacts} />
        <Route exact path={routeCodes.basket} component={Basket} />
      </div>
    );
  }
}

export default App;
