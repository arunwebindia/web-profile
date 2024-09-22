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
 
  let skillArray =[
    {
      name:'HTML',
      image:html,
      backgroundColor:'#ffa189'
    },
    {
      name:'CSS',
      image:css,
      backgroundColor:'#acc1ff'
    },
    {
      name:'React',
      image:react,
      backgroundColor:'#8ce6ff'
    },
    {
      name:'Node',
      image:node,
      backgroundColor:'#cbff93'
    }
  ]

  return (
    <Box sx={{ width: '100%',paddingBottom:"70px"}}>
    <Box className="mycontainer" p={4} backgroundColor="#f7f7ed" borderRadius={1}>
    <Grid container spacing={2} alignItems={"center"}>
          <Grid item sm={6}>
            <Box as="img" src={bannerImage} sx={{width:'60%',height:'auto'}}></Box>
          </Grid>
          <Grid item sm={6} container>
            <Grid item sm={12}>
            <Box sx={{fontSize:"28px",fontWeight:700,borderBottom:"3px solid #ff824d",display:'inline-block',py:2}}>My Skills</Box> 
              <Typography color={'#5c6569'} py={3}>Education is the most powerful weapon which you can use to change the world.</Typography>
            </Grid>
           {
            skillArray?.map((element,index)=>{
              return (
                <Grid item sm={6} key={index}>
                  <Card sx={{height:"100%",backgroundColor:element.backgroundColor}}>
                    <Box sx={{display:'flex',justifyContent:'start',gap:'10px',alignItems:'start',padding:'10px'}}>
                      <Box as='img' src={element.image}></Box>
                      <Box>{element.name}</Box>
                    </Box>
                  </Card>
                </Grid>
              )
            })
           }
          </Grid> 
      </Grid>
    </Box>
  </Box>
  )
}
