import React, { Component } from "react";
import "./AppFooter.css";
class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtraInfo: false,
    };
  }

  toggleExtraInfo = () => {
    this.setState((prevState) => ({
      showExtraInfo: !prevState.showExtraInfo,
    }));
  };

  render() {
    const { backgroundColor, textColor } = this.props;
    const { showExtraInfo } = this.state;
    return (
      <footer style={{ backgroundColor, color: textColor }}>
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Currency Converter App. All rights
            reserved.
          </p>
          <button
            onClick={this.toggleExtraInfo}
            style={{ color: textColor, borderColor: textColor }}
          >
            {showExtraInfo ? "Hide Details" : "Show More"}
          </button>
          {showExtraInfo && (
            <div className="extra-info">
              <p>Contact us: info@currencyconverterapp.com</p>
              <p>Supports over 150 currencies worldwide</p>
              <p>FAQs about currency conversion</p>
              <p>Latest update: Real-time conversion rates</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          )}
        </div>
      </footer>
    );
  }
}

export default AppFooter;
