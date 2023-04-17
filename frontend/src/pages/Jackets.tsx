import Grid2 from '@mui/material/Unstable_Grid2'
import Jacket from '../components/Jacket'
const Jackets = ()=>{
    return(
        <div>
            <h1>Jackets page</h1>
        <Grid2 container justifyContent={'center'} alignItems={'center'} >
            <Grid2 lg = {4} >
                <Jacket/>
            </Grid2>
        </Grid2>
        </div>
    )
}
export default Jackets