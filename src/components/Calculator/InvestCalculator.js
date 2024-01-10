import React, { useState } from "react";
import Header from "../Header/Header";
import UserInput from "../UserInput/UserInput";
import ResultsTable from "../ResultsTable/ResultsTable";

const InvestCalculator = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["currentSaving"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest =
        Math.round(currentSavings * expectedReturn * 100) / 100;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: Math.round(currentSavings * 100) / 100,
        yearlyInterest: yearlyInterest,
        totalInterest: "",
        yearlyContribution:
          userInput["currentSaving"] + yearlyContribution * (i + 1),
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      <ResultsTable calculateResult={userInput} />
    </div>
  );
};

export default InvestCalculator;
