import { Button, Grid, Typography } from '@mui/material'
import { Box, useMediaQuery } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import chetu_buildings from '../assets/image/chetu_buildings.jpg'
export default function CurrentWorking() {
    const navigate = useNavigate();
   let media = useMediaQuery("(max-width:576px)")
  return (
    <>
    <Box sx={{ width: '100%' ,padding:'70px 16px'}}>
      <Box className="mycontainer" >

        <Grid container spacing={6} justifyContent={'space-between'}>
        <Grid item sm={6}>
              <Box sx={{width:"100%",minHeight:'300px'}}>
                <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block'}}>Working at CHETU</Box> 
                <Typography sx={{textAlign:'start',marginTop:"1rem",color:'#5c6569'}}>
                  Passionate and ambitious WEB developer, always ready to learn new things.
                </Typography>
                  <Typography sx={{ padding: '.25rem 0',color:'#5c6569' }}>Chetu is a US-based software development company providing businesses worldwide with tailored software solutions from industry specialized developers.</Typography>
                  <Typography sx={{ padding: '.25rem 0' }}><span className='label'>My Role</span> : <span className='name'>React developer</span></Typography>
                  <Typography sx={{ padding: '.25rem 0' }}><span className='label'>Project</span> : <span className='name'>4+</span></Typography>
                  <Typography sx={{ padding: '.25rem 0',mb:2 }}><span className='label'>Experience</span> : <span className='name'>1+ year</span></Typography>
                  <Button variant='outlined' size='small' onClick={()=>navigate('https://www.chetu.com/')}>About company</Button>
              </Box>
          </Grid>
          <Grid item sm={6}>
              <Box sx={{width:"100%",aspectRatio:"auto",background:"lightBlue"}}>
                  <Box as="img" src={chetu_buildings} alt="" width={"100%"} height={"300px"} sx={{position:"relative",left:`${media ? "0" :'-20px'}`,top:"20px",objectFit:'cover'}}/>
              </Box>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
    </>
  )
}
