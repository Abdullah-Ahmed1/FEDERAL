import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const EmailVerification = ()=>{

    const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

    useEffect(() => {
        console.log("useEffect is callled-------------------*")
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:3000/auth/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				// console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, []);

    return(
       
            <div>
			{validUrl ? (
				<div >
					<div style={{backgroundColor:"transparent",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"100%",padding:"10px",height:'400px'}}>
					<h1 style={{color:"black"}}>Email verified successfully</h1>
					<Link   to="/login">
						<button  style={{width:"100px",height:"50px",cursor:"pointer",fontWeight:"bold",color:"white",backgroundColor:"black",fontSize:"15px"}} >Login</button>
					</Link>
                    </div>
                  
				</div>
                
			) : (
                <div style={{display:"flex",justifyContent:"center"}}>
                    <h1>404 Not Found</h1>
                </div>
				
			)}
		</div>
        
    )
}
export default  EmailVerification;