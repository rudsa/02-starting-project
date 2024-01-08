import React, { useState } from "react";
import InvestCalculatorHeader from "../UI/InvestCalculatorHeader";
import InvestCalculatorForm from "../CalculatorForm/InvestCalculatorForm";
import InvestCalculatorResult from "../CalculatorForm/InvestCalculatorResult";

const InvestCalculator = () => {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["currentSaving"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: Math.round(yearlyInterest),
        savingsEndOfYear: Math.round(currentSavings),
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData);
  };

  return (
    <div>
      <InvestCalculatorHeader />
      <InvestCalculatorForm onSaveCalculatorData={calculateHandler} />
      <InvestCalculatorResult calculateResult={yearlyData} />
    </div>
  );
};

export default InvestCalculator;
