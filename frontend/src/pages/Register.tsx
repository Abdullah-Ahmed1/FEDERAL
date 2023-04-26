import Grid2 from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail,setPassword,setFirstName,setLastName,setConfirmPassword } from '../store/storeSlices/registerFormSlice';
import type { RootState } from '../store/store';

const Register = () => {
    const dispatch = useDispatch()
    const form = useSelector((state: RootState) => state.registerForm);
    return (
        
        <Grid2 container justifyContent={'center'} >
            <Grid2 container flexDirection={'column'} alignItems={'center'} lg={5} xs={11} sx={{ backgroundColor: 'white', marginTop: { xs: '100px', lg: '50px' } ,marginBottom:"50px"}}>
                <Grid2>
                    <h1 style={{ fontStyle: "italic" }}>REGISTER</h1>
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField value={form.firstname} onChange={(e)=> dispatch(setFirstName(e.target.value))}  id="outlined-basic" fullWidth variant="outlined" placeholder='First Name' />
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField value={form.lastname} onChange={(e)=> dispatch(setLastName(e.target.value))} id="outlined-basic" fullWidth variant="outlined" placeholder='Last Name' />
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField value={form.email} onChange={(e)=> dispatch(setEmail(e.target.value))} id="outlined-basic" fullWidth variant="outlined" placeholder='Email' />
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField value={form.password} onChange={(e)=> dispatch(setPassword(e.target.value))} id="outlined-basic" fullWidth variant="outlined" placeholder='Password' />
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField value={form.confirmpassword} onChange={(e)=> dispatch(setConfirmPassword(e.target.value))} id="outlined-basic" fullWidth variant="outlined" placeholder='Confirm Password' />
                </Grid2>
                <Grid2 lg={10} xs={11} >
                    <Button fullWidth sx={{ height: "50px", backgroundColor: "#D8232F", '&:hover': { backgroundColor: "#D8232F" } }} variant="contained" color="success" >
                        Submit
                    </Button>
                </Grid2>
                <Grid2 sx={{ padding: "20px 0px 0px 0px" }}>
                    <Link to={'#'} style={{ textDecoration: "none" }} >
                        <Typography sx={{ color: "#D8232F" }} >Forget your Password?</Typography>
                    </Link>
                </Grid2>
                <Grid2 sx={{ padding: "20px 0px 20px 0px" }}>
                    <Link to='/login' style={{ textDecoration: "none" }} >
                        <Typography sx={{ color: "#D8232F" }} >Already have an account</Typography>
                    </Link>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}
export default Register 