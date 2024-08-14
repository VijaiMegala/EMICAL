import React, { useEffect, useState, useRef, lazy } from "react";
import "../styles/table.css";
import Plus from "../icons/Plus";
const MainTable = React.memo(lazy(() => import('./MainTable')));

export default function Table({ emi, int, prin, noOfYears }) {
  const [isOpen, setIsOpen] = useState(false);
  const [years, setYears] = useState([]);
  // const [principle, setPrinciple] = useState(prin);
  const principle = useRef(prin)
  
//  console.log("initial",{ emi, int, prin, noOfYears });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

//   const handlePrinciple = (value) =>{
//     setPrinciple(value);
// }

useEffect(() =>{
  principle.current = prin;
},[emi, int, prin, noOfYears])

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let temp = [];
    for (let i = 0; i <= noOfYears; i++) {
      temp.push(currentYear + i);
    }
    setYears(temp);
  }, [noOfYears]);

  const currentMonth = new Date().getMonth() + 1;

  return (
    <div className="tableContainer">
      <div className="openContainer">
        <div>Your Amortization Details (Yearly/Monthly)</div>
        <div className="animationContainer">
          <Plus isOpen={isOpen} handleClick={handleClick} />
        </div>
      </div>
      <div className={`tableMainContainer ${isOpen ? "open" : ""}`}>
        {years.map((year, index) => {
          let startingMonth;
          let endingMonth;

          if (index === 0) {
            startingMonth = currentMonth ;
            endingMonth = 12; 
          } else if (index === years.length - 1) {
            startingMonth = 0;
            endingMonth = currentMonth - 1 || 12;
          } else {
            startingMonth = 0;
            endingMonth = 12;
          }

          return (
            <MainTable
              key={year}
              emi={emi}
              interestRate={int}
              principal={principle}
              // handlePrinciple={handlePrinciple}
              year={year}
              startingMonth={startingMonth}
              endingMonth={endingMonth}
            />
          );
        })}
      </div>
    </div>
  );
}
