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
    let totalInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest =
        Math.round(currentSavings * expectedReturn * 100) / 100;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = Math.round((totalInterest + yearlyInterest) * 100) / 100; //eslint-disable-line no-unused-vars

      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: Math.round(currentSavings * 100) / 100,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        yearlyContribution:
          userInput["currentSaving"] + yearlyContribution * (i + 1),
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
