import { Button, Typography } from '@mui/material'
import { Box, useMediaQuery } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid/Grid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import chetu_buildings from '../assets/image/chetu_buildings.jpg'
export default function CurrentWorking() {
    const navigate = useNavigate();
   let media = useMediaQuery("(max-width:576px)")
  return (
    <>
    <Box sx={{ width: '100%' ,padding:'30px 0px'}}>
      <Box className="mycontainer" p={4}>

        <Grid container spacing={6} p={4} justifyContent={'space-between'} alignItems={'center'} backgroundColor="#e0f8ff" borderRadius={'3px'}>
        <Grid item sm={6}>
              <Box sx={{width:"100%"}}> 
                <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block',color: "#027a9e",padding:'10px 0'}}>Working at CHETU</Box> 
                <Typography sx={{textAlign:'start',marginTop:"1rem",color:'#5c6569'}}>
                  Passionate and ambitious WEB developer, always ready to learn new things.
                </Typography>
                  <Typography sx={{ padding: '.25rem 0',color:'#5c6569' }}>Chetu is a US-based software development company providing businesses worldwide with tailored software solutions from industry specialized developers.</Typography>
                  <Typography sx={{ padding: '.10rem 0' }}><span className='label'>My Role</span> : <span className='name'>React developer</span></Typography>
                  <Typography sx={{ padding: '.10rem 0' }}><span className='label'>Project</span> : <span className='name'>4+</span></Typography>
                  <Typography sx={{ padding: '.10rem 0',mb:2 }}><span className='label'>Experience</span> : <span className='name'>1+ year</span></Typography>
                  <Button variant='outlined' size='small' onClick={()=>navigate('https://www.chetu.com/')}>About company</Button>
              </Box>
          </Grid>
          <Grid item sm={6}>
              <Box sx={{width:"100%",    background: "#027a9e",borderRadius:'3px'}}>
                  <Box as="img" src={chetu_buildings} alt="" width={"100%"} height={"300px"} sx={{position:"relative",border:'5px solid #fff',borderRadius:'3px',left:`${media ? "0" :'-20px'}`,top:"20px",objectFit:'cover'}}/>
              </Box>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
    </>
  )
}
