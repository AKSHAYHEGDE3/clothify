import React from 'react'

const RightSec = ({product,setProductSize,productSize}) => {

    return (
        <div className="col-md-7 p-2 ps-3">
            <h3 className='text-center'>{product?.title.toUpperCase()}</h3>
            <p className="mt-4 mb-3 ms-3">{product?.desc}</p>
            <div className="dropdown ms-3">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {productSize}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><div onClick={()=>setProductSize('S')} className="dropdown-item" >S</div></li>
                    <li><div onClick={()=>setProductSize('M')} className="dropdown-item" >M</div></li>
                    <li><div onClick={()=>setProductSize('L')} className="dropdown-item" >L</div></li>
                    <li><div onClick={()=>setProductSize('xl')} className="dropdown-item" >xl</div></li>
                    <li><div onClick={()=>setProductSize('xxl')} className="dropdown-item" >xxl</div></li>
                    <li><div onClick={()=>setProductSize('9xl')} className="dropdown-item" >3xl</div></li>
                </ul>
            </div>
            <h5 className='ms-3 mt-5'><i className="fas fa-rupee-sign"></i> {product?.price}</h5>
            <p style={{ backgroundColor: "#388e3c", width: "70px", borderRadius: "5px" }} className="ms-3 mt-5 p-2">{product?.rating} <i style={{ color: "#f8e831" }} className="fas fa-star"></i></p>
        </div>
    )
}

export default RightSec
