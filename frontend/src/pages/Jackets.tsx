import Grid2 from '@mui/material/Unstable_Grid2'
import Jacket from '../components/products/Jacket'
import Box from '@mui/material/Box';
const Jackets = () => {
    return (
        <Box sx={{ marginBottom: "20px" }}>
            <h1 style={{ marginLeft: "120px" }}>Jackets</h1>
            <Grid2 container justifyContent={'center'} alignItems={'center'} >
                <Grid2 container sx={{ width: { xs: "100%", lg: "85%" } }} justifyContent={'center'} alignItems={'center'} columnSpacing={.1} rowSpacing={0} >
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2 >
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2 >
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2>    
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2>
                    <Grid2 xs={11}>
                        <Jacket />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}
export default Jackets