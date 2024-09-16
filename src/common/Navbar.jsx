import React, { useState } from 'react'
import { Box, MenuList, MenuItem, Typography, Button } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import {
  ListItemButton,
} from "@mui/material";
import { nav } from '../utility_files/utility'
export default function Navbar({ setLogin, login,setLogInActive }) {
  const [mobNav, setmobNav] = useState(false);
  const [profile, setprofile] = useState(false)
  const navigate = useNavigate();
  function handleLogin(){

    navigate('/login');
    setLogInActive(true)
  }
  const handleProfile = () => {
    setprofile(!profile);
  }
  const handleLogout = () => {
    setprofile(!profile);
    setLogin(false);
    navigate('/');
  }
  return (
    <>
      <Box sx={{ background: "#FFF",boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"}}>
        <Box className="mycontainer">
          <MenuList className="navbar" sx={{ padding: '.6rem' ,background: "#FFF"}}>

            <Box class="sideBtn" onClick={() => setmobNav(true)} >
              <MenuIcon></MenuIcon>
            </Box>
            <Box className="menubar" sx={mobNav ? { left: 0 } : { left: '-130%' }}>
              <Button onClick={() => setmobNav(false)} sx={{ position: "absolute", top: '3%', right: '3%', display: mobNav ? "" : 'none' }}>
                <CloseIcon />
              </Button>
              {
                nav.map((elem, ind) => {
                  return (<MenuItem key={ind} sx={{ p: 0 }}>
                    <ListItemButton sx={{ p: 0 }} onClick={() => setmobNav(false)}>
                      <NavLink to={elem.path}>{elem.navname}</NavLink>
                    </ListItemButton>
                  </MenuItem>)
                })
              }
            </Box>
            <Box sx={{ position: 'relative' }}>
              {
                login ? <Avatar onClick={handleProfile}  alt="Arun singh" src="/static/images/avatar/1.jpg" sx={{cursor:'pointer'}}></Avatar> :
                  <Button variant="contained" startIcon={<AccountCircleIcon />} color='success' onClick={handleLogin}> Login
                  </Button>
              }
              {
                !profile ? "" :
                  <Box sx={{
                    position: 'absolute', top: '115%', right: '0px',
                    border: '.2px solid lightgray', boxShadow: 'small', background: '#eaf5ff', borderRadius: '5px', color: '#000' ,fontSize:'.8rem'
                  }}>

                    <List className='profile-navigation' >
                      <ListItem disablePadding>
                        <NavLink to={'/profile'}>
                          <ListItemButton onClick={()=>setprofile(false)}>
                            <ListItemIcon sx={{ minWidth: '0px' }}>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ padding: '0 8px', my: 0 }}>Profile</ListItemText>
                          </ListItemButton>
                        </NavLink>
                      </ListItem>
                      <ListItem disablePadding>
                        <NavLink to={'/admin'}>
                          <ListItemButton onClick={()=>setprofile(false)}>
                            <ListItemIcon sx={{ minWidth: '0px' }}>
                              <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ padding: '0 8px', my: 0 }}>Dashboard</ListItemText>
                          </ListItemButton>
                        </NavLink>
                      </ListItem>
                      <ListItem disablePadding sx={{px:"8px"}}>
                        <ListItemButton onClick={handleLogout} >
                          <ListItemIcon sx={{ minWidth: '0px', paddingRight: '10px'}}>
                            <LogoutIcon/>
                          </ListItemIcon>
                          <ListItemText sx={{my: 0 }} onClick={()=>navigate('/')}>Log out</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
              }

            </Box>
          </MenuList>
        </Box>
      </Box>
    </>
  )
}
