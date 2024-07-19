import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import Cards from "../components/Cards";
import React from "react";

export default function Education() {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="education">
    <Box className="section-wrapper">
      <Grid container >
        <Grid xs={12}>
        <Cards/>
        </Grid>
      </Grid>
    </Box>
  </Box>
  );
}
