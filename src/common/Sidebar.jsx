import React from "react";
import { Box } from "@mui/system";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,

} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import sidebarImage from '../assets/image/sidebar.jpg';
import { Link } from "react-router-dom";
export default function Sidebar(props) {

  return (
    <>
      <Box className="sidebar-wrapper" sx={{ display: `${props.open ? 'none' : 'block'}` }} onClick={() => props.setOpen(!props.open)}></Box>
      <Box
        sx={{
          width: "250px",
          position: "fixed",
          height: "100vh",
          minHeight: "400px",
          padding: "16px",
          color: 'white',
          WebkitBackgroundSize: '100%',
          backgroundImage: `url(${sidebarImage})`,
          zIndex: '5'
        }}
        className={props.open ? "sidebar active" : 'sidebar'}
      >

        <Box className='close' sx={{ position: 'absolute', left: '100%', top: "0%", background: '#073a65', color: 'white', padding: '.5rem', fontSize: '35px' }} onClick={() => props.setOpen(!props.open)}>
          {props.open ? <span>&#8250;</span> : <span>&#8249;</span>
          }
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: '3rem',
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
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <a href={"#banner"}>
                      Home
                    </a>

                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <a href={"#about"}>
                      About
                    </a>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <a href={"#education"}>
                      Education
                    </a>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <a href={"#skill"}>
                      Skill
                    </a>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <a href={"#project"}>
                      Project
                    </a>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <a href={"#contact"}>
                      Contact us
                    </a>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",

            }}
            className="social-media"
          >

            <Link to={{ pathname: "https://www.facebook.com/hgsarun" }} target="_blank">
            <FacebookIcon />
            </Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/hgsarunsingh/" }} target="_blank">
            <LinkedInIcon />
            </Link>
            <Link to={{ pathname: "https://t.me/arunwebindia" }} target="_blank">
            <TelegramIcon />
            </Link>
            <Link to={{ pathname: "https://github.com/arunwebindia" }} target="_blank">
            <GitHubIcon />
            </Link>
          </Box>

        </Box>
      </Box>
    </>
  );
}
