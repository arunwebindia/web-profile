import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function CurrentProject() {
const navigate = useNavigate();
function handleProjec(){
  navigate('/project/1')
}
  return (
    <>
    <Box sx={{padding:"80px 16px",background:'lightgray'}}>
        <Box className="mycontainer">
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item sm={5}>
              <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block'}}>Visit my project</Box> 
              <Typography sx={{paddingTop:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam aut eligendi? Deleniti, amet temporibus! Maiores ab error natus? Asperiores, corporis sit! Magni explicabo possimus suscipit fugiat dolores eum aliquam.</Typography>
              <Button variant='outlined' sx={{marginTop:'30px'}} onClick={()=>navigate('/project')}>More project</Button>
            </Grid>
            <Grid item sm={4}>
            <Card sx={{ maxWidth: "100%",height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px' }}>
              <Box sx={{textAlign:'center',bgcolor:"#cfe1ff",minHeight:"150px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <svg width="102px" height="102px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#514d4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#656161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </Box>
            
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript compiler
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here you can find basic javascript online compiler that is  help to run your javascript code.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end'}}>
                <Button size="small" variant='contained' onClick={handleProjec}>Open</Button>
              </CardActions>
            </Card>
            </Grid>
            
          </Grid>
        </Box>
    </Box>
    </>
  )
}
