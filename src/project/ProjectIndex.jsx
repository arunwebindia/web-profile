import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid/Grid'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export default function ProjectIndex() {
  const navigate = useNavigate()
  const handleProject =(e)=>{
    navigate('/project/1')
  }
  const handleProject2 =(e)=>{
    navigate('/project/2')
  }

  const handleProject3=()=>{
    navigate('/project/3')
  }
  const handleProject4=()=>{
    navigate('/project/4')
  }
  const handleProject5=()=>{
    navigate('/project/5')
  }
  const handleProject6=()=>{
    navigate('/project/6')
  }
  return (
    <>
      <Box sx={{ width: '100%',paddingBottom:"70px",minHeight:'100vh'}}>
        <Box className="mycontainer" sx={{padding:'10px'}}>

        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ width:'100%',height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px' }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
            
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  JavaScript compiler
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here you can find basic javascript online compiler that is  help to run your javascript code.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',alignItems:'end'}}>
                <Button size="small" variant='contained' onClick={handleProject}>Open</Button>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ width:'100%',height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px'  }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
            
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  HTML/CSS/JS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here  you can writ HTML with CSS  and Javascript and also display web view of your html code.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',alignItems:'end'}}>
                <Button size="small" variant='contained' onClick={handleProject2}>Open</Button>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ width:'100%',height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px'  }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
            
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Online Donation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here i created as dummy online payment system for online donate.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',alignItems:'end'}}>
                <Button size="small" variant='contained' onClick={handleProject3} >Donate</Button>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ width:'100%',height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px'  }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Email Extractor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here i created online Email Extractor find your email from your sentence.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',alignItems:'end'}}>
                <Button size="small" variant='contained' onClick={handleProject4} >Find Email</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ width:'100%',height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px'  }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Type Master
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here i created Type master.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',alignItems:'end'}}>
                <Button size="small" variant='contained' onClick={handleProject5} >Open</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ width:'100%',height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px'  }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Memory Game
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here i created online Memory game.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',alignItems:'end'}}>
                <Button size="small" variant='contained' onClick={handleProject6} >Open</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  )
}
