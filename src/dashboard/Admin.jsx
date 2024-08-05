import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Notification from './Notification'
import Question from './Question'
import StoreData from './StoreData'
import Grid from '@mui/system/Unstable_Grid';
import AllQustion from './AllQuestion';
import StoreDataa from '../components/StoreData';
export default function Admin() {
    return (
        <>
            <Box sx={{ padding: '.5rem',background:'lightgray',minHeight:'100vh' }}>
                <Box sx={{background:'#000',padding:'.5rem',display:'flex',justifyContent:'end',alignItems:'center',marginBottom:'.5rem',position:'sticky',top:'0rem'}}>
                <Avatar alt="Arun Singh" src="/static/images/avatar/1.jpg" />
                </Box>
                <Box>
                    <Grid container spacing={2} paddingBottom={"8px"}>
                        <Grid lg={3}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid lg={3}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid lg={3}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid lg={3}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid lg={8}>
                        <Typography sx={{padding:".25rem",fontSize:"20px",background:'#fff',marginBottom:'.25rem'}}>All messages</Typography>
                        <Notification></Notification>
                        </Grid>
                        <Grid lg={4}>
                        <Typography sx={{padding:".25rem",fontSize:"20px",background:'#fff',marginBottom:'.25rem'}}>Get solutions</Typography>
                        <Question />
                        </Grid>
                        <Grid lg={12}>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',marginBottom:'.25rem',padding:'.25rem'}}>
                                <Typography sx={{padding:".25rem",fontSize:"20px"}}>All programming</Typography>
                                <Button variant='contained' size='small'>Add</Button>
                            </Box>
                        <AllQustion></AllQustion>
                        </Grid>
                        <Grid lg={4}>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',marginBottom:'.25rem',padding:'.25rem'}}>
                                <Typography sx={{padding:".25rem",fontSize:"20px"}}>All store Data</Typography>
                                <div><Button variant='contained' size='small' sx={{marginRight:'5px'}}>Add text</Button><Button variant='contained' size='small' >Add File</Button></div>
                            </Box>
                        <StoreDataa/>
                        </Grid>
                        {/* <Grid lg={12}>
                            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',marginBottom:'.25rem',padding:'.25rem'}}>
                                <Typography sx={{padding:".25rem",fontSize:"20px"}}>All Save</Typography>
                                <Button variant='contained' size='small'>Add</Button>
                            </Box>
                        <StoreData />
                        </Grid> */}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
