import React, {useState} from 'react'
import '../styles/calculator.css'
import Field from '../components/Field';
import Table from '../components/Table';

export default function Calculator() {

  const [EMI, setEMI] = useState(0);
  const [interest, setInterest] = useState(1);
  const [principle, setPrinciple] = useState(100000);
  const [years, setYears] = useState(1);

  const handleEMI = (value) =>{
    setEMI(value);
  }
  const handleInterest = (value) =>{
    setInterest(value);
  }
  const handlePrinciple = (value) =>{
    setPrinciple(value);
  }
  const handleYears = (value) =>{
    setYears(value);
  }


  return (
    <div className='mainContainer'>
        <Field handleEMI={handleEMI} handleInterest={handleInterest} handlePrinciple={handlePrinciple} handleYears={handleYears}/>
        <Table emi={EMI} int={interest} prin={principle} noOfYears={years}/>
    </div>
  )
}
