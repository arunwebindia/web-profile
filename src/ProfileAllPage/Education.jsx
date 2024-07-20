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
              <CardActionArea sx={{display:'flex',height:'150px'}}>
                <CardMedia
                  component="img"
                  
                  image={aic}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{display:'flex',height:'150px'}}>
                <CardMedia
                  component="img"
                  
                  image={abic}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{display:'flex',height:'150px'}}>
                <CardMedia
                  component="img"
                  
                  image={au}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid lg={6}>
            <Card>
              <CardActionArea sx={{display:'flex',height:'150px'}}>
                <CardMedia
                  component="img"
                  
                  image={knit}
                  alt="green iguana"
                  sx={{width:'40%',height:'100%'}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
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
