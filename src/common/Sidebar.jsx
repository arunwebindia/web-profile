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

export default function Sidebar(props) {
   let [left,setMargin]= useState('0px');
   useEffect(()=>{
    if(props.open){
        setMargin('-250px')
       }
       else{
        setMargin('0')
       }
   },[props.open])
   
  return (
    <>
    <Box className="sidebar-wrapper" sx={{display:`${props.open ? 'none' : 'block'}`}}></Box>
      <Box
        sx={{
          width: "250px",
          position: "fixed",
          height: "100vh",
          minHeight: "400px",
         
          padding: "16px",
           color:'white',
        //    boxShadow:'10px 0 15px -7px lightgray',
          WebkitBackgroundSize:'100%',  
          backgroundImage:`url(${sidebarImage})`,
           
        }}
        className={props.open ? "sidebar active" : 'sidebar'}
      >
        
        <Box className='close' sx={{position:'absolute',left:'100%',top:"1%",background:'black',color:'white',width:'50px',height:'20px',zIndex:'55666'}} onClick={()=>props.setOpen(!props.open)}></Box>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              paddingBottom:'20px'
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
            <Typography sx={{fontSize:'12px',color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. cupiditate iusto fuga tenetur tempore.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
