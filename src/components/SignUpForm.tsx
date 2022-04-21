import React from "react";

import './style.css';
export const SignUp = () => {

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Sign Up</h2>
                <form>
                    <div className='fullName'>
                        <label htmlFor="fullName">First Name</label>
                        <input type='text' name='fullName'  />
                    </div>
                    <div className='lastname'>
                        <label htmlFor="lname">Last Name</label>
                        <input type='text' name='lname'  />
                    </div>
                    <div className='username'>
                        <label htmlFor="uname">User Name</label>
                        <input type='text' name='lname'  />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password'  />
                    </div>
                    <div className='submit'>
                        <button> Register </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

