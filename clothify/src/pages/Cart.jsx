import React from 'react'
import CartCard from '../components/cart/CartCard'
import OrderBox from '../components/cart/OrderBox'
import Navbar from '../components/Navbar/Navbar'
import { useSelector } from 'react-redux'


const Cart = () => { 
    const cart = useSelector(state=>state.cart);
    // console.log(cart)

    return (
        <>
        <Navbar />
        <div className="container">
            <h2 className='text-center mt-3 mb-5'>Your Cart</h2>
            { cart.quantity > 0 ?
                <>
                    {
                        cart.products.map(item=>{
                            return <CartCard key={item._id} item={item}  />
                        })
                    }
                    <OrderBox cart={cart} /> 
                </> : 
                <h2 style={{marginTop:"15%"}} className='text-center'>Your Cart is Empty</h2>
            }
            
        </div>
        </>
    )
}

export default Cart
