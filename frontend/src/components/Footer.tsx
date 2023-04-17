import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", minHeight: "300px", backgroundColor: "#222222" }}>
            <Grid2 container justifyContent={'center'} sx={{ width: "80%" }} >
                <Grid2 lg={4} >
                    <h2 style={{ color: 'white', fontSize: "24px", fontStyle: 'italic' }}>ABOUT ROADYSPORT</h2>
                    <ul style={{ listStyle: "none" }}>
                        <li style={{ color: "white", marginBottom: "10px", fontSize: "17px" }}>About Us</li>
                        <li style={{ color: "white", marginBottom: "10px", fontSize: "17px" }}>Contact Us</li>
                        <li style={{ color: "white", marginBottom: "10px", fontSize: "17px" }}>Privacy Policy</li>
                        <li style={{ color: "white", marginBottom: "10px", fontSize: "17px" }}>Terms And Condition</li>
                        <li style={{ color: "white", marginBottom: "10px", fontSize: "17px" }}>Shipping Policy</li>
                    </ul>
                </Grid2>
                <Grid2 lg={4} >
                    <h2 style={{ color: 'white', fontStyle: 'italic' }}>FOLLOW US</h2>
                    <FacebookIcon style={{ color: 'white' }} />
                    <InstagramIcon style={{ color: 'white', marginLeft: "10px" }} />

                </Grid2>
                <Grid2 lg={4} >
                    <h2 style={{ color: 'white', fontStyle: 'italic' }}>STAY IN THE KNOW</h2>
                    <p style={{ color: "white" }}>
                        Promotions, new products and sales. Straight to your inbox.
                    </p>
                    <Grid2 container alignItems={'center'} >
                        <TextField size='small' sx={{ backgroundColor: "#1A1A1A",color:"white", border: "none",':hover':{'& .MuiOutlinedInput-root':{'& fieldset':{  borderColor: "white"}}}}} id="outlined-basic" placeholder='Your Email' variant="outlined" />
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", height: "38px", width: "30px" }}>
                            <KeyboardArrowRightIcon />
                        </div>
                    </Grid2>

                </Grid2>
            </Grid2>
        </Box>
    )
}
export default Footer