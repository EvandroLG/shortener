import React, { useRef, useEffect, FormEvent, useState } from 'react';
import { postData } from './utils';
import './App.css';

function App() {
  const input = useRef<HTMLInputElement>(null);
  const [data, setData] = useState(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const url = input.current?.value;

    if (url) {
      postData('/url', { url }).then((res) => {
        setData(res);
      });
    }
  }

  useEffect(() => {
    input?.current?.focus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header__title">Shortener</h1>
      </header>
      <main>
        <form className="App-form" onSubmit={handleSubmit} action="/url">
          <input
            className="App-form__input"
            type="url"
            placeholder="Shorten your link"
            ref={input}
          />
          <button className="App-form__button" type="submit">
            Shorten!
          </button>
        </form>
        {data && <div>{JSON.stringify(data)}</div>}
      </main>
    </div>
  );
}

export default App;
