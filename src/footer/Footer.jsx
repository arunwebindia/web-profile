
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import bannerImage from '../assets/image/banner_image.svg'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <Box sx={{minHeight:"100px",background:'#8b8b8b'}}>
      <Box className="mycontainer" p={2}>
        <Grid container spacing={4}>
          <Grid item sm={2}>
            <Box as="img" src={bannerImage} sx={{width:'100%'}}></Box>
            
          </Grid>
          <Grid item sm={4}>
            <Box sx={{color:'#fff'}}>
              <Typography>ArunWeb</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores totam aut eligendi? Deleniti, amet temporibus! Maiores ab error natus?</Typography>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <Box sx={{color:'#fff'}}>
              <Typography>Menus</Typography>
              <MenuItem sx={{display:"flex",flexDirection:'column',alignItems:'start'}}>
                    <ListItemButton sx={{ p: 0 }}>
                      <NavLink>Home</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0 }}>
                      <NavLink>Home</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0 }}>
                      <NavLink>Home</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0 }}>
                      <NavLink>Home</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={{ p: 0 }}>
                      <NavLink>Home</NavLink>
                    </ListItemButton>
              </MenuItem>
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
