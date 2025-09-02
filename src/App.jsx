import Display from './numpad/display.jsx'
import Keys from './numpad/keys.jsx'
import { useState } from 'react'
import './numpad/style/app.css'


function App() {

  const [displayValue, setValue] = useState('');
  const opRegex = /[+\-*/.]/;

  const handleKeyPress = (input) => {

    setValue(display => {
      let lastChar = display.charAt(display.length - 1)
      if (opRegex.test(lastChar) && (opRegex.test(input))) {
        return display;
      }
      return display += input;
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
            <Keys input={'1'} groupName="key-container" onClick={handleKeyPress}></Keys>
            <Keys input={'2'} groupName="key-container " onClick={handleKeyPress}></Keys>
            <Keys input={'3'} groupName="key-container " onClick={handleKeyPress}></Keys>
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
