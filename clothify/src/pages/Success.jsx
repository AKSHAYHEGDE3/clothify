import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { userRequest } from '../components/axios';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {emptyTheCart} from "../redux/reducers/cartReducer";


const Success = () => {

  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const [orderId, setOrderId] = useState(null);
  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch();

  
  useEffect(() => {
    console.log("run")
    const createOrder = async () => {
      try {
        console.log("")
        const res = await userRequest.post("/order/addOrder", {
          userId: user._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log(res.data._id)
        await userRequest.delete(`/cart/clearCart/${user._id}`)
        dispatch(emptyTheCart())
        setOrderId(res.data._id);

      } catch(err) {console.log(err)}
    };
    data && createOrder();
  }, [cart,data,user]);

  

  return <div>
      <Navbar />
      <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order ID is ${orderId}`
        : `Successfull. Your order is being prepared...`}
        
      <Link to="/"><button className='btn btn-success' style={{ padding: 10, marginTop: 20 }}>Continue Shoping</button></Link>
    </div>
  </div>;
};

export default Success;
