import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [message, setMessage] = useState(null)
useEffect(() => {
  fetch('/api')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  setMessage(data.message)
})
  .catch((err) => {console.log(err)})
}, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message ? message : 'Loading...'}
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