import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import sidebarImage from '../assets/image/sidebar.jpg';
import { NavLink } from "react-router-dom";
export default function Sidebar(props) {   
  return (
    <>
    <Box className="sidebar-wrapper" sx={{display:`${props.open ? 'none' : 'block'}`}} onClick={()=>props.setOpen(!props.open)}></Box>
      <Box
        sx={{
          width: "250px",
          position: "fixed",
          height: "100vh",
          minHeight: "400px", 
          padding: "16px",
          color:'white',
          WebkitBackgroundSize:'100%',  
          backgroundImage:`url(${sidebarImage})`,
           
        }}
        className={props.open ? "sidebar active" : 'sidebar'}
      >
        
        <Box className='close' sx={{position:'absolute',left:'100%',top:"0%",background:'#073a65',color:'white',padding:'.5rem',fontSize:'35px'}} onClick={()=>props.setOpen(!props.open)}>
            {props.open ? <span>&#8250;</span> : <span>&#8249;</span>
                }
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
           gap:'3rem',
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <img
                src="https://res.cloudinary.com/dzmrolrxy/image/upload/v1689236818/mypic/mypng.png"
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Typography sx={{ fontSize: "30px", fontWeight: "800" }}>
              Arun Singh
            </Typography>
          </Box>
          <Box>
            <nav aria-label="sidebar">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Project" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          
          <Box>
          
            <Typography sx={{fontSize:'12px',color:"gray",textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. cupiditate iusto fuga tenetur tempore.</Typography>
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              
            }}
          >
            <Avatar>
              <FacebookIcon />
            </Avatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
