import React, { useEffect } from "react";
import { Box } from "@mui/system";
import backgroundImage from '../assets/image/backgroundImage.PNG'
import Button from '@mui/material/Button';
export default function Home(props) {
    
  return (
    <Box
      sx={{ marginLeft: "250px", width: "calc(100% - 250px)",height:"100vh",overflow:'hidden',position:'relative',zIndex:-1}}
     
      className="home"
    >

            <Box sx={{position:'absolute',left:'50%',top:'50%',maxWidth:'700px',transform:'translate(-50%,-50%)',textAlign:'center',color:'white'}}>
                <Box>Hi I'am</Box>
                <Box sx={{fontSize:'32px',fontWeight:'Bold',margin:'1.2rem 0'}}>ARUN SINGH</Box>
                <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem quisquam natus beatae magni.
                </Box>
                <Box sx={{marginTop:'1.5rem'}}>
                <Button variant="contained" sx={{marginRight:'1rem'}}>Download </Button>
                <Button variant="outlined">contact</Button>
                </Box>
            </Box>
            <Box sx={{position:'absolute',right:'0px',bottom:'0px'}}>
                {/* <img src={man} alt="" /> */}
            
        </Box>
    </Box>
  );
}