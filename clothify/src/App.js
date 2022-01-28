import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Productpg from "./pages/Productpg";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux";
import { userRequest } from '../src/components/axios';
import {setUser} from "./redux/reducers/userReducer";
import {initializeCart} from "./redux/reducers/cartReducer"
import Success from "./pages/Success";

function App() {

  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const verifyUser = async ()=>{
      // console.log("run")
      try{
         const res = await userRequest.get('/auth/verifyUser')
        //  console.log(res)
         dispatch(setUser(res.data))
      } catch(err){
        console.log(err)
      }
    }
    verifyUser();
  },[dispatch])

  useEffect(()=>{
    const getItem = async()=>{
       try{
        const getItems = await userRequest.get(`/cart/getCartItems/${user._id}`)
        console.log(getItems.data)
        dispatch(initializeCart({products:getItems.data}))
       } catch(err){
         console.log(err)
       }
    }
    getItem();
  },[dispatch,user])



  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path="/register" element={user?<Home />:<Signup />} />
              <Route path="/login" element={user?<Home />:<Login />} /> 
              <Route exact path="/" element={<Home />} />
              <Route path="/product/:id" element={user?<Productpg />:<Login />} />
              <Route path="/cart" element={user?<Cart />:<Login />} />
              <Route path="/success" element={user?<Success />:<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
