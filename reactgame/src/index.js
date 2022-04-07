import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let word = "garden".toLocaleUpperCase();

ReactDOM.render(

  <div className="App">
    <App answer={word}/>
  </div>,
  document.getElementById('root')
);

// function Init() {
//   return (
//     <div className="App">
//       <input type="radio" name="letters" value="4letters" /> 4 letter words |
//       <input type="radio" name="letters" value="5letters" /> 5 letter words |
//       <input type="radio" name="letters" value="6letters" /> 6 letter words 
//     <div>
//       <button className="submitBtn">START GAME</button>
//     </div>
//     </div>
//   );
// }