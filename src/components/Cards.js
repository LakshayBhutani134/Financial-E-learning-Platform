import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {

  const dic = [{
    src: "/img-home.jpg",
    text: "Hello",
    label: "Adventure",
    path: "/courses"
  }]

  return (
    <div className='cards'>
      <h1> CHECK OUT OUR FREE COURSES </h1>
      <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="/Stocks.jpg"
                    text="The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it."
                    label='Introduction to Stock Markets'
                    path='/courses'
                    />
                    <CardItem 
                    src="/future.jpg"
                    text="Futures Trading is a segment of the derivatives market. This module covers the various intricacies involved in undergoing a futures trade, including margins, leverages, pricing, etc. It also discusses the use of derivatives for hedging purposes."
                    label='Futures Trading'
                    path='/courses'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="/personal.jpg"
                    text="If you have been working on your financial plan and continuously saving and investing, it is crucial to be prepared to tackle any unforeseen eventualities. The short chapters in this module elucidate the importance of insurance in one's life."
                    label='Personal Finance - Insurance'
                    path='/courses'
                    />
                    <CardItem 
                    src="hello.jpg"
                    text="Social Stock Exchange is a new segment on stock exchanges meant to enable investors to donate/invest in social enterprises. SSEs will act as a bridge between the less-informed but willing donors and legitimate organizations doing real social work."
                    label='Social Stock Exchanges (SSEs)'
                    path='/courses'
                    />
                </ul>
            </div>
      </div>
    </div>
  );
}

export default Cards;
