import  {createSlice} from '@reduxjs/toolkit'

export interface RegisterFormState  {
    // firstname: String,
    username: String,
    email : String,
    password :String,
    confirmpassword:String
}

const initialState : RegisterFormState = {
    // firstname: '',
    username: '',
    email :'',
    password :'',
    confirmpassword:''

}

export const RegisterFormSlice = createSlice({
    name:'registerForm',
    initialState,
    reducers:{
        // setFirstName :(state,action)=>{
        //     state.firstname = action.payload
        // },
        setUsername : (state,action)=>{
            state.username = action.payload
        },
        setEmail :(state,action)=>{
            state.email = action.payload
        },
        setPassword :(state,action)=>{
            state.password = action.payload
        },
        setConfirmPassword :(state,action)=>{
            state.confirmpassword = action.payload
        }
        
    }
})


export const {setUsername,setEmail ,setPassword,setConfirmPassword } = RegisterFormSlice.actions
export default RegisterFormSlice.reducer