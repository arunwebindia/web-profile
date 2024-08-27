import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { education_obj } from "../utility_files/utility";

export default function Education() {
  
  return (
    <Box sx={{ width: '100%',padding: '70px 1rem', }} id="education">
      <Box className="mycontainer">

        <Grid container spacing={2}>
          <Grid item md={5}>
            <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block'}}>My education</Box> 
            <Typography color={'#5c6569'} mt={2}>Education is the most powerful weapon which you can use to change the world.</Typography>
          </Grid>
          
            {/* <Grid item md={7}> */}
              <Grid container item width={"100%"} md={7}>
              {
              education_obj.map((elem, ind) => {
                return(
                <Grid item sm={6} width={"100%"}>
                  <Card sx={{width:'100%',height:'100%'}}>
                    <CardActionArea sx={{width:'100%',height:'100%'}}>
                      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'start',gap:'1rem',height:'100%'}}>
                        <Box sx={{fontSize:'20px',color:'#1976d2',lineHeight:'1.1',display:'flex',justifyContent:'start',gap:'10px'}} >
                         <SchoolIcon></SchoolIcon><Typography>{elem.education}</Typography> 
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                          {elem.college}
                        </Typography>
                        <Typography fontWeight={600} sx={{flexGrow:1}}>
                          <Box sx={{marginTop:'auto'}}>

                          {elem.percentage}
                          </Box>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                )
              })
              }
              </Grid>
            {/* </Grid> */}
          
          </Grid>
   
        {/* <Grid container spacing={2}>
        
          {
            education_obj.map((elem, ind) => {
              return (
                
                <Grid item md={6} key={ind} sx={{width:'100%'}}>
                  <Card>
                    <CardActionArea sx={{ display: 'flex' }} className="education-cards">
                      <CardMedia
                        component="img"
                        image={elem.collegeImage}
                        alt="green iguana"
                        sx={{ width: '40%', height: '100%' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.education}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.college}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.percentage}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid> */}
      </Box>
    </Box>
  );
}
