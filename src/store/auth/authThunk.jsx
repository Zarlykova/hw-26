import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/authService";

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload , {rejectWithValue})=> {
try{
 const {data} = await authService.signUp(payload)

 localStorage.setItem('AUTH' ,JSON.stringify(data.data))

 return data.data ;

}catch (error) {
return rejectWithValue(error)
}
    }
)