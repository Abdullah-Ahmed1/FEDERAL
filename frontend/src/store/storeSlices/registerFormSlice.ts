import  {createSlice} from '@reduxjs/toolkit'

export interface RegisterFormState  {
    firstname: String,
    lastname: String,
    email : String,
    password :String,
    confirmpassword:String
}

const initialState : RegisterFormState = {
    firstname: '',
    lastname: '',
    email :'',
    password :'',
    confirmpassword:''

}

export const RegisterFormSlice = createSlice({
    name:'registerForm',
    initialState,
    reducers:{
        setFirstName :(state,action)=>{
            state.firstname = action.payload
        },
        setLastName : (state,action)=>{
            state.lastname = action.payload
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


export const {setFirstName,setLastName,setEmail ,setPassword,setConfirmPassword } = RegisterFormSlice.actions
export default RegisterFormSlice.reducer