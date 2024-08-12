import Grid from "@mui/system/Unstable_Grid";


import { Box } from "@mui/system";

import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import knit from '../assets/image/knit.jpeg'
import it from '../assets/image/it.jpg';
import chetuSkill from '../assets/image/chetuSkill.jpg'
import chetu from '../assets/image/chetu.jpg'

export default function Project() {
 
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', backgroundColor: '#ffd1c233', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 0' }} id="project">
      <Box className="section-wrapper">
        <Typography variant="h4" component="div" p={4} textAlign={'center'}>
          Experience
        </Typography>
        <Grid container spacing={2}>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{ display: 'flex' }} className="education-cards">
                <CardMedia
                  component="img"
                  image={knit}
                  alt="green iguana"
                  sx={{ width: '40%', height: '100%' }}
                />
                <CardContent>
                  <Typography sx={{ fontSize: '1.2rem', display: 'inline-block', fontWeight: '700' }}>
                    College Project
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', display: 'inline-block', fontWeight: '600', paddingBottom: '.8rem' }}>
                    Project Name: <Box sx={{ display: 'inline' }}>Pashu-Yug</Box>
                  </Typography>

                  <Typography variant="body2" pb={2}>
                    Used Technology: <Box variant='span'>HTML,CSS,React,Node and mongoDB</Box>
                  </Typography>
                  <i>From 1/08/2022 to 30/11/2022</i>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{ display: 'flex' }} className="education-cards">
                <CardMedia
                  component="img"

                  image={it}
                  alt="green iguana"
                  sx={{ width: '40%', height: '100%' }}
                />
                <CardContent>
                  <Typography sx={{ fontSize: '1.2rem', display: 'inline-block', fontWeight: '700' }}>
                    Swaroop Sharan infotech pvt Ltd Noida
                  </Typography>

                  <Typography variant="body2" py={2}>
                    Working on creating Web pages using HTML, CSS and JavaScript
                  </Typography>
                  <i>From 4/12/2022 to 30/05/2023</i>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{ display: 'flex' }} className="education-cards">
                <CardMedia
                  component="img"

                  image={chetuSkill}
                  alt="green iguana"
                  sx={{ width: '40%', height: '100%' }}
                />
                <CardContent>
                  <Typography sx={{ fontSize: '1.2rem', display: 'inline-block', fontWeight: '700' }}>
                    Chetu Skill Center
                  </Typography>


                  <Typography variant="body2" py={2}>
                    I got training on HTML, CSS, JavaScript, React JS and TypeScript
                  </Typography>
                  <i>From 4/6/2023 to 4/08/2023</i>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{ display: 'flex' }} className="education-cards">
                <CardMedia
                  component="img"

                  image={chetu}
                  alt="green iguana"
                  sx={{ width: '40%', height: '100%' }}
                />
                <CardContent>
                  <Typography sx={{ fontSize: '1.2rem', display: 'inline-block', fontWeight: '700' }}>
                    Chetu Company
                  </Typography>
                  <Typography sx={{ fontSize: '1rem', display: 'inline-block', fontWeight: '600', paddingBottom: '.8rem' }}>
                    Working as: <Box sx={{ display: 'inline' }}>React developer</Box>
                  </Typography>

                  <Typography variant="body2" pb={2}>
                    Worked on: <Box sx={{ display: "inline-block", fontSize: '1rem', fontWeight: '600' }}>14+ Project</Box>
                  </Typography>
                  <i>From 4/08/2023 to Till now</i>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
