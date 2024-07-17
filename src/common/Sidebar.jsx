import React from "react";

import { Box } from "@mui/system";

import {

    Typography,

    List,

    ListItem,

    ListItemButton,

    ListItemText,

    Avatar,

} from "@mui/material";



import FacebookIcon from "@mui/icons-material/Facebook";

import TwitterIcon from '@mui/icons-material/Twitter';

import GitHubIcon from '@mui/icons-material/GitHub';

export default function Sidebar() {

    return (

        <>

            <Box

                sx={{

                    width: "250px",

                    position: "fixed",

                    height: "100vh",

                    minHeight: "400px",



                    padding: "16px",

                    color: 'white',

                    boxShadow: '10px 0 15px -7px gray',

                    WebkitBackgroundSize: '100%',

                    backgroundImage: "url('https://refrigerationcompressorparts.net/wp-content/uploads/2019/03/solution-sidebar-background1.jpg)",



                }}

            >

                <Box

                    sx={{

                        display: "flex",

                        justifyContent: "center",

                        flexDirection: "column",

                        gap: '3rem',

                        alignItems: "center",

                        height: "100%",

                    }}

                >

                    <Box>

                        <Box

                            sx={{

                                width: "100px",

                                height: "100px",

                                borderRadius: "50%",

                                overflow: "hidden",

                                margin: "0 auto",

                            }}

                        >

                            <img

                                src="https://res.cloudinary.com/dzmrolrxy/image/upload/v1689236818/mypic/mypng.png"

                                alt=""

                                width={"100%"}

                                height={"100%"}

                                style={{ objectFit: "cover" }}

                            />

                        </Box>

                        <Typography sx={{ fontSize: "30px", fontWeight: "800" }}>

                            Arun Singh

                        </Typography>

                    </Box>

                    <Box>

                        <nav aria-label="sidebar">

                            <List>

                                <ListItem disablePadding>

                                    <ListItemButton>

                                        <ListItemText primary="Home" />

                                    </ListItemButton>

                                </ListItem>

                                <ListItem disablePadding>

                                    <ListItemButton>

                                        <ListItemText primary="Profile" />

                                    </ListItemButton>

                                </ListItem>

                                <ListItem disablePadding>

                                    <ListItemButton>

                                        <ListItemText primary="Project" />

                                    </ListItemButton>

                                </ListItem>

                                <ListItem disablePadding>

                                    <ListItemButton>

                                        <ListItemText primary="Contact" />

                                    </ListItemButton>

                                </ListItem>

                            </List>

                        </nav>

                    </Box>



                    <Box>

                        <Box

                            sx={{

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                gap: "10px",

                                paddingBottom: '20px'

                            }}

                        >

                            <Avatar>

                                <FacebookIcon />

                            </Avatar>

                            <Avatar>

                                <TwitterIcon />

                            </Avatar>

                            <Avatar>

                                <GitHubIcon />

                            </Avatar>

                        </Box>

                        <Typography sx={{ fontSize: '12px', color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. cupiditate iusto fuga tenetur tempore.</Typography>

                    </Box>

                </Box>

            </Box>

        </>

    );

}