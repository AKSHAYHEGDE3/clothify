import React from 'react'
import "./HomeBody.css"
import {Link} from "react-router-dom"

const Card = ({product}) => {
    return (
        <div>
            <Link style={{color:"black",textDecoration:"none"}} to={`/product/${product._id}`}><div className="box p-2">
                <img className="boxImg " src={product.img} alt="" />
                <p className="mt-2 text-center">{product.title}</p>
                <span style={{fontWeight:"bold",marginLeft:"5%"}}> <i className="fas fa-rupee-sign"></i>{product.price} </span><span style={{float:"right"}}> {product.rating} <i style={{color:"#f8e831"}} className="fas fa-star"></i></span>
            </div> </Link>
        </div>
    )
}

export default Card
