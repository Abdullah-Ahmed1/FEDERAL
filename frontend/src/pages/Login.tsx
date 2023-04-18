import Grid2 from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import Tooltip from '@mui/material/Tooltip';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {


    return (
        <Grid2 container justifyContent={'center'} >
            <Grid2 container flexDirection={'column'} alignItems={'center'} lg={5} xs={11} sx={{ backgroundColor: 'white', marginTop: { xs: '100px', lg: "50px" },marginBottom:"50px"}}>
                <Grid2>
                    <h1 style={{ fontStyle: "italic" }}>LOGIN</h1>
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField id="outlined-basic" fullWidth variant="outlined" placeholder='Email' />
                </Grid2>
                <Grid2 lg={10} xs={11} sx={{ marginBottom: "10px" }}>
                    <TextField id="outlined-basic" fullWidth variant="outlined" placeholder='Password' />
                </Grid2>
                <Grid2 lg={10} xs={11} >
                    <Button fullWidth sx={{ height: "50px", backgroundColor: "#D8232F", '&:hover': { backgroundColor: "#D8232F" } }} variant="contained" color="success" >
                        Submit
                    </Button>
                </Grid2>
                <Grid2 sx={{ padding: "20px 0px 0px 0px" }}>
                    <Tooltip title="login with google">
                        <a href="http://localhost:3000/auth">
                            <GoogleIcon sx={{ color: "#D8232F", cursor: "pointer" }} />
                        </a>
                    </Tooltip>
                </Grid2>
                <Grid2 sx={{ padding: "20px 0px 0px 0px" }}>
                    <Typography sx={{ color: "#D8232F" }} >Forget your Password?</Typography>
                </Grid2>
                <Grid2 sx={{ padding: "20px 0px 20px 0px" }}>
                    <Link to={'/register'} style={{ textDecoration: "none" }}>
                        <Typography sx={{ color: "#D8232F" }} >Create An Account</Typography>
                    </Link>

                </Grid2>
            </Grid2>
        </Grid2>
    )
}
export default Login 