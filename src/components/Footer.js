import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import './Button.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Start Your Journey,
                </p>
                <p className='footer-subscription-text'>
                    Create your Adventurer Account Today!
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className='footer-input' />
                        <Link to='/GreenDragonInn/sign-up'>
                            <button className='btn'>Sign Up</button>
                        </Link>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/GreenDragonInn/about#how-it-works'>How it works</Link>
                        <Link to='/GreenDragonInn/about#testimonials'>Testimonials</Link>
                        <Link to='/GreenDragonInn/careers'>Careers</Link>
                        <a href='https://www.google.com/maps/place/The+Green+Dragon+Inn/@-37.8597523,175.6810333,21z/data=!4m14!1m7!3m6!1s0x6d6dab7f1d3279b1:0x75bb8d696b08ea29!2sThe+Green+Dragon+Inn!8m2!3d-37.8597471!4d175.6811349!16s%2Fg%2F11b6ql_xw0!3m5!1s0x6d6dab7f1d3279b1:0x75bb8d696b08ea29!8m2!3d-37.8597471!4d175.6811349!16s%2Fg%2F11b6ql_xw0?entry=ttu' target='_blank' rel='noreferrer'>Location</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/GreenDragonInn'>Contact</Link>
                        <Link to='/GreenDragonInn'>Support</Link>
                        <Link to='/GreenDragonInn'>Sponserships</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <a className='social-icon-link facebook' href='https://www.facebook.com/' target='_blank' rel='noreferrer' aria-label='Facebook' >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a className='social-icon-link instagram' href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </a>
                        <a className='social-icon-link twitter' href='https://www.twitter.com/' target='_blank' rel='noreferrer' aria-label='Twitter'>
                            <i className='fab fa-x-twitter' />
                        </a>
                        <a className='social-icon-link tiktok' href='https://www.tiktok.com/' target='_blank' rel='noreferrer' aria-label='TikTok'>
                            <i className='fab fa-tiktok' />
                        </a>
                        <a className='social-icon-link linkedin' href='https://www.linkedin.com/in/david-carey-035279183/' target='_blank' rel='noreferrer' aria-label='Linkedin'>
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;