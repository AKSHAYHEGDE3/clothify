import React from 'react'
import "./auth.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { publicRequest } from '../components/axios';
import {useDispatch} from "react-redux";
import {setUser} from "../redux/reducers/userReducer";
import { useNavigate} from "react-router-dom";
// import { useSelector } from 'react-redux'

const Signup = () => {

    const dispatch = useDispatch();
    const [details,setDetails] = useState({username:"",email:"",password:"",})
    const [error,setError]=useState('')
    let navigate = useNavigate();
    // const user = useSelector(state=>state.user.currentUser)

    const handleClick = async (e)=>{
        e.preventDefault();
        try{
            const res = await publicRequest.post('/auth/register',details)
            console.log(res.data)
            dispatch(setUser(res.data))
            localStorage.setItem("token",res.data.accessToken)
            setError('')
            navigate("/");
            // window.location.reload();
        } catch(err){
            setError(err.response.data)
        }
    }

   
    // console.log(user)
    return (
        <div className='cont'>
            <div className="wrap">
                <p className="title">Create An Account</p>
                {
                     error ? <p className='text-danger'>! {error}</p> : ''
                 }
                <form >
                    <input type="text" className="inpt" placeholder="username" onChange={e=>setDetails({...details,username:e.target.value})} />
                    <input type="email" className="inpt" placeholder="email" onChange={e=>setDetails({...details,email:e.target.value})} />
                    <input type="password" className="inpt" placeholder="password" onChange={e=>setDetails({...details,password:e.target.value})} />
                    <input type="password" className="inpt" placeholder="confirm password" />
                    <p className="aggrement">
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </p>
                    <button className='bttn' onClick={handleClick}>Create</button>
                    <p className='mt-4'>
                    Already have an account?<Link className='ms-2' to="/login"><b>Login</b></Link>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
