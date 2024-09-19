import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import { Typography } from '@mui/material';
import React from 'react'
import Button from '@mui/material/Button'
import arunresume from '../../assets/image/arunresume.pdf'
import handleDownload from '../../components/downloadImage';
import about2 from '../../assets/image/about2.png'
import { lightBlue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: '100%'}}>
      <Box className="mycontainer" p={3}>

        <Grid container spacing={4} borderRadius={2} justifyContent={'space-between'} alignItems={'center'} backgroundColor={"#eefbff"}>
          <Grid item sm={4}>
            <Box sx={{position:'relative'}}>
              <Box sx={{width:"100%",height:'100%',background:"#027a9e",position:'absolute',left:0,top:0,borderRadius:'5px'}}>
              </Box>
                  <Box as="img" src={about2} alt="" width={"100%"} height={"100%"} sx={{position:"relative",left:"15px",top:"15px",borderRadius:'5px',boxShadow:"medium",border:'4px solid white'}}/>
            </Box>
              
          </Grid>
          <Grid item sm={7}>
              <Box sx={{width:"100%",}}>
                <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",color: "#027a9e",display:'inline-block'}}>Know about me</Box> 
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