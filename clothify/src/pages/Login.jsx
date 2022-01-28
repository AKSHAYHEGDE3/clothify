import React from 'react'
import { Link } from 'react-router-dom'
import "./auth.css"
import { useState } from 'react';
import { publicRequest } from '../components/axios';
import {useDispatch} from "react-redux";
import {setUser} from "../redux/reducers/userReducer";
import { useNavigate} from "react-router-dom";

const Login = () => {

    const [loginDetails,setLoginDetails] = useState({email:"",password:""})
    const [err,setErr]=useState('');
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleClick = async (e)=>{
        e.preventDefault();
        try{
            const res = await publicRequest.post("/auth/login",loginDetails);
            console.log(res.data)
            dispatch(setUser(res.data))
            localStorage.setItem("token",res.data.accessToken)
            setErr('')
            navigate("/");
            window.location.reload();
        }catch(err){
            setErr(err.response.data)
        }
    }

    return (
    <div className='cont'>
        <div className="wrap">
            <p className="title">Sign in</p>
            {
                err ? <p className='text-danger'>! {err}</p> : ''
            }
            <form >
                <input type="email" className="inpt" placeholder="email" onChange={e=>setLoginDetails({...loginDetails,email:e.target.value})} />
                <input type="password" className="inpt" placeholder="password" onChange={e=>setLoginDetails({...loginDetails,password:e.target.value})} />
                <button className='bttn mt-3' onClick={handleClick}>Login</button>
                <p className='mt-4'>
                    Dont have an account?<Link className='ms-2' to="/register"><b>Register</b></Link>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Login
