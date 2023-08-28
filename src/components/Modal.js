import React from 'react'
import './Modal.css';
import { Link } from 'react-router-dom';

function Modal({closeModal}){   
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>Sign in to join quests and access our shop!</h1>
                </div>
                <div className='body'>
                    <p>Username: </p>
                    <form>
                        <input type="username" name='username' className='input'/>
                    </form>
                </div>
                <div className='body'>
                    <p>Password: </p>
                    <form>
                        <input type="password" name='password' className='input'/>
                    </form>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)} id='cancelBtn'>Cancel</button>
                    <button onClick={() => closeModal(false)}>Log In</button>
                </div>
                <Link className='sign-up-link' to='/sign-up'>
                   <button className='sign-up-button' onClick={() => closeModal(false)}>Sign-Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Modal;