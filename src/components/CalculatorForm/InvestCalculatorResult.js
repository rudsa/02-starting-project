import React from "react";

const InvestCalculatorResult = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.calculateResult.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>$ {data.savingsEndOfYear}</td>
              <td>$ {data.yearlyInterest}</td>
              <td>TOTAL INTEREST GAINED</td>
              <td>$ {data.yearlyContribution}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestCalculatorResult;
