import { useEffect, useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Qoute from './components/Qoute';
import Home from './components/Home';

function App() {
  const [tab, setTab] = useState();
  useEffect(() => {
    setTab('Home');
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
            <Qoute />
          </section>
        )
      }
      </main>
    </div>
  );
}

export default App;
