import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 style={{ fontStyle: "italic" }}>Currency Converter App</h1>
        <p>
          This app allows you to convert currencies in real-time using the
          latest exchange rates. Simply enter an amount and choose the
          currencies to see the converted value.
        </p>
        <p>
          App name: <strong>{this.props.name}</strong>
        </p>
      </div>
    );
  }
}

export default Header;
