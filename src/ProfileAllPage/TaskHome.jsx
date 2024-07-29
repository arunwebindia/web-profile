import React from 'react'
import Cards from "../components/Cards";
import { Box } from "@mui/system";
import { shadows } from '@mui/system';
import Grid from "@mui/system/Unstable_Grid";
import html from '../assets/image/pngegg (1).png'
import Button from '@mui/material/Button';
import css from '../assets/image/pngegg (2).png'
import js from '../assets/image/pngegg (3).png'
import { useNavigate } from 'react-router-dom';
export default function Skill() {
  let navigate = useNavigate();
  return (
    <Box sx={{ width: '100%', minHeight: '100vh',padding:'1.2rem 0', display: 'flex',backgroundColor:'#dcf7ff33', alignItems: 'center', justifyContent: 'center' }} id="skill">
    <Box className="section-wrapper">
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={js} name="Programming">
        <Button variant="contained" sx={{ cursor: 'pointer',margin:'0 auto',display:'block' }} onClick ={()=>navigate('/programming')}>Open </Button>
        </Cards>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={js} name="Functionality">
        <Button variant="contained" sx={{ cursor: 'pointer',margin:'0 auto',display:'block' }}>Open </Button>
        </Cards>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={css} name="CSS Design">
        <Button variant="contained" sx={{ cursor: 'pointer',margin:'0 auto',display:'block' }}>Open </Button>
        </Cards>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}
