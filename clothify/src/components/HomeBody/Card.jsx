import React from 'react'
import "./HomeBody.css"
import kurta from "../kurta.jpeg"

const Card = () => {
    return (
        <div>
            <div className="box p-2">
                <img className="boxImg " src={kurta} alt="" />
                <p className="mt-2 text-center">product name</p>
                <span style={{fontWeight:"bold",marginLeft:"5%"}}> <i className="fas fa-rupee-sign"></i>112 </span><span style={{float:"right"}}> 4.5 <i style={{color:"#f8e831"}} className="fas fa-star"></i></span>
            </div>
        </div>
    )
}

export default Card
