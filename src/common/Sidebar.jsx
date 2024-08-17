import React from "react";
import { Box } from "@mui/system";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {nav,social_media} from '../utility_files/utility'
export default function Sidebar(props) {

  return (
    <>
      <Box className="sidebar-wrapper" sx={{ display: `${props.open ? 'none' : 'block'}` }} onClick={() => props.setOpen(!props.open)}></Box>
      <Box className={props.open ? "sidebar active" : 'sidebar'}>
        <Box className='close' onClick={() => props.setOpen(!props.open)}>
          {props.open ? <span>&#8250;</span> : <span>&#8249;</span>}
        </Box>
        <Box className="sidebar-container">
          <Box>
            <Box className="avatar-wrapper" >
              <img
                src="https://res.cloudinary.com/dzmrolrxy/image/upload/v1689236818/mypic/mypng.png"
                alt="arun singh image"
                className="my-avatar-image"
              />
            </Box>
            <Typography sx={{ fontSize: "30px", fontWeight: "800" }}>
              Arun Singh
            </Typography>
          </Box>
          <Box>
            <nav aria-label="sidebar">
              <List>
                {
                  nav.map((elem,ind)=>{
                    return(<ListItem disablePadding key={ind}>
                          <ListItemButton>
                            <NavLink to={elem.path}>{elem.navname}</NavLink>
                          </ListItemButton>
                          </ListItem>)
                  })
                }
              </List>
            </nav>
          </Box>
          <Box className="social-media" >
            {
            social_media.map((elem,ind)=>{
              return (
                <a href={elem.href} target="_blank" rel="noreferrer" key={ind}>
              {elem.icon}
            </a>
              )
            })
            }
          </Box>
        </Box>
      </Box>
    </>
  );
}
