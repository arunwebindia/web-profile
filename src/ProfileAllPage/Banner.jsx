import React from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import arunresume from '../assets/image/arunresume.pdf'
import handleDownload from "../components/downloadImage";
export default function Banner() {
    function handleContact(){
        let a = document.createElement('a');
        a.setAttribute('href','#contact');
        a.click();
    }
 
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: "100%", flexDirection: 'column', textAlign: 'center', color: 'white' }} id="banner" className="homee">
            <Box sx={{ fontSize: '1.5rem' }}>Hi I'am</Box>
            <Box sx={{ fontSize: '4rem', fontWeight: 'Bold', margin: '1.2rem 0', color: 'orange' }}>ARUN SINGH</Box>
            <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Box>
            <Box sx={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', alignContent: 'center', gap: '.5rem' }}>
                <Button variant="contained" sx={{ cursor: 'pointer' }} onClick={()=>handleDownload(arunresume)}>Download </Button>
                <Button variant="outlined" sx={{ cursor: 'pointer' }} onClick={handleContact} >contact</Button>
            </Box>
        </Box>
    );
}
