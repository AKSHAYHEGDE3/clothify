import React from 'react'
import HomeBody from '../components/HomeBody/HomeBody'
import Navbar from '../components/Navbar/Navbar'
// import { useSelector } from 'react-redux'

const Home = () => {
    // const user = useSelector(state=>state.user)
    // console.log(user)
    return (
        <div>
            <Navbar />
            <HomeBody />
        </div>
    )
}

export default Home
