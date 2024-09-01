import React, { useRef } from 'react'
import { Avatar, Box, Card, CardContent, Modal, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Grid from '@mui/material/Grid';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
// import Modal from '@mui/material/Modal';
// import logo from '../assets/logo/logo.png'
// import bg from '../assets/logo/bg.png'
// import dice from '../assets/logo/dice.gif'
import FileUploadIcon from '@mui/icons-material/FileUpload';
export default function AdminProfile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ref = useRef()
    const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', border: '2px solid #000', boxShadow: 24, width: '80%', height: '80%', p: 4, };
    const uploadfile = () => { ref.current.click(); }
    return (
        <>
            <Box className="mycontainer" p={1}>
                <Grid spacing={3} container>
                    <Grid item sm={4}>
                        <Box sx={{ width: '100%', mb: 2 }}>
                            <Card>
                                <Box sx={{ width: '100%', height: '150px', position: 'relative' }}>
                                    <Box as={'img'} width={"100%"} height="100%" src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                    </Box>
                                    <Typography sx={{ color: '#fff', fontSize: '12px', position: 'absolute', top: '30%', left: '10%' }}>lorem ipsum lorem ipsum</Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center', position: 'relative', transform: 'translate(0,-50%)' }}>
                                    <Avatar sx={{ margin: '0 auto', width: '100px', height: '100px' }}></Avatar>
                                </Box>
                                <Typography variant='h4' textAlign={"center"} position={'relative'} top={"-20px"} color='#39464b' fontWeight={700}>Arun Singh</Typography>
                                <Typography textAlign={'center'} position={"relative"} top={"-10px"} color='text.secondary'>Web developer</Typography>

                                <Box sx={{ textAlign: 'center' }}> <FacebookIcon /><WhatsAppIcon /> </Box>
                            </Card> </Box>
                        <Box sx={{ width: '100%', mb: 2 }}> <Card sx={{ p: 2 }}>
                            <Box> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, quos harum molestias nobis a repellat fugiat tempora saepe corrupti, sunt, voluptatum voluptate error incidunt? Fugit odit similique illo culpa deserunt. </Box>
                            <Grid container spacing={1} mt={3}>
                                <Grid item sm={6}>
                                    <Typography color="text.secondary" fontSize={'14px'}>Name</Typography>
                                    <Typography fontSize={'14px'}>Arun Singh</Typography>
                                </Grid>
                                <Grid item sm={6}>
                                    <Typography color="text.secondary">Email</Typography> <Typography fontSize={'14px'}>hgsarun@gmail.com</Typography>
                                </Grid>
                                <Grid item sm={6}> <Typography color="text.secondary">Phone</Typography> <Typography fontSize={'14px'}>464565546456</Typography>
                                </Grid>
                                <Grid item sm={6}> <Typography color="text.secondary">Phone</Typography> <Typography fontSize={'14px'}>464565546456</Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    <Typography color="text.secondary">Previour password</Typography> <Typography fontSize={'14px'}>464565546456</Typography>
                                </Grid>
                                <Grid item sm={6}> <Typography color="text.secondary">New password</Typography> <Typography fontSize={'14px'}>464565546456</Typography> </Grid>
                                <Grid item sm={6}> <Typography color="text.secondary">New password</Typography> <Typography fontSize={'14px'}>464565546456</Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        </Box>
                    </Grid>

                    <Grid item sm={8}>
                        <Card sx={{ p: 2, mb: 2 }}>
                            <Typography sx={{ background: 'lightgray', p: 1, mb: 2 }}>Personal</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <CardContent sx={{ border: '.2px solid lightgray', borderRadius: 1, textAlign: 'center', padding: '5px' }}> <AdfScannerIcon sx={{ width: '50px', height: '50px', color: '#202627' }}></AdfScannerIcon> <Typography>High School</Typography>
                                        <Box><PictureAsPdfIcon sx={{ cursor: 'pointer' }} onClick={handleOpen} /><ImageIcon sx={{ cursor: 'pointer' }} />
                                        </Box> </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card sx={{ p: 2, mb: 2 }}>
                            <Typography sx={{ background: 'lightgray', p: 1, mb: 2 }}>Education</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <CardContent sx={{ border: '.2px solid lightgray', borderRadius: 1, textAlign: 'center', padding: '5px' }}>
                                        <AdfScannerIcon sx={{ width: '50px', height: '50px', color: '#202627' }}></AdfScannerIcon>

                                        <Typography>High School</Typography>

                                        <Box><PictureAsPdfIcon sx={{ cursor: 'pointer' }} /><ImageIcon sx={{ cursor: 'pointer' }} />
                                        </Box>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card sx={{ p: 2, mb: 2 }}>
                            <Typography sx={{ background: 'lightgray', p: 1, mb: 2 }}>Upload file</Typography>
                            <Box sx={{ width: '100%', position: 'relative', height: '200px', border: "2px dashed gray", borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <FileUploadIcon sx={{ width: "120px", height: '120px', color: '#232525', border: '.4px solid gray', borderRadius: '50%', cursor: 'pointer' }} onClick={uploadfile} />
                                <Box sx={{ visibility: 'hidden', position: 'absolute' }}><input type="file" ref={ref} />
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box style={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"> Text in a modal </Typography>
                </Box>
            </Modal> </>)
} 