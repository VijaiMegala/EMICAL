import React, { useMemo, useState, useEffect } from 'react';
import Result from './Result';
import "../styles/field.css";
import SliderCom from './SliderCom';
import Graph from './Graph';

function Field({ handleEMI, handleInterest, handlePrinciple, handleYears }) {
  const [amt, setAmt] = useState(100000);
  const [int, setInt] = useState(1);
  const [yrs, setYrs] = useState(1);

  const handleAmt = (value) => {
    setAmt(value);
    handlePrinciple(value);
  };

  const handleInt = (value) => {
    setInt(value);
    handleInterest(value);
  };

  const handleYrs = (value) => {
    setYrs(value);
    handleYears(value);
  };

  const calculateEMI = (principal, annualInterestRate, tenureYears) => {
    const r = annualInterestRate / 100 / 12;
    const n = tenureYears * 12; 

    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalInterest = (emi * n) - principal;
    const totalAmount = principal + totalInterest;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    };
  };

  const { emi, totalInterest, totalAmount } = calculateEMI(amt, int, yrs);

  useEffect(() => {
    handleEMI(emi);
  }, [emi, handleEMI]); 

  return (
    <div className='fieldContainer'>
      <div className='coverContainer'>
        <div className='sliderContainer'>
          <SliderCom text={"Loan Amount"} field={"amt"} val={amt} handleChange={handleAmt} />
          <SliderCom text={"Rate Of Interest (p.a)"} field={"int"} val={int} handleChange={handleInt} />
          <SliderCom text={"Loan Tenure (Years)"} field={"yrs"} val={yrs} handleChange={handleYrs} />
        </div>
        <Graph amt={amt} totalInterest={totalInterest} />
      </div>
      <Result 
        emi={emi}
        principleAmount={amt}
        totalInterest={totalInterest}
        totalAmount={totalAmount}
      />
    </div>
  );
}

export default React.memo(Field);
