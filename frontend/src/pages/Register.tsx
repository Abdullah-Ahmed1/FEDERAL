import Grid2 from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Register = ()=>{
    return (
        <Grid2 container justifyContent={'center'} >
           <Grid2 container   flexDirection={'column'} alignItems={'center'} lg ={5} sx  = {{backgroundColor:'white'}}>
                <Grid2>
                    <h1 style={{fontStyle:"italic"}}>REGISTER</h1>
                </Grid2>
                <Grid2 lg = {10} sx = {{marginBottom:"10px"}}>
                <TextField id="outlined-basic" fullWidth variant="outlined" placeholder='First Name'/>
                </Grid2>
                <Grid2 lg = {10} sx = {{marginBottom:"10px"}}>
                <TextField id="outlined-basic" fullWidth variant="outlined" placeholder='Last Name'/>
                </Grid2>
                <Grid2 lg = {10} sx = {{marginBottom:"10px"}}>
                <TextField id="outlined-basic" fullWidth variant="outlined" placeholder='Email'/>
                </Grid2>
                <Grid2 lg = {10} sx = {{marginBottom:"10px"}}>
                <TextField id="outlined-basic" fullWidth  variant="outlined" placeholder='Password' />
                </Grid2>
                <Grid2 lg = {10} sx = {{marginBottom:"10px"}}>
                <TextField id="outlined-basic" fullWidth  variant="outlined" placeholder='Confirm Password' />
                </Grid2>
                <Grid2 lg = {10} >
                <Button fullWidth sx = {{height:"50px",backgroundColor:"#D8232F"}} variant="contained" color="success" >
                    Submit
                </Button>
                </Grid2>
                <Grid2 sx = {{padding:"20px 0px 0px 0px"}}>
                    <Typography sx = {{color:"#D8232F"}} >Forget your Password?</Typography>
                </Grid2>
                <Grid2 sx = {{padding:"20px 0px 20px 0px"}}>
                    <Typography sx = {{color:"#D8232F"}} >Create An Account</Typography>
                </Grid2>
           </Grid2>
        </Grid2>
    )
}
export default Register 