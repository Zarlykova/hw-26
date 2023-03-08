import { createSlice } from "@reduxjs/toolkit";
import { UserRole } from "../../lib/constants/common";
import { signUp } from "./authThunk";

const initialState ={
    isAuthorized:false,
    token:'',
    user:{
        role:UserRole.GUEST,
       
        email:'',
        name:'',
    }


}

 export const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:(builder)=>{
builder.addCase(signUp.fulfilled ,(state , {payload} )=>{
    state.isAuthorized= true
    state.token=payload.token
    state.user={
       name: payload.user.name,
       email:payload.user.email,
       role:payload.user.role,
    
    }
})
    }
})
