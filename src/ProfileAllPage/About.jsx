import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import { Typography } from '@mui/material';
import React from 'react'
import Button from '@mui/material/Button'
export default function About() {
  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#2d3a4c1c', }} id="about">

    
    <Box className="section-wrapper">
        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
            <Grid md={8}>
            <h1>About me</h1>
                <Typography sx={{padding:".8rem 0",fontSize:'24px'}}>I'm a<span> Web developer</span></Typography>
                <Typography sx={{color:'gray'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt excepturi sed quidem similique, amet perferendis consectetur velit. Numquam, illo eveniet error vel, veniam facilis nisi dolorum pariatur incidunt minus alias.</Typography>
            </Grid>
            <Grid md={4}>
            <Typography sx={{padding:'.5rem 0'}}><span className='label'>Name</span> : <span className='name'>Arun Singh</span></Typography>
            <hr />
            <Typography sx={{padding:'.5rem 0'}}><span className='label'>Email</span> : <span className='name'>hgsarun@gmail.com</span></Typography>
            <hr />

            <Typography sx={{padding:'.5rem 0'}}><span className='label'>Phone</span> : <span className='name'>+91 8601736322</span></Typography>
            <hr />
            <Typography sx={{padding:'.5rem 0'}}><span  className='label'>Experience</span> : <span className='name'>2+ year</span></Typography>
            <hr />
            <Button variant="contained" sx={{marginTop:'.5rem'}}>Download cv</Button>
            </Grid>
        </Grid>
    </Box>
    </Box>
  )
}