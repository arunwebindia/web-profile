
import { Grid, ListItemButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import bannerImage from '../assets/image/banner_image.svg'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <Box sx={{minHeight:"200px",background:'#f2f2f2',padding:'70px 10px'}}>
      <Box className="mycontainer" p={2}>
        <Grid container spacing={4}>
          <Grid item sm={2}>
            <Box as="img" src={bannerImage} sx={{width:'100%'}}></Box>
            
          </Grid>
          <Grid item sm={4}>
            <Box sx={{color:'#343939'}}>
              <Typography variant='h5' borderBottom={"4px solid orangered"} display={"inline-block"} mb={3}>ARUNWEB</Typography>
              <Typography fontSize={"14px"} lineHeight={2} opacity={'.3'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam aut eligendi? Deleniti, amet temporibus! Maiores ab error natus?</Typography>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <Box className="footer-menu">
              <Typography paddingLeft={2}>Menus</Typography>
              <ul>
                  <ListItemButton>
                    <NavLink to='/'>Home</NavLink>
                  </ListItemButton>
                  <ListItemButton>
                    <NavLink>About</NavLink>
                  </ListItemButton>
                  <ListItemButton>
                    <NavLink>JavaScript</NavLink>
                  </ListItemButton>
                  <ListItemButton>
                    <NavLink>CSS</NavLink>
                  </ListItemButton>
                  <ListItemButton>
                    <NavLink>Project</NavLink>
                  </ListItemButton>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box sx={{background:'#101111',color:'#ffffffab',letterSpacing:'1px',textAlign:'center',fontSize:'12px'}} p={2}>
    Copyright ©2024 Arunweb All Rights Reserved
    </Box>
    </>
  )
}
