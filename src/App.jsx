import { useState } from 'react'
import "./App.css"
import Calculator from './pages/Calculator'
import Header from './components/Header'
// import 'antd/dist/reset.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='outerContainer'>
        <Header/>
        <Calculator/>
      </div>
    </>
  )
}

export default App
