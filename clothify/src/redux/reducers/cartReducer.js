import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct : (state,action)=>{
            state.quantity -= 1;
            state.products = state.products.filter(item=>item._id!==action.payload.id);
            state.total -= action.payload.price * action.payload.quantity;
        },
        emptyTheCart : (state,action)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const {addProduct,deleteProduct,emptyTheCart} = cartSlice.actions;
export default cartSlice.reducer;