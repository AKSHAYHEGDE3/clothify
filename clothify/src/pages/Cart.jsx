import React from 'react'
import CartCard from '../components/cart/CartCard'
import OrderBox from '../components/cart/OrderBox'
import Navbar from '../components/Navbar/Navbar'

const Cart = () => {
    return (
        <div className="container">
            <h2 className='text-center mt-3 mb-5'>Your Cart</h2>
             <Navbar />
            <CartCard />
            <OrderBox />
        </div>
    )
}

export default Cart
