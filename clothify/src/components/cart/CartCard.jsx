import React from 'react'
import kurta from "../kurta.jpeg"
import "./cart.css"

const CartCard = () => {
    return (
        <div className="row cartCard p-3 mt-2">
            <div className="col-3">
                <img src={kurta} alt="..." />
            </div>
            <div className="col-9">
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Product : </span>kurta</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>ID : </span>138995490</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Color : </span>red</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Size : </span>xl</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Quantity : </span>2</p>
                <p><span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Price : </span>30</p>
            </div>
        </div>
    )
}

export default CartCard
