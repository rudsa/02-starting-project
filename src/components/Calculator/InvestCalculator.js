import React from "react";
import InvestCalculatorHeader from "../UI/InvestCalculatorHeader";
import InvestCalculatorForm from "../CalculatorForm/InvestCalculatorForm";
import InvestCalculatorResult from "../CalculatorForm/InvestCalculatorResult";

const InvestCalculator = () => {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <InvestCalculatorHeader />
      <InvestCalculatorForm />
      <InvestCalculatorResult />
    </div>
  );
};

export default InvestCalculator;
