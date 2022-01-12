import React from 'react'
import "./auth.css"
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='cont'>
            <div className="wrap">
                <p className="title">Create An Account</p>
                <form >
                    <input className="inpt" placeholder="name" />
                    <input className="inpt" placeholder="last name" />
                    <input className="inpt" placeholder="username" />
                    <input className="inpt" placeholder="email" />
                    <input className="inpt" placeholder="password" />
                    <input className="inpt" placeholder="confirm password" />
                    <p className="aggrement">
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </p>
                    <button className='bttn'>Create</button>
                    <p className='mt-4'>
                    Already have an account?<Link className='ms-2' to="/login"><b>Login</b></Link>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
