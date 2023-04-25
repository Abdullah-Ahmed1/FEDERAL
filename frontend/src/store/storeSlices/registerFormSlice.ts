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
        setEmail :(state,action)=>{
            state.email = action.payload
        },
        setPassword :(state,action)=>{
            state.password = action.payload
        }
        
    }
})


export const {setEmail ,setPassword } = RegisterFormSlice.actions
export default RegisterFormSlice.reducer