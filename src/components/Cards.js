import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Job Board</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='https://aut030.github.io/GreenDragonInn/images/fellowship-ring.jpg'
                    text='Join a group of Adventurers traveling to a volcano to destroy some jewelry'
                    label='Dangerous'
                    path='/GreenDragonInn/quests'
                    />
                    <CardItem 
                    src='https://aut030.github.io/GreenDragonInn/images/trolls.jpg'
                    text='Rescue a Hobbit from a trio of Trolls'
                    //label='Safe'
                    path='/GreenDragonInn/quests'
                    />
                    <CardItem 
                    src='https://aut030.github.io/GreenDragonInn/images/smaug.jpg'
                    text='Help a group of Dwarves reclaim their kingdom from a Dragon'
                    label='Dangerous'
                    path='/GreenDragonInn/quests'
                    />
                </ul>
            </div>
        </div>
        <h1>This Weeks Deals</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='https://aut030.github.io/GreenDragonInn/images/flame-tongue.jpg'
                    text='50% off all Flametongue Swords'
                    label='Limited Time'
                    path='/GreenDragonInn/shop'
                    />
                    <CardItem 
                    src='https://aut030.github.io/GreenDragonInn/images/elven-arrows.jpg'
                    text='BOGO on all your Elven Arrows'
                    label='Limited Time'
                    path='/GreenDragonInn/shop'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards