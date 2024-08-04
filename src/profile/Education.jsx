import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import Cards from "../components/Cards";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import aic from '../assets/image/aic.jpg'
import abic from '../assets/image/abic.jpg'
import au from '../assets/image/au.png'
import knit from '../assets/image/knit.jpeg'

export default function Education() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex',backgroundColor:'#ffd1c233', alignItems: 'center', justifyContent: 'center',padding:'1.5rem 0' }} id="education">
      <Box className="section-wrapper">
      <Typography variant="h4" component="div" p={4} textAlign={'center'}>
                    Education
                  </Typography>
        <Grid container spacing={2}>
        <Grid lg={6}>
            <Card>
              <CardActionArea sx={{display:'flex'}} className="education-cards">
                <CardMedia
                  component="img"
                  
                  image={aic}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   High School
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Adarsh inter college mahuabagh ghazipur uttar pradesh.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   64%
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{display:'flex'}} className="education-cards">
                <CardMedia
                  component="img"
                  
                  image={abic}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Intermediate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Angelo Bengali Inter College Civil Line Prayagraj Uttar Pradesh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  70%
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
            <CardActionArea sx={{display:'flex',justifyContent:'start'}} className="education-cards">
                <CardMedia
                  component="img"
                  
                  image={au}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bachelor of Science
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  University of Allahabad prayagran Uttar Pradesh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  55%
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{display:'flex'}} className="education-cards">
                <CardMedia
                  component="img"
                  
                  image={knit}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                   Master of Computer application
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Kamla Nehru Institute of Technology Sultanpur Uttar Pradesh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    86%
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
