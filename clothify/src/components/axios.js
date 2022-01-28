import Axios from 'axios'

// import { useSelector } from 'react-redux'

// const user = useSelector(state=>state.user.currentUser);

const BASE_URL="http://localhost:5000/api"
const TOKEN=localStorage.getItem("token") 
console.log(`this is the token = ${TOKEN}`)
export const publicRequest= Axios.create({
 baseURL: BASE_URL
})


export const userRequest= Axios.create({
    baseURL: BASE_URL,
    headers: {"token":`Bearer ${TOKEN}`},
   })