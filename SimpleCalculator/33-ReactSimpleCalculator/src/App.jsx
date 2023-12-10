import { useState } from 'react'
import './App.css'
import FirstInp from './components/firstInput'
import SecondInp from './components/secondInput'
import Add from './components/addition'
import Sub from './components/subtraction'
import Mult from './components/multiply'
import Divi from './components/division'
import Result from './components/result'

function App() {
  let [firstNumber, setFirst] = useState(0)
  let [secondNumber, setSecond] = useState(0)
  let [result, setResult] = useState(0)
  let firstInput = (value) => {
    setFirst(value)
  }
  let secondInput = (value) => {
    setSecond(value)
  }
  let adder = () => {
    setResult(firstNumber + secondNumber)
  }
  let suber = () => {
    setResult(firstNumber - secondNumber)
  }
  let multier = () => {
    setResult(firstNumber * secondNumber)
  }
  let diver = () => {
    setResult(firstNumber / secondNumber)
  }
  return (
    <>
      <div className="card">
        <FirstInp className="inp1" onChange={firstInput} />
        <SecondInp className="inp2" onChange={secondInput} />
        <div className="buttons">
          <Add className="add" func={adder} />
          <Sub className="sub" func={suber} />
          <Mult className="mult" func={multier} />
          <Divi className="divi" func={diver} />
        </div>
        <h2 className="result">
          <Result value={result} />
        </h2>
      </div>
    </>
  )
}

export default App
