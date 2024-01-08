import React, { useState } from "react";

const InvestCalculatorForm = (props) => {
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingHandler = (event) => {
    setCurrentSaving(event.target.value);
  };

  const yearlyContributionHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const calculatorData = {
      currentSaving: Number(currentSaving),
      yearlyContribution: Number(yearlyContribution),
      expectedReturn: Number(expectedReturn),
      duration: Number(duration),
    };

    setCurrentSaving("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  const calculatorFormReset = (event) => {
    setCurrentSaving("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSaving}
            onChange={currentSavingHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={yearlyContributionHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={expectedReturnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className="buttonAlt"
          onClick={calculatorFormReset}
        >
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestCalculatorForm;
