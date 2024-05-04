import React from "react";
import "./Blog.css";
import CurrencyRatesImage from "./image/image.png";
import AppFooter from "./Footer";
import Navbar from "./navbar"; // Adjust the path if the Navbar file is in a different directory

const Blog = () => {
  const currencies = [
    { name: "US Dollar", symbol: "USD", strength: "Strong", rank: 1 },
    { name: "Euro", symbol: "EUR", strength: "Strong", rank: 2 },
    { name: "Japanese Yen", symbol: "JPY", strength: "Moderate", rank: 3 },
    { name: "British Pound", symbol: "GBP", strength: "Strong", rank: 4 },
    { name: "Australian Dollar", symbol: "AUD", strength: "Moderate", rank: 5 },
  ];

  const mostPopular = {
    name: "Euro",
    symbol: "EUR",
    description: "Widely used in the European Union.",
  };

  return (
    <>
      <Navbar />
      <div className="blog-container">
        <h1>Currency Analysis and Evolution</h1>
        <p>
          Welcome to our blog on the comparison of different countries'
          currencies.
        </p>

        <h2>Overview of Currencies</h2>
        <ul>
          {currencies.map((currency, index) => (
            <li key={index}>
              <strong>
                {currency.name} ({currency.symbol})
              </strong>{" "}
              - Strength: {currency.strength}, World Rank: {currency.rank}
            </li>
          ))}
        </ul>

        <h2>Most Popular Currency</h2>
        <p>
          The{" "}
          <strong>
            {mostPopular.name} ({mostPopular.symbol})
          </strong>{" "}
          is considered one of the most popular currencies globally.{" "}
          {mostPopular.description}
        </p>
        <img
          src={CurrencyRatesImage}
          alt="Currency Rates and Central Bank Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        {/* Additional content remains unchanged */}
      </div>
      <AppFooter />
    </>
  );
};

export default Blog;
