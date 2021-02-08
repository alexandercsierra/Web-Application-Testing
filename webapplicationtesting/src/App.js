import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display'

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  return (
    <div className="App">
      <Dashboard setBalls={setBalls} setStrikes={setStrikes} balls={balls} strikes={strikes}/>
      <Display balls={balls} strikes={strikes}/>
    </div>
  );
}

export default App;
