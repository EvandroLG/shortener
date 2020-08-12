import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  FormEvent,
  ChangeEvent,
} from 'react';
import { postData } from './utils';
import './App.css';

function App() {
  const input = useRef<HTMLInputElement>(null);
  const [data, setData] = useState(null);
  const [value, setValue] = useState('');

  const isDisabled = useCallback(() => value.length < 3, [value]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const url = input.current?.value;

    if (url) {
      postData('/url', { url }).then((res) => {
        setData(res);
      });
    }
  }, []);

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
        {data && <div>{JSON.stringify(data)}</div>}
      </main>
    </div>
  );
}

export default App;
