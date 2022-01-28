import React from 'react'
import "./productpg.css"
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { addProduct } from '../../redux/reducers/cartReducer';
import {userRequest} from "../axios";
import { useSelector } from 'react-redux';



const LeftSec = ({product,productSize}) => {

    const [quantity,setQuantity]=useState(0)
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user.currentUser)
    

    const addToCart = async()=>{
        //dispatch(addProduct({...product,quantity}))
        try{
            console.log("add to cart");
            const res = await userRequest.post("/cart/addToCart",{
                userId:user._id,
                productId:product._id,
                quantity:quantity,
                size:productSize,
                total:quantity*product.price
            })
            dispatch(addProduct(res.data))
        }catch(err){
            console.log(err)
        }
    }
    
    return (
        <div className="col-md-5 p-2 py-4 lftsec ">
            <img src={product?.img} alt={product?.title} />
            <div className="addProd row mt-3">
                <div onClick={e=>{setQuantity(quantity+1)}} style={{backgroundColor:"green"}} className="col-2 mx-2"><i className="fas fa-plus"></i></div>
                <div className="col-2 mx-2">{quantity}</div>
                <div onClick={e=>{if(quantity>0)setQuantity(quantity-1)}} style={{backgroundColor:"red"}} className="col-2 mx-2"><i className="fas fa-minus"></i></div>
                <button onClick={addToCart} className="btn" style={{backgroundColor:"orange",textAlign:"center", width:"200px",marginTop:"4%",borderRadius:"15px",padding:"1%"}}>ADD TO CART</button>
            </div>
        </div>
        
    )
}

export default LeftSec
