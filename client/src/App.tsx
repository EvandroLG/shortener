import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  FormEvent,
  ChangeEvent,
} from 'react';

import Result from './Result';
import { postData, normalizeUrl } from './utils';
import './App.css';

function App() {
  const input = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<{ url: string; slug: string } | null>(null);
  const [url, setValue] = useState('');

  const isDisabled = useCallback(() => url.length < 3, [url]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (url) {
        postData('/url', { url: normalizeUrl(url) }).then((res) => {
          setData(res);
        });
      }
    },
    [url]
  );

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
            autoComplete="off"
            type="text"
            placeholder="Shorten your link"
            ref={input}
            onChange={handleChange}
          />
          <button
            className="App-form__button"
            type="submit"
            disabled={isDisabled()}
          >
            Shorten!
          </button>
        </form>
        {data && <Result {...data} />}
      </main>
    </div>
  );
}

export default App;
