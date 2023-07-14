import React from 'react';

/* eslint-disable react/prop-types, no-nested-ternary, react/no-array-index-key */
export default function Quote({ quotes }) {
  return (
    <div>
      {quotes.map((quote, index) => (
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
