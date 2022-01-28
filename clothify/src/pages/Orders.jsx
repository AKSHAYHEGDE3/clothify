import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { userRequest } from '../components/axios';


const Orders = () => {
    const [orders, setOrders] = useState(null)
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        const getOrders = async()=>{
        try {
            const res = await userRequest.get(`/order/getOrders/${user?._id}`)
            setOrders(res.data)
        } catch (err) {
            console.log(err)
        }
    }
      getOrders()
    }, [user])
    return <div>
        <Navbar />
        <div className="container">
            <h2 className='text-center mt-3 mb-5'>My orders</h2>
            {
                orders?.length > 0 ?
                    orders.map(order => {
                        return <React.Fragment key={order._id}>
                            <div style={{
                                border: "1px solid black", display: "block", width: "350px", 
                            }} className='my-4 mx-auto p-2'>
                                <p><span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>OrderId : </span> {order._id}</p>
                                <p><span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Amount : </span> Rs {order.amount}</p>
                            </div>
                        </React.Fragment>
                    })
                    : <h2 style={{ marginTop: "15%" }} className='text-center'>No previous Orders</h2>
            }

        </div>
    </div>;
};

export default Orders;
