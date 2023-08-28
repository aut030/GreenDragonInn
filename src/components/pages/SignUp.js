import React from "react";
import '../../App.css';
import Footer from "../Footer";

function SignUp() {
  return (
    <>
      <div className='sign-up'>
        <h1>Sign Up Today!</h1>
        <div className='box-text'>
          <p>Create a Username: 
            <form>
                <input type="username" name='username' className='input'/>
            </form>
          </p>
        </div>
        <div className='box-text'>
          <p>Create a Password: 
            <form>
                <input type="password" name='password' className='input'/>
            </form>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp;