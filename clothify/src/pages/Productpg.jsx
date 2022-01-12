import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LeftSec from '../components/productPg/LeftSec'
import Reviews from '../components/productPg/Reviews'
import RightSec from '../components/productPg/RightSec'

const Productpg = () => {
    return (
        <div>
            <Navbar />
            <div style={{backgroundColor:"white"}} className="container">
                <div className="row mt-4">
                    <LeftSec />
                    <RightSec />
                </div>
                <Reviews />
            </div>
        </div>
    )
}

export default Productpg
