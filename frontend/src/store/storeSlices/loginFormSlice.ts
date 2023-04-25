import  {createSlice} from '@reduxjs/toolkit'

export interface LoginFormState  {
    email : String,
    password :String
}

const initialState : LoginFormState = {
    email :'',
    password :''
}

export const loginFormSlice = createSlice({
    name:'loginFormSlice',
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


export const {setEmail ,setPassword } = loginFormSlice.actions
export default loginFormSlice.reducer