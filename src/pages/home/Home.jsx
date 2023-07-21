import React from 'react';
import Style from './Home.module.css';

/* eslint-disable react/jsx-curly-brace-presence */
export default function Home() {
  return (
    <div className={`${Style.HomeContainer}`}>
      <h1>Welcome to our page.</h1>
      <p className={`${Style.AboutDesc}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ratione dolor, omnis, distinctio illum dolorum molestiae et,
        ipsa cumque cum culpa quam libero?
        Nihil eos aliquam rem repellat est ab doloribus.
      </p>
      <p className={`${Style.AboutDesc}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque iste repudiandae ex natus ratione fugiat mollitia laboriosam est qui,
        rem similique ullam dolorem, architecto eligendi
        reprehenderit voluptatum nesciunt explicabo esse!
      </p>
    </div>
  );
}
