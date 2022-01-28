import React from 'react'
import "./HomeBody.css"
import Card from './Card'
import { publicRequest } from "../axios"
import { useState, useEffect } from 'react'


const HomeBody = () => {

    const [products, setProducts] = useState([]);
    const [ogData, setOgData] = useState([]);
    const [defaultSort, setDefaultSort] = useState(true);
    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await publicRequest.get("/product/getAllProducts")
                // console.log(res.data)
                setProducts(res.data)
                setOgData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts();
    }, [])

    const handleSort = (e)=>{
        const sort = e.target.value
            if(sort==="htl"){
                setProducts(prev=>
                    [...prev].sort((a,b)=>b.price-a.price)
                    )    
            }
            else if(sort==="lth"){
                setProducts(prev=>
                    [...prev].sort((a,b)=>a.price-b.price)
                    )
            }
    }

    const filterColor = (e)=>{
        const color = e.target.value
        setProducts(ogData.filter(product=>product.color === color))
    }

    const clearFilter = ()=>{
        setProducts(ogData)
    }
    // console.log(products)
    return (
        <div style={{ backgroundColor: "#f3f7f8" }}>
            <div className='filter d-flex flex-row'>
                <select style={{width:"300px"}} className="form-select mx-3 mt-3" aria-label="Default select example" onChange={e=>handleSort(e)}>
                    <option selected="selected" hidden="hidden" >Sort According to Price</option>
                    <option value="lth">Low to High</option>
                    <option value="htl">High to low</option>
                </select>
                <select style={{width:"300px"}} className="form-select  mx-3 mt-3" aria-label="Default select example" onChange={e=>filterColor(e)}>
                    <option selected="selected" hidden="hidden" >Colors</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <button onClick={clearFilter} className='btn btn-danger mt-3 ms-5'>clear filters</button>
            </div>
            <hr style={{border:"5px"}}/>
            <div className="container py-3">
                <div className="row">
                    {
                        
                        products.map(product => {
                            return <>
                                <div key={product._id} className="col-md-3 col-sm-4 col-6 mt-3 grid ">
                                    <Card key={product._id} product={product} />
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
