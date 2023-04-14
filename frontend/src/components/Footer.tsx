import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2'

const Footer = ()=>{
    return(
        <Box sx={{minHeight:"300px",backgroundColor:"black"}}>
            <Grid2 container >
                <Grid2 lg = {4} sx = {{backgroundColor:"green"}} >
                    <h2 style={{color:'white'}}>col1</h2>
                </Grid2>
                <Grid2 lg = {4} sx = {{backgroundColor:"green"}} >
                    <h2 style={{color:'white'}}>col2</h2>
                </Grid2>
                <Grid2 lg = {4} sx = {{backgroundColor:"green"}} >
                    <h2 style={{color:'white'}}>col3</h2>
                </Grid2>
            </Grid2>
        </Box>
    )
}
export default Footer