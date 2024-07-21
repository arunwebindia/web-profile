import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import { Typography } from '@mui/material';
import React from 'react'
import Button from '@mui/material/Button'
export default function About() {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="contact">
      <Box className="section-wrapper">
        <Grid container spacing={6} justifyContent={'center'} className="contact-us">
          <Grid lg={7} sx={{ display: 'flex', alignItems: "start", flexDirection: 'column', justifyContent: 'center', gap: ".8rem" }}>
            <h1>About me</h1>
            <Typography sx={{ padding: ".2rem 0", fontSize: '24px' }}>I'm a<span> Web developer</span></Typography>
            <Typography sx={{textAlign:'start'}}>

            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>

          <Grid md={5} textAlign={"start"} >
            <Box sx={{minWidth:"280px"}}>
            <Typography sx={{ padding: '.5rem 0' }}><span className='label'>Name</span> : <span className='name'>Arun Singh</span></Typography>
            <hr />
            <Typography sx={{ padding: '.5rem 0' }}><span className='label'>Email</span> : <span className='name'>hgsarun@gmail.com</span></Typography>
            <hr />

            <Typography sx={{ padding: '.5rem 0' }}><span className='label'>Phone</span> : <span className='name'>+91 8601736322</span></Typography>
            <hr />
            <Typography sx={{ padding: '.5rem 0' }}><span className='label'>Experience</span> : <span className='name'>2+ year</span></Typography>
            <hr />
            <Button variant="contained" sx={{ marginTop: '.5rem' }}>Download cv</Button>
            </Box>
            
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}