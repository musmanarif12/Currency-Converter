import React, { Component } from "react";
import CurrencyRatesImage from "./image/graph.png";
import "./analysis.css";
class CurrencyInfo extends Component {
  render() {
    return (
      <>
        <div className="currency-info">
          <h1>Live Currency and Central Bank Rates</h1>
          <p>
            Understanding live currency rates and central bank rates is crucial
            for both investors and individuals participating in the global
            economy. Live currency rates are the current exchange rates in the
            forex market that fluctuate continuously due to changes in supply
            and demand. These rates can be influenced by various factors
            including geopolitical events, economic indicators, and market
            speculation.
          </p>
          <p>
            Central Bank rates, also known as reference or benchmark rates, are
            set by a country's central bank and are used to guide the overall
            monetary policy. These rates influence lending rates and have a
            significant impact on economic activity, inflation, and the
            currency's value. Staying informed about these rates is essential
            for making educated financial decisions.
          </p>
          <img
            src={CurrencyRatesImage}
            alt="Currency Rates and Central Bank Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </>
    );
  }
}

export default CurrencyInfo;
