import React, { useState } from "react";


const Calculator = () =>{



     const [input1, setInput1] = useState("");
     const [input2, setInput2] = useState("");
     const [error, setError] = useState(null);
     const [result, setResult] = useState(null);

     const validinput = () =>{
      if(input1=='' || input2=='' || isNaN(input1) || isNaN(input2)){
        setError('please enter valid number');
        return false;
      }
      setError(null);
      return true;
     }

     const add = () =>{
      if(validinput()){
        setResult(parseFloat(input1) + parseFloat(input2))
      }
     };

     const sub = () =>{
      if(validinput()){
        setResult(parseFloat(input1) - parseFloat(input2))
      }
     };

     const mul = () =>{
      if(validinput()){
        setResult(parseFloat(input1) * parseFloat(input2))
      }
     };

     const divi = () =>{
      if(validinput()){
        if(input2 !=='0'){
          setResult(parseFloat(input1) / parseFloat(input2))
        }else{
          setError('division by 0 not allowed');
        }
        
      }
     };
    

  return (
  <div className="calculator">

    <h1>React Calculator</h1>
    
    <input type="text" value={input1} placeholder="Num1" onChange={e=>setInput1(e.target.value)} />
    <input type="text" value={input2} placeholder="Num2" onChange={e=>setInput2(e.target.value)} />

    <div className="buttons-div">
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={divi}>/</button>
      
    </div>
    <div className="error">{error ? error:null}</div>
    <div className="success"> {result != null  ?`Result:${result}`:null}</div>

  </div>

  )
  
}

export default Calculator;