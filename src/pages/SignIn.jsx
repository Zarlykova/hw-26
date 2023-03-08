import { Grid , TextField, Button} from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export const SignInPage=()=>{

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const emailChangeHandler =(e)=>{
setEmail(e.target.value)
    }
    const passwordChangeHandler =(e)=>{
setPassword(e.target.value)
    }
const submitHandler=(e)=>{
e.preventDefault()
}
    return(
        <Grid display='flex' justifyContent='center'marginTop={20}>


       
        <Grid sx={{background:'#ffff', width:'500px' , padding:'20px', }}
         
         >
            <form onSubmit={submitHandler}>
                <Grid 
                display='flex'
                flexDirection='column'>
                    <TextField value={email} onChange={emailChangeHandler} label='Email' />
                <TextField value={password} onChange={passwordChangeHandler} label='Password'/>
                <Button >Sign In </Button>
                <Link to='/signup'> {`Don't have account ?`}</Link>
                </Grid>
               
            </form>
        </Grid>
         </Grid>
    )
}