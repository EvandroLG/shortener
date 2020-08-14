import React, { useRef, useEffect, useCallback, FormEvent } from 'react';

import { postData, normalizeUrl } from './utils';
import './App.css';

function App() {
  const input = useRef<HTMLInputElement>(null);

  const isDisabled = useCallback(() => {
    if (input.current) {
      return input.current.value.length < 3;
    }
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    if (input.current) {
      postData('/url', { url: normalizeUrl(input.current.value) }).then(
        (res) => {
          if (input.current) {
            input.current.value = `${window.location.protocol}//${window.location.host}/${res.slug}`;
            input.current.select();
            document.execCommand('copy');
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    input?.current?.focus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header__title" data-testid="title">
          Shortener
        </h1>
      </header>
      <main>
        <form
          data-testid="form"
          className="App-form"
          onSubmit={handleSubmit}
          action="/url"
        >
          <input
            data-testid="input"
            className="App-form__input"
            autoComplete="off"
            type="text"
            placeholder="Shorten your link"
            ref={input}
          />
          <button
            data-testid="button-submit"
            className="App-form__button"
            type="submit"
            disabled={isDisabled()}
          >
            Shorten!
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
