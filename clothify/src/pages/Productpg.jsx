import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LeftSec from '../components/productPg/LeftSec'
import Reviews from '../components/productPg/Reviews'
import RightSec from '../components/productPg/RightSec'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../components/axios'

const Productpg = () => {

    const params = useParams();
    const[product,setProduct]=useState(null)

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res = await publicRequest.get(`/product/getProduct/${params.id}`);
            setProduct(res.data)
            // console.log(product)
        }
        fetchProduct()
    },[params.id])

    return (
        <div>
            <Navbar />
            <div style={{backgroundColor:"white"}} className="container">
                <div className="row mt-4">
                    <LeftSec product={product} />
                    <RightSec product={product} />
                </div>
                <Reviews />
            </div>
        </div>
    )
}

export default Productpg
