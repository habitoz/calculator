import React, { useEffect, useState } from 'react';

const fetchQuote = async (cb) => {
  await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
    headers: {
      'X-Api-Key': 'uHRdrDXaqWLwqBrwbx6P9A==Bk4Cvlvw6ePt3sW1',
    },
  }).then((res) => res.json())
    .then((res) => cb((pState) => ({
      ...pState, quotes: res, loading: false, error: '',
    })))
    .catch((err) => cb((pState) => ({ ...pState, loading: false, error: err.message || 'failed to fatch quote.' })));
};

/* eslint-disable react/prop-types, no-nested-ternary, react/no-array-index-key */
export default function Quote() {
  const [state, setState] = useState({ quotes: [], loading: false, error: '' });

  useEffect(() => {
    setState((pState) => ({ ...pState, loading: true }));
    fetchQuote(setState);
  }, []);

  return (
    <div>
      {
            state.loading && (
            <p className="text-center loading-message">hangon fetching quotes.</p>
            )
        }
      {
            !state.loading && state.error && (
            <p className="ErrorMessage text-center">{state.error}</p>
            )
        }
      {!state.loading && !state.error && state.quotes.map((quote, index) => (
        <blockquote key={index}>
          <cite>
            {quote.quote}
          </cite>
          <p>
            - By
            {quote.author}
          </p>
        </blockquote>
      ))}
    </div>
  );
}
