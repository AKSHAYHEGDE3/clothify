import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState:{
        currentUser : null
    },
    reducers:{
        setUser:(state,action)=>{
            state.currentUser = action.payload;
        },
        deleteUser:(state,action)=>{
            state.currentUser = null;
        }
    }
})

export const {setUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;