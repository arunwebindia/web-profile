import React from 'react'
import Cards from "../components/Cards";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";

export default function Skill() {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="aboskillut">
    <Box className="section-wrapper">
      <Grid container >
        <Grid xs={12}>
        <Cards/>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}
