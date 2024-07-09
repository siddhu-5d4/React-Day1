import React from 'react'
import { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);
  
    const calculateResult = () => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      let res;
      switch (operation) {
        case '+':
          res = number1 + number2;
          break;
        case '-':
          res = number1 - number2;
          break;
        case '*':
          res = number1 * number2;
          break;
        case '/':
          res = number1 / number2;
          break;
        case '%':
          res = number1 % number2;
          break;
        default:
          res = 'Invalid operation';
      }
      setResult(res);
    };
  
    return (
      <div className="calculator">
        <h1>Simple Calculator</h1>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          <option value="%">%</option>
        </select>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <button onClick={calculateResult}>Calculate</button>
        {result !== null && <div className="result">Result: {result}</div>}
      </div>
    );
  };

export default Calculator
