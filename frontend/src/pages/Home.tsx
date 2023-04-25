// import Header from "../components/Header"
// import Navbar from "../components/Navbar"
import Grid2 from '@mui/material/Unstable_Grid2'
import axios from 'axios'
import { useEffect } from 'react'
import { CollectionList } from '../utils/CollectionList'


const  Home = () => {

  useEffect(() => {

    axios.get('http://localhost:3000/auth/test', {
      withCredentials: true,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })

    const urlParams = new URLSearchParams(window.location.search);
    const responseParam = urlParams.get('response');

    if (responseParam) {
      const response = JSON.parse(decodeURIComponent(responseParam));
      console.log("response---------->", response)
      // Do something with the response object here
    } else {
      // Handle the case where the response parameter is not present in the URL
      console.log("there is no reponse ")
    }
  }, [])
  return (
    <>
   
      <img src={'banner123.png'} alt="banner1" style={{width:"100%"}} />
      <Grid2 container flexDirection={"row"} justifyContent={'center'}  alignItems={'center'} sx ={{width:"100%",minHeight:{xs:"420vh",lg:'900px'}}}>
        <Grid2 container  flexDirection={"row"} sx = {{width: {xs : '97%',lg:"70%"},background:"transparent",position:"absolute",top:{xs :"150px",lg:"720px"} }}  justifyContent={'center'} >
          {
            CollectionList.map((item,index)=>{
              return(
                <Grid2 key={index} lg={4} xs = {12} sx = {{backgroundColor:"white",minHeight:"400px",border:" 1px solid black"}}  >
                  <h2 style={{textAlign:"center"}}>{item.name}</h2>
                </Grid2>
              )
            })
          }
        </Grid2>
        
      </Grid2>
    </>
  )
}
export default Home