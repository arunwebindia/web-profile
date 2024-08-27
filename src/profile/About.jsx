import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import { Typography } from '@mui/material';
import React from 'react'
import Button from '@mui/material/Button'
import arunresume from '../assets/image/arunresume.pdf'
import handleDownload from "../components/downloadImage";
import about2 from '../assets/image/about2.png'
import { lightBlue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: '100%' ,margin:'70px 0',padding:'0 1rem'}}>
      <Box className="mycontainer" >

        <Grid container spacing={6} justifyContent={'space-between'}>
          <Grid item sm={4}>
              <Box sx={{width:"100%",aspectRatio:"auto",background:"lightBlue"}}>
                  <Box as="img" src={about2} alt="" width={"100%"} height={"100%"} sx={{position:"relative",left:"20px",top:"20px"}}/>
              </Box>
          </Grid>
          <Grid item sm={7}>
              <Box sx={{width:"100%",height:'300px'}}>
                <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block'}}>Know about me</Box> 
                <Typography sx={{textAlign:'start',marginTop:"1rem"}}>
                  Passionate and ambitious WEB developer, always ready to learn new things.
                </Typography>
                <Grid container spacing={2} mt={2}>
                  <Grid item sm={6}>
                    <Typography><span className='label'>Name</span> : <span className='name'>Arun Singh</span></Typography>
                  </Grid>
                  <Grid item sm={6}>
                  <Typography><span className='label'>Email</span> : <span className='name'>hgsarun@gmail.com</span></Typography>

                  </Grid>
                  <Grid item sm={6}>
                  <Typography><span className='label'>Phone</span> : <span className='name'>+91 8601736322</span></Typography>
                  </Grid>
                  <Grid item sm={6}>
                  <Typography><span className='label'>Experience</span> : <span className='name'>2+ year</span></Typography>
                  </Grid>
                  <Grid item sm={12} sx={{mt:2}}>
                  <Button variant="contained" sx={{marginRight:'10px'}} onClick={()=>handleDownload(arunresume)}>Download cv</Button>
                  <Button variant='outlined' onClick={()=>navigate('/about')}>Read more</Button>
                  </Grid>
                </Grid>
              </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}