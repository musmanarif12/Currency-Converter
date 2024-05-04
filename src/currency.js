import React, { Component } from "react";
import "./currencyCurrencyInfo.css";
class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      fromCurrency: "USD",
      toCurrency: "EUR",
      result: null,
      rates: {
        USD: 1,
        EUR: 0.92,
        GBP: 0.82,
        JPY: 144,
        AUD: 1.4,
        CAD: 1.3,
        CHF: 0.97,
        CNY: 6.74,
        SEK: 9.34,
        NZD: 1.48,
        MXN: 19.77,
        SGD: 1.35,
        HKD: 7.83,
        NOK: 8.97,
        KRW: 1203.5,
        TRY: 18.65,
        INR: 75.5,
        RUB: 60.0,
        BRL: 5.07,
        ZAR: 14.87,
        PHP: 52.07,
        PKR: 224.5,
        IDR: 14345.0,
        THB: 33.09,
        MYR: 4.45,
        VND: 23250,
        EGP: 24.87,
        ARS: 130.51,
        DKK: 6.75,
        PLN: 4.18,
        CZK: 22.97,
        HUF: 366.83,
        UAH: 36.77,
        SAR: 3.75,
      },
    };
  }

  handleAmountChange = (event) => {
    const amount = event.target.value;
    if (amount >= 0) {
      this.setState({ amount });
    }
  };

  handleFromCurrencyChange = (event) => {
    this.setState({ fromCurrency: event.target.value });
  };

  handleToCurrencyChange = (event) => {
    this.setState({ toCurrency: event.target.value });
  };

  convertCurrency = () => {
    const { amount, fromCurrency, toCurrency, rates } = this.state;
    if (amount > 0) {
      const result = (
        amount *
        (rates[toCurrency] / rates[fromCurrency])
      ).toFixed(2);
      this.setState({ result });
    }
  };

  render() {
    const { amount, fromCurrency, toCurrency, result, rates } = this.state;
    return (
      <>
        <div className="currency-converter">
          <div>
            <h1>{this.props.name}</h1>
            <div className="app-note">
              Enter an amount and choose currencies to see the converted value.
            </div>
          </div>

          <input
            type="number"
            value={amount}
            onChange={this.handleAmountChange}
            placeholder="Enter amount"
          />
          <select value={fromCurrency} onChange={this.handleFromCurrencyChange}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select value={toCurrency} onChange={this.handleToCurrencyChange}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <button onClick={this.convertCurrency}>Convert</button>
          <h2>Converted Amount: {result ? result : "___"}</h2>
        </div>
      </>
    );
  }
}

export default CurrencyConverter;
