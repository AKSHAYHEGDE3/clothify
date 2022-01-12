import React from 'react'
import "./HomeBody.css"
import Card from './Card'
// import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';


const HomeBody = () => {
    return (
        <div style={{backgroundColor:"#f3f7f8"}}>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-6 mt-3 grid ">
                        <Card />
                    </div>

                    <div className="col-md-3 col-sm-4 col-6 mt-3 grid ">
                        <Card />
                    </div>

                    <div className="col-md-3 col-sm-4 col-6 mt-3 grid ">
                        <Card />
                    </div>

                    <div className="col-md-3 col-sm-4 col-6 mt-3 grid ">
                        <Card />
                    </div>
                   
                   
                </div>
            </div>
        </div>
    )
}

export default HomeBody
