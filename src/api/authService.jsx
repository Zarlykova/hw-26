import { axiosInstance } from "../config/axiosInstance"

const signUp = async(data)=>{
await axiosInstance.post('/auth/register',
data
)
}

export default {
    signUp,
}






// const signUp = (data)=>{
//  axios.post('http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1/auth/register', data)
// }

// export default {
//     signUp,
// }