import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Notification from './Notification'
import Question from './Question'
import Grid from '@mui/system/Unstable_Grid';
import AllQustion from './AllQuestion';
import StoreDataa from '../components/StoreData';
import Textarea from "@mui/joy/Textarea";
import Modal from '@mui/material/Modal';
import axios from 'axios';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TerminalIcon from '@mui/icons-material/Terminal';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Input } from '@mui/material';

export default function Admin({ setLogin }) {
    const [getdata, setgetdata] = useState([])
    const [updatagetdata, setupdatadata] = useState(false)
    const [contactData, setContactData] = useState({});
    const [deletstor, setdeletestore] = useState(false)
    const [deletreply, setdeletereply] = useState(false)
    const [storeValue, setStoreValue] = useState('')
    const [open, setOpen] = useState(false);
    const [addprogram, setaddprogram] = useState({ status: false });
    const [addfile, setAddFile] = useState({ status: false });
    const [fileDes,setFileDes] = useState('')
    const [programming, setprogramming] = useState({ question: '', example: '', answer: '' })
    const [allreply, setallreply] = useState(null)
    useEffect(() => {
        const getDataa = async () => {
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/store`);
            setgetdata(res.data)
        }
        getDataa();
    }, [updatagetdata, deletstor])
    useEffect(() => {
        const getDataa = async () => {
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/programming`);
            setallreply(res.data)
        }

        getDataa();
    }, [deletreply])
    const handleClose = () => { setOpen(false) };

    const handleSaveStore = async (e) => {
        e.preventDefault();
        const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/store`, { data: storeValue });
        setupdatadata(!updatagetdata);
        handleClose()
    }
    const handleProgrammingdata = async (e) => {
        e.preventDefault()
        const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/programming`, programming);
        console.log(resp.data,'get data')
        setaddprogram({ status: !addprogram });
    }
 const handlefileupload = async(e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/store`, fd);

    // fetch('http://localhost:8080/',{
    //     method:'POST',
    //     body:fd
    // }).then((res)=>console.log(res))
    setAddFile({status:false})
 }
    return (
        <>
            <Box sx={{ padding: '.5rem', background: 'lightgray', minHeight: '100vh' }}>
                <Box className="mycontainer" px={1}>
                    <Box>
                        <Grid container spacing={1} paddingBottom={"8px"}>
                            <Grid item md={4} xs={12} container>
                                <Grid item xs={6}>
                                    <Card sx={{ Width: "100%" }}>
                                        <CardContent textAlign={'center'} >
                                            <Box sx={{
                                                display: 'block', margin: '0 auto', background: 'lightgray', borderRadius: '50%', aspectRatio: '1/1', width: "50px",
                                                position: 'relative'
                                            }}>
                                                <ImportantDevicesIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                            </Box>
                                            <Typography variant='h4' gutterBottom textAlign={'center'} mt={1} mb={0}>
                                                2,345
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom textAlign={'center'}>
                                                Number of project
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ Width: "100%" }}>
                                        <CardContent textAlign={'center'} >
                                            <Box sx={{
                                                display: 'block', margin: '0 auto', background: 'lightgray', borderRadius: '50%', aspectRatio: '1/1', width: "50px",
                                                position: 'relative'
                                            }}>
                                                <ImportantDevicesIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                            </Box>
                                            <Typography variant='h4' gutterBottom textAlign={'center'} mt={1} mb={0}>
                                                2,345
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom textAlign={'center'}>
                                                Number of project
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ Width: "100%" }}>
                                        <CardContent textAlign={'center'} >
                                            <Box sx={{
                                                display: 'block', margin: '0 auto', background: 'lightgray', borderRadius: '50%', aspectRatio: '1/1', width: "50px",
                                                position: 'relative'
                                            }}>
                                                <ImportantDevicesIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                            </Box>
                                            <Typography variant='h4' gutterBottom textAlign={'center'} mt={1} mb={0}>
                                                2,345
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom textAlign={'center'}>
                                                Number of project
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ Width: "100%" }}>
                                        <CardContent textAlign={'center'} >
                                            <Box sx={{
                                                display: 'block', margin: '0 auto', background: 'lightgray', borderRadius: '50%', aspectRatio: '1/1', width: "50px",
                                                position: 'relative'
                                            }}>
                                                <ImportantDevicesIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                            </Box>
                                            <Typography variant='h4' gutterBottom textAlign={'center'} mt={1} mb={0}>
                                                2,345
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom textAlign={'center'}>
                                                Number of project
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item  md={8} xs={12}>
                                <Box height={"100%"} >
                                    <Card sx={{marginBottom: '.25rem'}}>

                                    <Typography sx={{ padding: ".25rem", fontSize: "20px", background: '#fff',display:"flex",alignItems:'center',gap:'10px' }}>
                                    <ContactMailIcon/>  All messages</Typography>
                                    </Card>
                                    <Notification></Notification>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                            <Card sx={{ marginBottom: '.25rem'}}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '.25rem' }}>
                                   <Typography sx={{ padding: ".25rem", fontSize: "20px",display:'flex',alignItems:'center',gap:'10px' }}><TerminalIcon/>  All programming</Typography>
                                    <Button variant='contained' size='small' onClick={() => setaddprogram({ ...addprogram, status: true })} >Add</Button>
                                </Box>
                                </Card> 
                                <Card sx={{padding:'10px'}}>

                                <AllQustion addprogram={addprogram.status}></AllQustion>
                                </Card>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                            <Card sx={{ marginBottom: '.25rem'}}>
                                <Typography sx={{ padding: ".55rem", fontSize: "20px", background: '#fff' }}>Get solutions</Typography>
                               </Card>
                                <Question />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                            <Card sx={{ marginBottom: '.25rem'}}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff',  padding: '.25rem' }}>
                                    <Typography sx={{ padding: ".25rem", fontSize: "20px" }}>All store Data</Typography>
                                    <Box sx={{display:'flex',gap:"8px"}}><Avatar size="small" sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)}><EditNoteIcon/></Avatar><Avatar sx={{ cursor: 'pointer' }} onClick={()=>setAddFile({status:true})}><AttachmentIcon/></Avatar></Box>
                                </Box>
                                </Card>
                           
                                <StoreDataa getdata={getdata} setdeletestore={setdeletestore} deletstor={deletstor} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box bgcolor='background.paper' boxShadow={24} p={4} className="modal-wrapper">
                    <form onSubmit={handleSaveStore}>
                        <Box py={3}>
                            <Textarea placeholder="Type anything…" sx={{ width: '100%' }} minRows={4} value={storeValue} onChange={(e) => setStoreValue(e.target.value)} autoComplete='false' />
                        </Box>
                        <Button variant="contained" sx={{ display: 'block', marginLeft: "auto" }} type='submit'>Save</Button>
                    </form>
                </Box>
            </Modal>

            <Modal
                open={addfile.status}
                onClose={()=>setAddFile({status:false})}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box bgcolor='background.paper' boxShadow={24} p={4} className="modal-wrapper">
                    <form onSubmit={handlefileupload} encType='multipart/form-data'>
                        <Box py={3}>
                            <Input type="text" name='data' value={fileDes} onChange={(e)=>setFileDes(e.target.value)}></Input>
                        </Box>
                        <Box py={3}>
                            <Input type="file" name='file'></Input>
                        </Box>
                        <Button variant="contained" sx={{ display: 'block', marginLeft: "auto" }} type='submit'>Save</Button>
                    </form>
                </Box>
            </Modal>

            <Modal
                open={addprogram.status}
                onClose={() => setaddprogram({ ...addprogram, status: false })}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box bgcolor='background.paper' boxShadow={24} p={4} className="modal-wrapper">
                    <form onSubmit={handleProgrammingdata}>
                        <Box pb={3}>
                            <Textarea placeholder="Type anything…" sx={{ width: '100%' }} minRows={4} autoComplete='false' name='question' value={programming.question} onChange={(e) => setprogramming({ ...programming, [e.target.name]: e.target.value })} />
                        </Box>
                        <Box pb={3}>
                            <Textarea placeholder="Type anything…" sx={{ width: '100%' }} minRows={4} autoComplete='false' name='example' value={programming.example} onChange={(e) => setprogramming({ ...programming, [e.target.name]: e.target.value })} />
                        </Box>
                        <Box pb={3}>
                            <Textarea placeholder="Type anything…" sx={{ width: '100%' }} minRows={4} autoComplete='false' name='answer' value={programming.answer} onChange={(e) => setprogramming({ ...programming, [e.target.name]: e.target.value })} />
                        </Box>
                        <Button variant="contained" sx={{ display: 'block', marginLeft: "auto" }} type='submit'>Save</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
