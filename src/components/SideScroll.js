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
            <img src='./images/dragon.jpg' alt='dragon'/>
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
            <img src='./images/dragon.jpg' alt='dragon'/>
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
            <img src='./images/dragon.jpg' alt='dragon'/>
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
            <img src='./images/dragon.jpg' alt='dragon'/>
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
            <img src='./images/dragon.jpg' alt='dragon'/>
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
            <img src='./images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
        <li>
          <button className='media-element' onClick={openQuestWindow}>
            <img src='./images/dragon.jpg' alt='dragon'/>
            <p className='title'>Quest</p>
          </button>
        </li>
      </ul>
    </>
  )
}

export default SideScroll;