import React, { useState } from 'react'
import './SideScroll.css';
import Job from './Job';

function SideScroll() {
  const [openJob, setOpenJob] = useState(false);
  
  function openQuestWindow(){
    setOpenJob(true);
  }

  return (
    <>
      {openJob && <Job closeJob={setOpenJob} />}
      <ul className='media-scroller'>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='https://raw.githubusercontent.com/aut030/GreenDragonInn/main/public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='https://github.com/aut030/GreenDragonInn/blob/main/public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='https://github.com/aut030/GreenDragonInn/tree/main/public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='https://aut030.github.io/GreenDragonInn/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='https://aut030.github.io/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='https://aut030.github.io/GreenDragonInn/public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='../../public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='./images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='./public/images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
      </ul>
    </>
  )
}

export default SideScroll;