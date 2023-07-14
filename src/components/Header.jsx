import React from 'react';

/* eslint-disable react/prop-types, jsx-a11y/no-noninteractive-element-interactions,
jsx-a11y/click-events-have-key-events */

export default function Header({ tabChangeHandler }) {
  const navigateToUrl = ($e, tab) => {
    $e.preventDefault();
    return tabChangeHandler(tab);
  };
  return (
    <nav className="Nav">
      <a href="/">Calculator</a>
      <ul className="NavItems">
        <li><a onClick={($e) => navigateToUrl($e, 'Home')} href="/">Home</a></li>
        <li><a onClick={($e) => navigateToUrl($e, 'Calculator')} href="/">Calculator</a></li>
        <li><a onClick={($e) => navigateToUrl($e, 'Quote')} href="/">Quote</a></li>
      </ul>
    </nav>
  );
}
