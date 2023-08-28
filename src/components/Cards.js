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
                    src='images/fellowship-ring.jpg'
                    text='Join a group of Adventurers traveling to a volcano to destroy some jewelry'
                    label='Dangerous'
                    path='./quests'
                    />
                    <CardItem 
                    src='images/trolls.jpg'
                    text='Rescue a Hobbit from a trio of Trolls'
                    //label='Safe'
                    path='./quests'
                    />
                    <CardItem 
                    src='images/smaug.jpg'
                    text='Help a group of Dwarves reclaim their kingdom from a Dragon'
                    label='Dangerous'
                    path='./quests'
                    />
                </ul>
            </div>
        </div>
        <h1>This Weeks Deals</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/flame-tongue.jpg'
                    text='50% off all Flametongue Swords'
                    label='Limited Time'
                    path='./shop'
                    />
                    <CardItem 
                    src='images/elven-arrows.jpg'
                    text='BOGO on all your Elven Arrows'
                    label='Limited Time'
                    path='./shop'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards