import React, { useState } from 'react';
import calculate from '../logic/calculate';

/* eslint-disable react/prop-types, no-nested-ternary */
const KeypadButton = ({ primary, character, clickHandler }) => (
  <button type="button" onClick={() => clickHandler()} className={`keypad-button ${primary ? 'primary-button' : 'secondary-button'}`}>
    {character}
  </button>
);
export default function Calculator() {
  const [state, updateState] = useState({ total: null, next: null, operation: null });
  const clickHandler = (character) => {
    updateState((currentState) => calculate(currentState, character));
  };
  return (
    <div className="Calculator">
      <p className="Screen">{`${state.total ? state.total : state.next ? '' : 0} ${state.operation || ''} ${state.next || ''}`}</p>
      <div className="KeypadContainer">
        <KeypadButton clickHandler={() => clickHandler('AC')} primary character="AC" />
        <KeypadButton clickHandler={() => clickHandler('+/-')} primary character="+/-" />
        <KeypadButton clickHandler={() => clickHandler('AC')} primary character="%" />
        <KeypadButton clickHandler={() => clickHandler('÷')} primary={false} character="÷" />
        <KeypadButton clickHandler={() => clickHandler('7')} primary character="7" />
        <KeypadButton clickHandler={() => clickHandler('8')} primary character="8" />
        <KeypadButton clickHandler={() => clickHandler('9')} primary character="9" />
        <KeypadButton clickHandler={() => clickHandler('x')} primary={false} character="x" />
        <KeypadButton clickHandler={() => clickHandler('4')} primary character="4" />
        <KeypadButton clickHandler={() => clickHandler('5')} primary character="5" />
        <KeypadButton clickHandler={() => clickHandler('6')} primary character="6" />
        <KeypadButton clickHandler={() => clickHandler('-')} primary={false} character="-" />
        <KeypadButton clickHandler={() => clickHandler('1')} primary character="1" />
        <KeypadButton clickHandler={() => clickHandler('2')} primary character="2" />
        <KeypadButton clickHandler={() => clickHandler('3')} primary character="3" />
        <KeypadButton clickHandler={() => clickHandler('+')} primary={false} character="+" />
        <div className="span-2-col">
          <KeypadButton clickHandler={() => clickHandler('0')} primary character="0" />
        </div>
        <KeypadButton clickHandler={() => clickHandler('.')} primary character="." />
        <KeypadButton clickHandler={() => clickHandler('=')} primary={false} character="=" />
      </div>
    </div>
  );
}
