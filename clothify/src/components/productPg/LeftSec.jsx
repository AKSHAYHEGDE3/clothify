import React from 'react'
import "./productpg.css"

const LeftSec = () => {
    return (
        <div className="col-md-5 p-2 py-4 lftsec ">
            <img src="https://rukminim1.flixcart.com/image/580/696/kfpq5jk0-0/kurta/e/g/i/m-kast109pp-majestic-man-original-imafw49u8vyzygpn.jpeg?q=50" alt="" />
            <div className="addProd row mt-3">
                <div style={{backgroundColor:"green"}} className="col-2 mx-2"><i class="fas fa-plus"></i></div>
                <div className="col-2 mx-2">3</div>
                <div style={{backgroundColor:"red"}} className="col-2 mx-2"><i class="fas fa-minus"></i></div>
                <button className="btn" style={{backgroundColor:"orange",textAlign:"center", width:"200px",marginTop:"4%",borderRadius:"15px",padding:"1%"}}>ADD TO CART</button>
            </div>
        </div>
        
    )
}

export default LeftSec
