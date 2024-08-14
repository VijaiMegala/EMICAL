// Result.js
import React from "react";
import "../styles/field.css";
import useAnimatedValue from "../Hooks/useAnimateValue";

export default function Result({ emi, principleAmount, totalInterest, totalAmount }) {
  const animatedEmi = useAnimatedValue(emi);
  const animatedPrincipleAmount = useAnimatedValue(principleAmount);
  const animatedTotalInterest = useAnimatedValue(totalInterest);
  const animatedTotalAmount = useAnimatedValue(totalAmount);


  return (
    <div className="valuesContainer">
      <div className="displayTextContainer">
        <span>Monthly EMI</span>
        <span className="displayFieldValue">₹ {animatedEmi}</span>
      </div>
      <div className="displayTextContainer">
        <span>Principle Amount</span>
        <span className="displayFieldValue">₹ {animatedPrincipleAmount}</span>
      </div>
      <div className="displayTextContainer">
        <span>Total Interest</span>
        <span className="displayFieldValue">₹ {animatedTotalInterest}</span>
      </div>
      <div className="displayTextContainer">
        <span>Total Amount</span>
        <span className="displayFieldValue">₹ {animatedTotalAmount}</span>
      </div>
    </div>
  );
}
