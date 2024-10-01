import React from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import bannerImage from '../assets/image/banner_image.svg'
import arunresume from '../assets/image/arunresume.pdf'

import handleDownload from "./downloadImage";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../toastify/AlertToast";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    let navigate = useNavigate();
    function handleContact() {
        navigate('/contact')
    }

    return (
        <Box sx={{ padding: '1rem', minHeight: '300px', width: '100%', position: 'relative' }} className="wave-bg">
            <Box className="mycontainer hero-section" p={1}>
                <Box sx={{ position: 'relative', padding: '10px', borderRadius: '10px', color: 'white', backgroundColor: '#3e6cb5'}} >
                    <Grid container spacing={3} alignItems={'center'}>
                        <Grid item sm={8}>
                            <Box>
                                <Box sx={{ fontSize: '1.5rem' }}>Hi I'am</Box>
                                <Box sx={{ fontSize: '4rem', fontWeight: 'Bold', color: 'orange' }}>ARUN SINGH</Box>
                                <Box>Passionate and ambitious WEB developer, <br />always ready to learn new things.</Box>
                                <Box sx={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'start', gap: '.5rem' }}>
                                    <Button variant="contained" sx={{ cursor: 'pointer' }} onClick={() => handleDownload(arunresume)}>Download cv</Button>
                                    <Button variant="contained" sx={{ cursor: 'pointer' }} onClick={handleContact} >contact</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={4}>
                            <Box sx={{ transform: 'scale(.8)'}}>
                                <img src={bannerImage} alt="" width={"100%"} height={"100%"} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <ToastContainer />

        </Box>
    );
}
