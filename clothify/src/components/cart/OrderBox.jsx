import React from 'react'

const OrderBox = ({cart}) => {
    return (
        <div className="orderBox">
            <h2 className='text-center'>Order Summary</h2>
            <div className='mt-4'>
                <span className='ms-3 fs-4'>Subtotal</span><span style={{float:"right"}} className='me-3 fs-4'><i className="fas fa-rupee-sign"></i> {cart.total}</span>
            </div> 
            <div className='mt-4'>
                <span className='ms-3 fs-4'>Discount</span><span style={{float:"right"}} className='me-3 fs-4'>- <i className="fas fa-rupee-sign"></i> 100</span>
            </div>
            <div className='mt-4'>
                <span className='ms-3 fs-4'>Shipping</span><span style={{float:"right"}} className='me-3 fs-4'>+ <i className="fas fa-rupee-sign"></i> 50</span>
            </div>

            <hr />
            <div className='mt-4'>
                <span className='ms-3 fs-4 fw-bold'>Total</span><span style={{float:"right"}} className='me-3 fs-4 fw-bold'><i className="fas fa-rupee-sign"></i> {cart.total + 50}</span>
            </div>

            <button className='btn checkoutBtn'>Checkout</button>

        </div>
    )
}

export default OrderBox
