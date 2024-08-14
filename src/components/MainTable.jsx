import React, { memo, useEffect, useState, useRef } from "react";
import "../styles/table.css";
import Arrow from "../icons/Arrow";
import { Table } from "antd";

const MainTable = memo(({ emi, interestRate, principal, year, startingMonth, endingMonth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [monthlyData, setMonthlyData] = useState([]);
  // const principalRef = useRef(principal);  

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // console.table({ emi, interestRate,"princicple": principal.current, year, startingMonth, endingMonth })
  
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const getInterestValue = (principal) => {
    const totalInterest = (interestRate / (100 * 12)) * principal;
    return totalInterest;
  }

  useEffect(() => {
    let monthlyCalculation = [];
    let currentPrincipal = principal.current;

    for (let i = startingMonth; i < endingMonth; i++) {
      let interestValue = getInterestValue(currentPrincipal);
      let principalPaid = emi - interestValue;
      currentPrincipal -= principalPaid;
      if (currentPrincipal <= 0) currentPrincipal = Math.abs(currentPrincipal);

      monthlyCalculation.push({
        key: i + 1,
        month: month[i],
        principalPaid: `₹${principalPaid.toFixed(2)}`,
        interestCharged: `₹${interestValue.toFixed(2)}`,
        totalPayment: `₹${emi.toFixed(2)}`,
        balance: `₹${currentPrincipal.toFixed(2)}`,
      });
    }
  //  console.log("currpri",currentPrincipal)
    // handlePrinciple(currentPrincipal);
    principal.current=currentPrincipal
    setMonthlyData(monthlyCalculation);

  }, [emi, interestRate, startingMonth, endingMonth]);

  const columns = [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Principal Paid',
      dataIndex: 'principalPaid',
      key: 'principalPaid',
    },
    {
      title: 'Interest Charged',
      dataIndex: 'interestCharged',
      key: 'interestCharged',
    },
    {
      title: 'Total Payment',
      dataIndex: 'totalPayment',
      key: 'totalPayment',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  return (
    <div className="w-full h-fit"> 
      <div className="yearContainer" onClick={handleClick}>
        <span>{year}</span>
        <span>
          <Arrow isOpen={isOpen} />
        </span>
      </div>
      <div className={`tableValueContainer ${isOpen ? "open" : ""}`}>
        <div className="tableStyleContainer">
          <Table dataSource={monthlyData} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  );
});

export default MainTable;
