import React, { useEffect } from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
export default function Home() {

    return (
        <Box
            sx={{ marginLeft: "250px", width: "calc(100% - 250px)", height: "100vh", overflow: 'hidden', position: 'relative', zIndex: -1 }}
            className="home"
        >
            <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:"100vh",flexDirection:'column', textAlign: 'center', color: 'white' }}>
                <Box sx={{fontSize:'1.5rem'}}>Hi I'am</Box>
                <Box sx={{ fontSize: '4rem', fontWeight: 'Bold', margin: '1.2rem 0',color:'orange' }}>ARUN SINGH</Box>
                <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Box>
                <Box sx={{ marginTop: '1.5rem',display:'flex',justifyContent:'center',alignContent:'center',gap:'.5rem' }}>
                    <Button variant="contained" sx={{cursor:'pointer'}}>Download </Button>
                    <Button variant="outlined" sx={{cursor:'pointer'}} >contact</Button>
                </Box>
            </Box>
            
        </Box>
    );
}