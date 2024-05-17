import React, { useState } from 'react';


function App() {

  return (
    <div className='container'>
      <div class="wrapper">
        <TipCalculator />
      </div>
    </div>
  );
}

function TipCalculator({ }) {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);


  function handleReset(){
    setBill("")
    setPercentage1("")
    setPercentage2("")
   
   
  }


  return (
    <div style={{}}>
      <BillInput bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage1} onSelect={setPercentage1}>How did you like the service? </Percentage>
      <Percentage percentage={percentage2} onSelect={setPercentage2}>How did your freind like the service? </Percentage>
      <Reset onReset={handleReset} />
      <Output bill={bill} tip={tip} />
    </div>
  )
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the Bill ? </label>
      <input  type="text" placeholder='Bill Value' value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
    </div>
  )
}
function Percentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>

    </div>
  )
}
function Output({ bill, tip }) {
  return (
    <div>
      <h1>You Pay ${bill + tip}</h1>
    </div>
  )
}
function Reset({ onReset}) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default App;
