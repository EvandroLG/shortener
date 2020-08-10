import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input?.current?.focus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header__title">Shortener</h1>
      </header>
      <main>
        <form className="App-form" action="/url/">
          <input
            className="App-form__input"
            type="input"
            placeholder="Shorten your link"
            ref={input}
          />
          <button className="App-form__button" type="submit">
            Shorten!
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
