import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Init() {

    async function fetchWord() {
      const letters = document.getElementById("letters").value;
      const dupes = document.getElementById("dupes").value;
      const response = await fetch("http://localhost:5080/api/words/" + letters + "/" + dupes);
      const data = await response.json();
      console.log(data);
      
      ReactDOM.render(
        <div className="App">
        <App answer={data} />
        </div>,
        document.getElementById('root')
      );
    }
  
    return (
      <div className="Init">
        <p>Choose word length:</p>
        <select id="letters">
          <option value="4">4 letters</option>
          <option value="5">5 letters</option>
          <option value="6">6 letters</option>
        </select>
        <p>Allow words with two repeated letters like 'Hello':</p>
        <select id="dupes">
          <option value="">Yes</option>
          <option value="nodupes">No</option>
        </select>
        <br></br>
        <br></br>
        <button className="submitBtn" onClick={fetchWord}>START GAME</button>
      </div>
    );
  }

  export default Init;