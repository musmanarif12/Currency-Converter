Currency Converter App

The Currency Converter App is a React-based application designed to provide quick and straightforward currency conversions using pre-defined exchange rates. It supports conversions among a wide range of currencies including USD, EUR, GBP, JPY, and many more.
Features

   1. Multiple Currency Support: The app includes exchange rates for various global currencies such as USD, EUR, GBP, JPY, AUD, CAD, and more, catering to a wide user base.
   2. User Input Validation: The app allows only positive numbers for conversion, ensuring accurate and logical financial calculations.
   3. Instant Conversion: Users can enter an amount, select the currency from which they want to convert and to which they wish to convert, and immediately see the converted amount.
   4. Dynamic Currency Selection: The app offers dropdowns to select both 'from' and 'to' currencies, populated dynamically from the available rates in the state.

Technical Overview

The app is built using React and manages state with class components. The state includes amount, fromCurrency, toCurrency, result, and a rates object that holds the exchange rates for different currencies. The conversion logic calculates the result based on the selected currencies and the amount entered, updating the state with the new result. Input fields and selections trigger state changes, re-rendering the relevant parts of the component to display updated results.
Setup and Running

To get the app running locally:

    1. Clone the repository to your local machine.
    2. Navigate to the project directory and run npm install to install dependencies.
    3. Start the app using npm start, which will open it in your default web browser at http://localhost:3000.
