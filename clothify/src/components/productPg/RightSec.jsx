import React from 'react'

const RightSec = ({product}) => {
    return (
        <div className="col-md-7 p-2 ps-3">
            <h3 className='text-center'>{product?.title.toUpperCase()}</h3>
            <p className="mt-4 mb-3 ms-3">{product?.desc}</p>
            <div className="dropdown ms-3">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Size
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/">S</a></li>
                    <li><a className="dropdown-item" href="/">M</a></li>
                    <li><a className="dropdown-item" href="/">xl</a></li>
                    <li><a className="dropdown-item" href="/">xxl</a></li>
                    <li><a className="dropdown-item" href="/">3xl</a></li>
                </ul>
            </div>
            <h5 className='ms-3 mt-5'><i className="fas fa-rupee-sign"></i> {product?.price}</h5>
            <p style={{ backgroundColor: "#388e3c", width: "70px", borderRadius: "5px" }} className="ms-3 mt-5 p-2">{product?.rating} <i style={{ color: "#f8e831" }} className="fas fa-star"></i></p>
        </div>
    )
}

export default RightSec
