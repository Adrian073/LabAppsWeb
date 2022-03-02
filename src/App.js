/* 
Author adrian
Date: March 3, 20222
*/

import logo from './logo.svg';
import './App.css';
import Addition from './components/addition/Addition'
import Substraction from './components/substraction/Substraction'
import Multiplication from './components/multiplication/Multiplication'
import Division from './components/division/Division'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Demo calc;
          <Addition />
          <Substraction />
          <Multiplication />
          <Division />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
