import { useEffect, useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Qoute from './components/Qoute';
import Home from './components/Home';

const fetchQuote = async (cb) => {
  const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
    headers: {
      'X-Api-Key': 'uHRdrDXaqWLwqBrwbx6P9A==Bk4Cvlvw6ePt3sW1',
    },
  });
  const data = await response.json();
  cb(data);
};

function App() {
  const [quotes, setQuotes] = useState([]);
  const [tab, setTab] = useState();
  useEffect(() => {
    setTab('Home');
    fetchQuote(setQuotes);
  }, []);

  return (
    <div className="App">
      <Header tabChangeHandler={setTab} />
      <main className="Main">
        {
        tab === 'Home' && (
          <section className="HomeContainer">
            <Home />
          </section>
        )
      }
        {
        tab === 'Calculator' && (
          <section className="CalculatorContainer">
            <Calculator />
          </section>
        )
      }
        {
        tab === 'Quote' && (
          <section className="QuoteContainer">
            <Qoute quotes={quotes} />
          </section>
        )
      }
      </main>
    </div>
  );
}

export default App;
