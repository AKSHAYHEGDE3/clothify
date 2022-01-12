import React from 'react'
import { Link } from 'react-router-dom'
import "./auth.css"

const Login = () => {
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
                <button className='bttn mt-3'>Login</button>
                <p className='mt-4'>
                    Dont have an account?<Link className='ms-2' to="/register"><b>Register</b></Link>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Login
