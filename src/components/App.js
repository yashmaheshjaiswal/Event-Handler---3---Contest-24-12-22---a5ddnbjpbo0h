import React from 'react'
import '../styles/App.css';
const App = () => {
  const handleInput = (event) =>{
   // use console.log
   
    event.target.type=='number'?console.log("Input in #num-input is " + event.target.value): console.log("Input in #text-input is " + event.target.value)
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleInput}/>
      <br/>
    </div>
  )
}


export default App;
