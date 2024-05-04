import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <h2 style={{ fontStyle: "italic" }}>Top 5 World Currencies</h2>
        <p>
          <strong>US Dollar (USD):</strong> The primary currency used in the
          United States, widely accepted worldwide.
        </p>
        <p>
          <strong>Euro (EUR):</strong> The official currency of the Eurozone,
          used by 19 of the 27 EU member states.
        </p>
        <p>
          <strong>Japanese Yen (JPY):</strong> The official currency of Japan,
          known for its low interest rates.
        </p>
        <p>
          <strong>British Pound (GBP):</strong> The official currency of the
          United Kingdom, known for its high value.
        </p>
        <p>
          <strong>Swiss Franc (CHF):</strong> The official currency of
          Switzerland, often considered a "safe haven" currency.
        </p>
      </div>
    );
  }
}

export default Info;
