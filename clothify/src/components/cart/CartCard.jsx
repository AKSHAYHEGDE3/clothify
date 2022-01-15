import React from 'react'
import { useEffect,useState } from 'react'
import "./cart.css"
import { publicRequest,userRequest } from '../axios'
import {useDispatch} from "react-redux";
import { deleteProduct } from '../../redux/reducers/cartReducer'

const CartCard = ({item}) => {

    const [prod,setProd]= useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res = await publicRequest(`/product/getProduct/${item.productId}`)
            setProd(res.data)
        }
        fetchProduct();
    },[item])
   
    const handleRemove = async ()=>{
        try{
            await userRequest.delete(`/cart/deleteItem/${item._id}`)
        } catch(err){
            console.log(err)
        }
        dispatch(deleteProduct({id:item._id}))
    }
   
    return (
        <div className="row cartCard p-3 mt-2">
            <div className="col-3">
                <img src={prod?.img} alt="..." />
            </div>
            <div className="col-9">
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Product : </span>{prod?.title}</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>ID : </span>{prod?._id}</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Color : </span>{prod?.color}</p>
                <button onClick={handleRemove} className='btn btn-danger float-end'>remove</button>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Size : </span>{item?.size}</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Quantity : </span>{item.quantity}</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Total Price : </span>{`${prod?.price} * ${item.quantity} = ${item.total}`}</p>
            </div>
        </div>
    )
}

export default CartCard
