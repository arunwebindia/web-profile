import React, { useState } from 'react'
import {Box, MenuList, MenuItem, Typography, Button} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    ListItemButton,
  } from "@mui/material";
import {nav} from '../utility_files/utility'
export default function Navbar({setLogin,login}) {
    const [mobNav,setmobNav] = useState(false);
    const navigate = useNavigate();
    function handleLogin(){
      if(login){
        setLogin(false);
      }
      else{
        setLogin(true);
        navigate('/login');
      }
      
    }
  return (
    <>
    <Box  sx={{background:"#1976d2"}}>
        <Box className="mycontainer">
        <MenuList className="navbar" sx={{padding:'.6rem'}}>

            <Box class="sideBtn" onClick={()=>setmobNav(true)} >
                <MenuIcon></MenuIcon>
            </Box>
            <Box className="menubar" sx={mobNav ? {left:0} : {left:'-130%'}}>
                <Button onClick={()=>setmobNav(false)} sx={{position:"absolute",top:'3%',right:'3%',display:mobNav ? "" :'none'}}>
                    close
                </Button>
                {
                  nav.map((elem,ind)=>{
                    return(<MenuItem key={ind} sx={{p:0}}>
                          <ListItemButton sx={{p:0}} onClick={()=>setmobNav(false)}>
                            <NavLink to={elem.path}>{elem.navname}</NavLink>
                          </ListItemButton>
                          </MenuItem>)
                  })
                } 
            </Box>
            <Button variant="contained" startIcon={<AccountCircleIcon />} color='success' onClick={handleLogin}>
             
              {
                login ? 'Logout' : 'Login'
              }
            </Button>
        </MenuList>
        </Box>
    </Box>
    </>
  )
}
