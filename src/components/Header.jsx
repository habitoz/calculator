import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.module.css';
/* eslint-disable react/prop-types, jsx-a11y/no-noninteractive-element-interactions,
jsx-a11y/click-events-have-key-events */

export default function Header() {
  return (
    <nav className={`${Style.Nav}`}>
      <Link className={`${Style.Link}`} to="/">Calculator</Link>
      <ul className={`${Style.NavItems}`}>
        <li><Link className={`${Style.Link}`} to="/">Home</Link></li>
        <li><Link className={`${Style.Link}`} to="/calculator">Calculator</Link></li>
        <li><Link className={`${Style.Link}`} to="/qoute">Quote</Link></li>
      </ul>
    </nav>
  );
}
