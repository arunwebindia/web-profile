import React from 'react'
import Cards from "../components/Cards";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { skillObj } from '../utility_files/utility';
export default function Skill() {
 
  return (
    <Box sx={{ width: '100%', minHeight: '100vh',padding:'1.2rem 0', display: 'flex',backgroundColor:'#dcf7ff33', alignItems: 'center', justifyContent: 'center' }} id="skill">
    <Box className="section-wrapper">
      <Grid container spacing={2}>
        {
          skillObj.map((elem,ind)=>{
            return (
              <Grid lg={3} md={4} sm={6} key={ind}>
                <Cards src={elem.src} name={elem.name} progress={elem.progress}/>
            </Grid>
            )
          })
        }
      </Grid>
    </Box>
  </Box>
  )
}
