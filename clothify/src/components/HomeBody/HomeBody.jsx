import React from 'react'
import "./HomeBody.css"
import Card from './Card'
import {publicRequest} from "../axios"
import { useState,useEffect } from 'react'


const HomeBody = () => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                const res = await publicRequest.get("/product/getAllProducts")
                // console.log(res.data)
                setProducts(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchProducts();
    },[])
    // console.log(products)
    return (
        <div style={{backgroundColor:"#f3f7f8"}}>
            <div className="container py-3">
                <div className="row">
                    {
                        products.map(product=>{
                            return <>
                               <div key={product._id} className="col-md-3 col-sm-4 col-6 mt-3 grid ">
                                  <Card product={product} />
                               </div>
                            </>
                        })
                    }
                    
                   
                </div>
            </div>
        </div>
    )
}

export default HomeBody
