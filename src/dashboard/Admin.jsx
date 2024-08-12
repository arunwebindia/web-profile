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
export default function Admin({setLogin}) {
    const [getdata,setgetdata] = useState([])
    const [updatagetdata,setupdatadata] = useState(false)
    const [contactData,setContactData] = useState({});
    const [deletstor,setdeletestore] = useState(false)
    const [deletreply,setdeletereply] = useState(false)
    const [storeValue,setStoreValue] = useState('')
    const [open, setOpen] = useState(false);
    const [addprogram,setaddprogram] = useState({status:false})
    const [programming,setprogramming] =useState({question:'',example:'',answer:''})
    const [allreply,setallreply]= useState(null)
    useEffect(()=>{
        const getDataa = async ()=>{
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/store`);
            setgetdata(res.data)
        }
        getDataa();
    },[updatagetdata,deletstor])
    useEffect(()=>{
        const getDataa = async ()=>{
            let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/programming`);
            setallreply(res.data)
        }
        
        getDataa();
    },[deletreply])
    const handleClose = () => {setOpen(false)};

    const handleSaveStore = async(e)=>{
        e.preventDefault();
        const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/store`,{data:storeValue});
     
        setupdatadata(!updatagetdata);
        handleClose()
    }
    const handleProgrammingdata = async(e)=>{
        e.preventDefault()
       
        const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/programming`,programming);
        setaddprogram({status:!addprogram});
    }

    return (
        <>
            <Box sx={{ padding: '.5rem',background:'lightgray',minHeight:'100vh' }}>
                <Box sx={{background:'#000',padding:'.5rem',display:'flex',justifyContent:'end',alignItems:'center',marginBottom:'.5rem',position:'sticky',top:'0rem',zIndex:'100',transition:'all .5s easy-in-out'}}>
                <Avatar alt="Arun Singh" src="/static/images/avatar/1.jpg" /> <Button onClick={()=>setLogin(false)}>Logout</Button>
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
                        <Question/>
                        </Grid>
                        <Grid lg={12}>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',marginBottom:'.25rem',padding:'.25rem'}}>
                                <Typography sx={{padding:".25rem",fontSize:"20px"}}>All programming</Typography>
                                <Button variant='contained' size='small' onClick={()=>setaddprogram({...addprogram,status:true})} >Add</Button>
                            </Box>
                        <AllQustion addprogram={addprogram.status}></AllQustion>
                        </Grid>
                        <Grid lg={4}>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',marginBottom:'.25rem',padding:'.25rem'}}>
                                <Typography sx={{padding:".25rem",fontSize:"20px"}}>All store Data</Typography>
                                <div><Button variant='contained' size='small' sx={{marginRight:'5px'}} onClick={()=>setOpen(true)}>Add text</Button><Button variant='contained' size='small' >Add File</Button></div>
                        </Box>
                        <StoreDataa getdata={getdata} setdeletestore={setdeletestore} deletstor={deletstor}/>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Box>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor='background.paper' boxShadow= {24} p= {4} className="modal-wrapper">
            <form onSubmit={handleSaveStore}>
                <Box py={3}>
                    <Textarea placeholder="Type anything…" sx={{width:'100%'}} minRows={4} value={storeValue} onChange={(e)=>setStoreValue(e.target.value)} autoComplete='false'/>
                </Box>
                <Button variant="contained" sx={{display:'block',marginLeft:"auto"}} type='submit'>Save</Button>
            </form>
        </Box>
      </Modal>

      <Modal
        open={addprogram.status}
        onClose={()=>setaddprogram({...addprogram,status:false})}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor='background.paper' boxShadow= {24} p= {4} className="modal-wrapper">
            <form onSubmit={handleProgrammingdata}>
                <Box pb={3}>
                    <Textarea placeholder="Type anything…" sx={{width:'100%'}} minRows={4} autoComplete='false'name='question' value={programming.question} onChange={(e)=>setprogramming({...programming,[e.target.name]:e.target.value})}/>
                </Box>
                <Box pb={3}>
                    <Textarea placeholder="Type anything…" sx={{width:'100%'}} minRows={4} autoComplete='false' name='example'value={programming.example} onChange={(e)=>setprogramming({...programming,[e.target.name]:e.target.value})}/>
                </Box>
                <Box pb={3}>
                    <Textarea placeholder="Type anything…" sx={{width:'100%'}} minRows={4} autoComplete='false'name='answer'value={programming.answer} onChange={(e)=>setprogramming({...programming,[e.target.name]:e.target.value})}/>
                </Box>
                <Button variant="contained" sx={{display:'block',marginLeft:"auto"}} type='submit'>Save</Button>
            </form>
        </Box>
      </Modal>
        </>
    )
}
