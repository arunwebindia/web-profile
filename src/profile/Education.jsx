import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { education_obj } from "../utility_files/utility";
export default function Education() {
  
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', backgroundColor: '#ffd1c233', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 0' }} id="education">
      <Box className="section-wrapper">
        <Typography variant="h4" component="div" p={4} textAlign={'center'}>
          Education
        </Typography>
        <Grid container spacing={2}>
          {
            education_obj.map((elem, ind) => {
              return (
                <Grid item lg={6} key={ind} sx={{width:'100%'}}>
                  <Card>
                    <CardActionArea sx={{ display: 'flex' }} className="education-cards">
                      <CardMedia
                        component="img"
                        image={elem.collegeImage}
                        alt="green iguana"
                        sx={{ width: '40%', height: '100%' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.education}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.college}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.percentage}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Box>
  );
}
