import React from "react";
import Navbar from "./navbar";
import "./Contact.css"; // Import the CSS specific to the Contact component

class Contact extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    alert("Your query has been submitted!");
  };

  render() {
    return (
      <div className="contact-container">
        <Navbar />
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            Welcome to the contact page for our Currency Converter application.
            If you have any queries or need support, feel free to reach out
            through the contact details provided below.
          </p>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="contactNumber">Contact Number:</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                required
              />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="query">Query:</label>
              <textarea id="query" name="query" required></textarea>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
          <h2>About Our Application</h2>
          <p>
            Our currency converter tool helps you find real-time exchange rates
            for various global currencies and convert between them instantly.
          </p>
          <h2>Global Currencies</h2>
          <p>We support a wide range of global currencies...</p>
        </div>
      </div>
    );
  }
}

export default Contact;
