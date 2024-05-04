import React from "react";
import Navbar from "./navbar";
import "./About.css"; // Import the CSS specific to the About component

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <Navbar />
        <div className="about-content">
          <h1>About Our Currency Converter App</h1>
          <p>
            Welcome to our Currency Converter App, your reliable tool for
            converting currencies from around the globe. Our application is
            designed to provide up-to-date, accurate currency exchange rates to
            help individuals and businesses in their international financial
            transactions.
          </p>
          <p>
            Understanding different global currencies and their values is
            essential in today's interconnected world. Whether you are
            traveling, conducting overseas business, or simply exploring
            economic trends, our app provides instant access to the latest data
            to ensure you have the information you need at your fingertips.
          </p>
          <p>
            Our app supports numerous world currencies, enabling you to convert
            between them with ease and precision. The functionality is built on
            a robust and reliable technology stack that pulls data from trusted
            financial sources, ensuring that the currency rates are always
            current and accurate.
          </p>
          <p>
            We are committed to providing a user-friendly experience while
            ensuring high accuracy and efficiency. Whether you need to check the
            exchange rate for a single transaction or manage multiple
            conversions for varied currencies, our app is here to help you
            navigate the complexities of the global financial landscape.
          </p>
          <h2>Support for Major Global Currencies</h2>
          <p>
            Our application provides real-time data for over 50 global
            currencies. This extensive support allows users to easily manage
            transactions in the following major currencies and more:
          </p>
          <ul>
            <li>United States Dollar (USD)</li>
            <li>Euro (EUR)</li>
            <li>British Pound (GBP)</li>
            <li>Japanese Yen (JPY)</li>
            <li>Swiss Franc (CHF)</li>
            <li>Canadian Dollar (CAD)</li>
            <li>Australian Dollar (AUD)</li>
            <li>New Zealand Dollar (NZD)</li>
            <li>Chinese Yuan (CNY)</li>
            <li>Singapore Dollar (SGD)</li>
            {/* Add more currencies as needed */}
          </ul>
          <p>
            Each currency is updated continuously to ensure that you receive the
            most accurate information possible, facilitating better
            decision-making for all your currency conversion needs.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
