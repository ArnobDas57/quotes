import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
