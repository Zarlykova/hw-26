
  import { Grid , TextField, Button} from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { UserRole } from "../lib/constants/common"
import { signUp } from "../store/auth/authThunk"

export const SignUpPage=()=>{
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')

    const emailChangeHandler =(e)=>{
setEmail(e.target.value)
    }
    const passwordChangeHandler =(e)=>{
setPassword(e.target.value)
    }


    const nameChangeHandler =(e)=>{
setName(e.target.value)
    }

    const confirmChangeHandler =(e)=>{
    setConfirmPassword(e.target.value)
    }


const submitHandler=(e)=>{
e.preventDefault()
const data = {
    email,
    name,
    password,
    role:UserRole.ADMIN
}
dispatch(signUp(data))
}
    return(
        <Grid display='flex' justifyContent='center'marginTop={20}>


       
        <Grid sx={{background:'#ffff', width:'500px' , padding:'20px', }}
         
         >
            <form onSubmit={submitHandler}>
                <Grid 
                display='flex'
                flexDirection='column'>
                    <TextField value={name} onChange={nameChangeHandler} label='Name' />
                    <TextField value={email} onChange={emailChangeHandler} label='Email' />
                <TextField value={password} onChange={passwordChangeHandler} label='Password'/>
                <TextField value={confirmPassword} onChange={confirmChangeHandler} label='Confirm'/>
                <Button type="submit">Sign Up </Button>
                <Link to='/signin'>  Have an account </Link>
                </Grid>
               
            </form>
        </Grid>
         </Grid>
    )
}
    