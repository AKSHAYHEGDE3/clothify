import React from 'react'
import "./productpg.css"
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { addProduct } from '../../redux/reducers/cartReducer';




const LeftSec = ({product}) => {

    const [quantity,setQuantity]=useState(0)
    const dispatch = useDispatch();
    

    const addToCart = ()=>{
        dispatch(addProduct({...product,quantity}))
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
