import React from 'react';

/* eslint-disable react/prop-types */
const KeypadButton = ({ primary, character }) => (
  <div className={`keypad-button ${primary ? 'primary-button' : 'secondary-button'}`}>
    {character}
  </div>
);
export default function Calculator() {
  return (
    <div className="Calculator">
      <p className="Screen">0</p>
      <div className="KeypadContainer">
        <KeypadButton primary character="AC" />
        <KeypadButton primary character="+/-" />
        <KeypadButton primary character="%" />
        <KeypadButton primary={false} character="/" />
        <KeypadButton primary character="7" />
        <KeypadButton primary character="8" />
        <KeypadButton primary character="9" />
        <KeypadButton primary={false} character="x" />
        <KeypadButton primary character="5" />
        <KeypadButton primary character="5" />
        <KeypadButton primary character="6" />
        <KeypadButton primary={false} character="-" />
        <KeypadButton primary character="1" />
        <KeypadButton primary character="2" />
        <KeypadButton primary character="3" />
        <KeypadButton primary={false} character="+" />
        <div className="span-2-col">
          <KeypadButton primary character="0" />
        </div>
        <KeypadButton primary character="." />
        <KeypadButton primary={false} character="=" />
      </div>
    </div>
  );
}
