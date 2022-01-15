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
            state.products.push(action.payload);
            state.quantity=state.products.length;
            state.total=state.products.reduce((total,item)=>{
                return total+=item.total
            },0);
        },
        deleteProduct : (state,action)=>{
            state.products = state.products.filter(item=>item._id!==action.payload.id);
            state.quantity=state.products.length;
            state.total=state.products.reduce((total,item)=>{
                return total+=item.total
            },0);
        },
        emptyTheCart : (state,action)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        initializeCart:(state,action)=>{
            action.payload.products.map(item=>state.products.push(item));
            state.quantity=state.products.length;
            state.total=state.products.reduce((total,item)=>{
              return total+=item.total
         },0);
        }
    }
})

export const {addProduct,deleteProduct,emptyTheCart,initializeCart} = cartSlice.actions;
export default cartSlice.reducer;