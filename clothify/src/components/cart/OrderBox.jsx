import React,{useState,useEffect} from 'react'
import StripeCheckout from "react-stripe-checkout";
import { useNavigate} from "react-router-dom";
import { userRequest } from '../axios';


const OrderBox = ({cart}) => {
    
    const [stripeToken, setStripeToken] = useState(null);
    // const KEY = process.env.REACT_STRIPE_KEY
    const KEY ="pk_test_51JtvykSJAlTDVo3t11qzgOuHpkm0u8vG1sdztNYIKsoHNrO2Dt0fpmd58d4zpEkaOPTN3jq0n8JHl68qwKD7c5w600m26hnVl0"
    let navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
      };
      // console.log(stripeToken)
      useEffect(() => {
        const makePayment = async () => {
          try {
            const res = await userRequest.post("/payment", {
              token: stripeToken.id,
              amount: cart.total,
            });
            navigate("/success",{state:{stripeData:res.data,products:cart}});
            
            
          } catch(err) {
              console.log(err)
          }
        };
        stripeToken && makePayment();
      }, [stripeToken,cart.total]);

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
            <StripeCheckout
              name="Mugiwara Shop"
              image="https://images4.alphacoders.com/589/thumbbig-589781.webp"
              billingAddress
              shippingAddress
              description={`Your total is Rs ${cart.total + 50}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className='btn checkoutBtn'>Checkout</button>
            </StripeCheckout>
            

        </div>
    )
}

export default OrderBox
