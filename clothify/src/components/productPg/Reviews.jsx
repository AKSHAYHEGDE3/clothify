import React, { useState } from 'react'
import { userRequest } from '../axios'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const Reviews = ({ product }) => {
    // console.log(product)
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        setReviews(product?.review)
    },[product])
    // console.log(reviews)
    const [newReview, setNewReview] = useState('')
    const user = useSelector(state => state.user.currentUser);

    const handleClick = async (e) => {
       
        e.preventDefault();
        try {
            const res = await userRequest.post('/product/addReview', {
                productId: product._id,
                senderName: user.username,
                text: newReview
            })
            setReviews([...reviews, res.data])
            setNewReview('')
            // console.log(reviews)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="reviewBox">
                <div style={{ textAlign: "center", marginBottom: "1.3%", fontSize: "2rem", color: "#2874f0" }}>Reviews</div>
                {
                    reviews?.length > 0 ?
                        reviews.map(review => {
                            return <React.Fragment key={review._id}>
                                <div style={{ borderTop: "1px solid #2874f0" }} className="row">
                                    <div className="col-2">
                                        <i style={{ fontSize: "3rem", color: "#f8e831" }} className="fas fa-user-circle mt-4 ms-sm-4"></i>
                                    </div>
                                    <div className="col-10 mt-2">
                                        <p>{review.senderName}</p>
                                        <p>{review.text}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        })
                        : ""
                }
                {/* <div style={{ borderTop: "1px solid #2874f0" }} className="row">
                    <div className="col-2">
                        <i style={{ fontSize: "3rem", color: "#f8e831" }} className="fas fa-user-circle mt-4 ms-sm-4"></i>
                    </div>
                    <div className="col-10 mt-2">
                        <p>name</p>
                        <p>jbdiwbdpw;fe[fpemelvdelv dv </p>
                    </div>
                </div> */}
                <div style={{ borderTop: "1px solid #2874f0" }} className="row">
                    <div className="col-9 mt-5">
                        <input value={newReview} onChange={e => setNewReview(e.target.value)} className="w-100" type="text" />
                    </div>
                    <div className="col-3 mt-5">
                        <button onClick={handleClick} className="btb btn-warning">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
