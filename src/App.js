import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import CurrencyConverter from "./currency";
import Info from "./currencyInfo";
import CurrencyInfo from "./analysis";
import Button from "./Button";
import Blog from "./Blog";
import AppFooter from "./Footer";
import About from "./about";
import Contact from "./contact";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header name="Currency Converter" />
                <CurrencyConverter name="Currency Converter" />
                <Info name="Top 5 Currencies" />
                <CurrencyInfo />
                <Button />
                <AppFooter />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
