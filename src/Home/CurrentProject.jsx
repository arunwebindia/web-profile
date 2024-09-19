import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import js from '../assets/image/js.png'
export default function CurrentProject() {
const navigate = useNavigate();
function handleProjec(){
  navigate('/project/1')
}
  return (
    <>
    <Box sx={{padding:"16px"}}>
      <Box className="mycontainer" p={1}>
      <Box  p={4} backgroundColor={'#fffdf3'} borderRadius={'5px'}>
          <Grid container spacing={2} justifyContent={"space-between"} alignItems={'center'}>
            <Grid item sm={5}>
              <Box sx={{fontSize:"28px",fontWeight:700,color:'#897514',padding:'10px 0',borderBottom:"3px solid #ff824d",display:'inline-block'}}>Visit my project</Box> 
              <Typography sx={{paddingTop:'20px',color:'#888888'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam aut eligendi? Deleniti, amet temporibus! Maiores ab error natus? Asperiores, corporis sit! Magni explicabo possimus suscipit fugiat dolores eum aliquam.</Typography>
              <Button variant='contained' sx={{marginTop:'30px'}} onClick={()=>navigate('/project')}>More project</Button>
            </Grid>
            <Grid item sm={4}>
            <Card sx={{ maxWidth: "300px",height:"100%",display:'flex',flexDirection:'column',justifyContent:"start",gap:'10px' }}>
              <Box sx={{textAlign:'center',padding:'10px',bgcolor:"#cfe1ff",minHeight:"auto",display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img src={js} alt="" width={'50%'} height={'auto'}/>
              </Box>
            
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript compiler
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Here you can find basic javascript online compiler that is  help to run your javascript code.
                </Typography>
              </CardContent>
              <CardActions sx={{flexGrow:'1',alignContent:'end',textAlign:'end'}}>
                <Button size="small" variant='outlined' onClick={handleProjec} sx={{width:'100%'}}>Open</Button>
              </CardActions>
            </Card>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
        
    </Box>
    </>
  )
}
