import React from "react";
import { Box, lineHeight } from "@mui/system";
import Button from '@mui/material/Button';
import bannerImage from '../assets/image/banner_image.svg'
import arunresume from '../assets/image/arunresume.pdf'
import about2 from '../assets/image/about2.png'
import wave from '../assets/logo/wave.svg'
import DoneIcon from '@mui/icons-material/Done';
import handleDownload from "../components/downloadImage";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../toastify/AlertToast";
import { Typography } from "@mui/material";

export default function Banner() {
    function handleContact() {
        let a = document.createElement('a');
        a.setAttribute('href', '#contact');
        a.click();
    }

    return (
        <Box sx={{ padding: '1rem', minHeight:'400px',width:'100%',position:'relative' }} >
            <Box className="mycontainer hero-section" p={1}>
            <Box  sx={{ position: 'relative',padding:'10px',borderRadius:'10px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem'}} >
                <Box sx={{width:'80%'}}>
                    <Box sx={{ fontSize: '3rem' }}>Word's Best</Box>
                    <Box sx={{ fontSize: '3.5rem', fontWeight: 'Bold',color: 'orange',lineHeight:1.5 }}>Website Developer</Box>
                    <Box sx={{textTransform:'uppercase',lineHeight:2.5,color:"#0455d5"}}>Web Designer and web developer</Box>
                    <Typography fontSize={'13px'} lineHeight="1.5" color={'gray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, odio. Optio excepturi nihil animi culpa at enim. Quos est dolorum.</Typography>
                </Box>
                <Box sx={{display:"flex",gap:2,position:'relative'}}>
                    <Box>
                        <Box sx={{padding:"20px 0 0 0",textAlign:'center'}}>
                            <img src={wave} alt="" />
                        </Box>
                        <Box as={"img"} src={about2} sx={{width:'100%',borderRadius:"10px"}}>

                        </Box>
                    </Box>
                    <Box>
                        <Box as={"img"} src={about2} sx={{width:'100%',borderRadius:"10px"}}>
                            
                        </Box>
                        <Box sx={{padding:"20px 0 0 0",textAlign:'center'}}>
                            <img src={wave} alt="" />
                        </Box>
                    </Box>
                    <Box sx={{position:'absolute',backgroundColor:'#0455d5',right:'40%',bottom:'20%',padding:'20px',color:'white',fontSize:"12px",borderRadius:"5px",opacity:'.9'}}>
                        <Typography><DoneIcon></DoneIcon> API integration</Typography>
                        <Typography><DoneIcon></DoneIcon> Payment Gateways</Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <ToastContainer />
            
        </Box>
    );
}
