import React from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import bannerImage from '../assets/image/banner_image.svg'
import arunresume from '../assets/image/arunresume.pdf'
import handleDownload from "../components/downloadImage";
export default function Banner() {
    function handleContact() {
        let a = document.createElement('a');
        a.setAttribute('href', '#contact');
        a.click();
    }

    return (
        <Box sx={{ backgroundColor: '#a6d3ffcc',padding: '1rem', minHeight:'500px',width:'100%',position:'relative' }} className="wave-bg">
            <Box className="mycontainer hero-section" sx={{ position: 'relative',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem'}} >
                <Box>
                    <Box sx={{ fontSize: '1.5rem' }}>Hi I'am</Box>
                    <Box sx={{ fontSize: '4rem', fontWeight: 'Bold',color: 'orange' }}>ARUN SINGH</Box>
                    <Box>Passionate and ambitious WEB developer, <br />always ready to learn new things.</Box>
                    <Box sx={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'start',  gap: '.5rem' }}>
                        <Button variant="contained" sx={{ cursor: 'pointer' }} onClick={() => handleDownload(arunresume)}>Download </Button>
                        <Button variant="outlined" sx={{ cursor: 'pointer' }} onClick={handleContact} >contact</Button>
                    </Box>
                </Box>
                <Box sx={{transform:'scale(.8)'}}>
                    <img src={bannerImage} alt=""  width={"100%"} height={"100%"}/>
                </Box>
                
            </Box>
            
        </Box>
    );
}
