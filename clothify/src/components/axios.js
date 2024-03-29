// import Axios from 'axios'


// const BASE_URL="http://localhost:5000/api"
// const TOKEN=localStorage.getItem("token") 
// console.log(`this is the token = ${TOKEN}`)
// export const publicRequest= Axios.create({
//  baseURL: BASE_URL
// })


// export const userRequest= Axios.create({
//     baseURL: BASE_URL,
//     headers: {"token":`Bearer ${TOKEN }`},
//    })

import Axios from 'axios'


const BASE_URL="https://clothify-server-rt6v.onrender.com/api"

export const publicRequest= Axios.create({
 baseURL: BASE_URL
})
// window.axios.defaults.headers.common['x-auth-token'] = 'Bearer ' + localStorage.getItem('token')

export const userRequest= Axios.create({
    baseURL: BASE_URL,
   
   
   })

   userRequest.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.token = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );