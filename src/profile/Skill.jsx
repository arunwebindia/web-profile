import React from 'react'
import Cards from "../components/Cards";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { skillObj } from '../utility_files/utility';
import { Card, Typography } from '@mui/material';
import bannerImage from '../assets/image/banner_image.svg'
import html from '../assets/logo/html.svg'
import css from '../assets/logo/css.svg'
import react from '../assets/logo/react.svg'
import node from '../assets/logo/Vector.svg'
export default function Skill() {
 
  return (
    <Box sx={{ width: '100%',paddingBottom:"70px"}}>
    <Box className="mycontainer">
    <Grid container spacing={2}>
          <Grid item sm={6}>
            <Box as="img" src={bannerImage} sx={{width:'96%',height:'auto'}}></Box>
          </Grid>
          <Grid item sm={6} container spacing={2}>
            <Grid item sm={12}>
            <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block'}}>My Skills</Box> 
            </Grid>
            <Grid item sm={12}>
            <Typography color={'#5c6569'}>Education is the most powerful weapon which you can use to change the world.</Typography>
            </Grid>
           
                <Grid item sm={6} >
                  <Card sx={{height:"100%"}}>
                    <Box sx={{display:'flex',justifyContent:'start',gap:'10px',alignItems:'start',padding:'10px'}}>
                      <Box as='img' src={html}></Box>
                      <Box>HTML</Box>
                    </Box>
                  </Card>
                </Grid>
                <Grid item sm={6}>
                  <Card sx={{height:"100%"}}>
                    <Box sx={{display:'flex',justifyContent:'start',gap:'10px',alignItems:'start',padding:'10px'}}>
                      <Box as='img' src={css}></Box>
                      <Box>HTML</Box>
                    </Box>
                  </Card>
                </Grid>
                <Grid item sm={6}>
                  <Card sx={{height:"100%"}}>
                    <Box sx={{display:'flex',justifyContent:'start',gap:'10px',alignItems:'start',padding:'10px'}}>
                      <Box as='img' src={react}></Box>
                      <Box>HTML</Box>
                    </Box>
                  </Card>
                </Grid>
                <Grid item sm={6}>
                  <Card sx={{height:"100%"}}>
                    <Box sx={{display:'flex',justifyContent:'start',gap:'10px',alignItems:'start',padding:'10px'}}>
                      <Box as='img' src={node}></Box>
                      <Box>HTML</Box>
                    </Box>
                  </Card>
                </Grid>
           
          </Grid> 
      </Grid>
      {/* <Grid container spacing={2}>
        {
          skillObj.map((elem,ind)=>{
            return (
              <Grid lg={3} md={4} sm={6} key={ind}>
                <Cards src={elem.src} name={elem.name} progress={elem.progress}/>
            </Grid>
            )
          })
        }
      </Grid> */}
    </Box>
  </Box>
  )
}
