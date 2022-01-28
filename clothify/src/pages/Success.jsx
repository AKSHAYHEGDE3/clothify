import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Success = () => {

  const location = useLocation();
  const data = location.state.stripeData
  const cart = location.state.cart;

  console.log(data);

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
      {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`} */}
        Order has been created successfully
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  </div>;
};

export default Success;
