import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/reducers/userReducer";


const Navbar = () => {

  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);

  const handleLogout = ()=>{
     dispatch(deleteUser())
     localStorage.setItem("token","")
  }
  // console.log(cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">CLOTHIFY</a>
          <span><input type="search" className='search p-1 ps-3' placeholder='search' /></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link mt-2 mt-lg-0" to='/'>Home</Link>
                </li>
              {!user ?
                <li className="nav-item">
                  <Link className="nav-link mt-2 mt-lg-0" to='/login'>Login</Link>
                </li> :""
              }
              {user ?
              <li className="nav-item mt-2 mt-lg-0 mb-0">
                <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i>{cart.quantity>0?<sup className='badge'>{cart.quantity}</sup>:""}</Link>
              </li> : ""}
             { user ? <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} href="/">Logout</a>
              </li>:""}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
