import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Grid2 from '@mui/material/Unstable_Grid2'
import axios from 'axios'
import {useEffect} from 'react'

const Home = ()=>{

  useEffect(()=>{
    
    axios.get('http://localhost:3000/auth/test',{
      withCredentials:true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
  }).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })

  const urlParams = new URLSearchParams(window.location.search);
const responseParam = urlParams.get('response');

      if (responseParam) {
        const response = JSON.parse(decodeURIComponent(responseParam));
        console.log("response---------->",response)
        // Do something with the response object here
      } else {
        // Handle the case where the response parameter is not present in the URL
        console.log("there is no reponse ")
      }
  },[])
    return(
        <Grid2 container flexDirection={'row'} sx = {{backgroundColor:"green"}}>
          home
            
            
        </Grid2>
    )
}
export default Home