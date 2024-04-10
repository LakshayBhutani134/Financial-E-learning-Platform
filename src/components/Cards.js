import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
      <h1> DEFAULT CARDS </h1>
      <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="/img-home.jpg"
                    text="Hello"
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src="/img-8.jpg"
                    text="Hello"
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="/img-1.jpg"
                    text="Hello"
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem 
                    src="/img-2.jpg"
                    text="Hello"
                    label='Adrenaline'
                    path='/services'
                    />
                </ul>
            </div>
      </div>
    </div>
  );
}

export default Cards;
