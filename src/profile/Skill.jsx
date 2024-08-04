import React from 'react'
import Cards from "../components/Cards";
import { Box } from "@mui/system";
import { shadows } from '@mui/system';
import Grid from "@mui/system/Unstable_Grid";
import html from '../assets/image/pngegg (1).png'
import css from '../assets/image/pngegg (2).png'
import js from '../assets/image/pngegg (3).png'
import rct from '../assets/image/pngegg (4).png'
import node from '../assets/image/pngegg (5).png'
import boot from '../assets/image/pngegg (6).png'
import mongo from '../assets/image/pngegg (7).png'
export default function Skill() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh',padding:'1.2rem 0', display: 'flex',backgroundColor:'#dcf7ff33', alignItems: 'center', justifyContent: 'center' }} id="skill">
    <Box className="section-wrapper">
      <Grid container spacing={2}>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={html} name="HTML" progress="90%"/>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={css} name="CSS" progress="90%"/>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={boot} name="BOOTSTRAP" progress="90%"/>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={js} name="JAVASCRIPT" progress="90%"/>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={rct} name="REACTJS" progress="90%"/>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={node} name="NODE" progress="90%"/>
        </Grid>
        <Grid lg={3} md={4} sm={6}>
        <Cards src={mongo} name="MONGO" progress="90%"/>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}
