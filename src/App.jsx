import Display from './numpad/display.jsx'
import Keys from './numpad/keys.jsx'
import { useState } from 'react'
import './numpad/style/app.css'


function App() {

  let [displayValue, setValue] = useState('');

  const handleKeyPress = (input) => {
    setValue(display => {
      let lastChar = display.toString().slice(-1)
      const opRegex = /[+\-*/]/;

      if (display[0] == 0) {
        return display = input;
      }

      if (opRegex.test(input) && display.length < 1) {
        return "";
      }

      if (input === '=') {
        try {

          return eval(display) ?? "";

        } catch (err) {

          display = display.slice(0, -1);

          return eval(display);

        }
      }

      if (input === 'C') {
        return "";
      }

      // if the last char is another operator and our input is also an operator
      // then we just go and use current display
      if (opRegex.test(lastChar) && (opRegex.test(input))) {

        return display = display.slice(0, -1) + input;
      }
      return display + input;

    })
  }

  return (
    <>
      <div className="calculator-app">
        <div className="calculator">
          <div className="input-display">
            <Display value={displayValue} />
          </div>
          <div className="num-key-container">
            <Keys input={'+'} groupName="key-container operator" onClick={handleKeyPress}></Keys>
            <Keys input={'7'} groupName="key-container" onClick={handleKeyPress}></Keys>
            <Keys input={'8'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'9'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'-'} groupName="key-container operator" onClick={handleKeyPress}></Keys>
            <Keys input={'4'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'5'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'6'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'/'} groupName="key-container operator" onClick={handleKeyPress}></Keys>
            <Keys input={'1'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'2'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'3'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'*'} groupName="key-container operator" onClick={handleKeyPress}></Keys>
            <Keys input={'C'} groupName="key-container operator" onClick={handleKeyPress}></Keys>
            <Keys input={'0'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'='} groupName="key-container operator" onClick={handleKeyPress}></Keys>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
