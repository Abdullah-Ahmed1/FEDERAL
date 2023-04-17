import './jackets.css'
import Grid2 from '@mui/material/Unstable_Grid2'
const Jacket = ()=>{
    return(
        <Grid2 className = 'g' container  flexDirection={'column'} sx ={{marginRight:"1px",marginBottom:'1px'}} alignItems={'center'} justifyContent={'center'} >
            <div className='d' >
                View
            </div>
            <img className='jac'  src="https://res.cloudinary.com/dlgwvuu5d/image/upload/v1681719368/2_dpeajf-removebg-preview_dg4tmk.png" alt="jacket" />
            <Grid2 container flexDirection={'column'} alignItems={'center'}>
                <p style={{padding:"0px",margin:"0px"}}>R-Tech</p>
                <div style={{maxWidth:'200px'}}>
                <h3 style={{padding:"0px",margin:"0px",textAlign:"center"}}>Bela Mesh Pro Lady</h3>
                <p style={{padding:"0px",margin:"0px",textAlign:'center'}}>Rs 680</p>
                </div>
                
            </Grid2>
        </Grid2>
    )
}
export default Jacket