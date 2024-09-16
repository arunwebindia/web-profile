import React from 'react'
import Cards from "../components/Cards";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import Button from '@mui/material/Button';
import css from '../assets/logo/css.svg'
import js from '../assets/logo/Vector.svg'
import { Outlet, useNavigate } from 'react-router-dom';
export default function Skill() {
  let navigate = useNavigate();
  return (
    <Box sx={{py:4,minHeight:'100vh'}}>
    <Box className="mycontainer">
      <Grid container spacing={2} p={2}>
        <Grid lg={3} md={4} sm={6} xs={12}>
        <Cards src={js} name="Programming">
        <Button variant="contained" sx={{ cursor: 'pointer',margin:'0 auto',display:'block' }} onClick ={()=>navigate('/task/programming')}>Open </Button>
        </Cards>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
        <Cards src={js} name="Functionality">
        <Button variant="contained" sx={{ cursor: 'pointer',margin:'0 auto',display:'block' }}>Open </Button>
        </Cards>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
        <Cards src={css} name="CSS Design">
        <Button variant="contained" sx={{ cursor: 'pointer',margin:'0 auto',display:'block' }}>Open </Button>
        </Cards>
        </Grid>
      </Grid>
    </Box>
    <Outlet/>
  </Box>
  )
}
