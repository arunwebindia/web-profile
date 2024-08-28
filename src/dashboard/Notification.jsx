import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';


export default function Notification(props) {
    const [open, setOpen] = useState(false);
    const [del,setDel] = useState({status:false,id:''});
    const [data,setData] = useState({});
    const [contactList,setcontactList] = useState(null);
    
    useEffect(()=>{
        const fetchformdata = async ()=>{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/contact`);
            setcontactList(res.data);
          }
          fetchformdata();
    },[del])

    const handleOpen = (elem) =>{ setOpen(true);setData(elem)};
    const handleClose = () => setOpen(false);
    const handleDelete = async (id)=>{
        setDel({...del,status:false})
        axios.delete(`${process.env.REACT_APP_BASE_URL}/contact/${id}`);
    }
    
    
  return (
    <>
    <Box sx={{margin:"auto",boxShadow:'sm',height:'calc(100% - 42px)',background:'#fff',overflow:'auto'}} className="contact-msg-wrapper">
    <table>
        <thead>
        <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
        <th>Time</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {
                contactList?.map((elem,ind)=>{
                   
                    return (
                        <tr key={ind}>
                           
                            <td>{elem?.name}</td>
                            <td>{elem?.email?.slice(0,10)}</td>
                            <td>{elem?.message?.slice(0,10)}...</td>
                            <td>{elem?.time.slice(0,10)}</td>
                            <td><Button onClick={()=>handleOpen(elem)} sx={{minWidth:'auto',padding:0}}><OpenInNewIcon/></Button><Button onClick={()=>setDel({...del,status:true,id:elem._id})} sx={{minWidth:'auto',padding:0,color:'red'}}><DeleteIcon/></Button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </Box>
    
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box bgcolor='background.paper' boxShadow= {24} p = {4} className="modal-wrapper">
    <Typography sx={{textAlign:'start',fontSize:'12px',mb:3}}>
      {data.time}
      </Typography>
      <Typography id="modal-modal-title" variant="h4" sx={{}}>
       {data.name}
      </Typography>
      <Typography id="modal-modal-description" variant="body2" sx={{ mt: 1,}}>
        {data.message}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt:4}}>
      {data.email}
      </Typography>
     <Box sx={{textAlign:'end'}}>
     <Button sx={{marginLeft:'auto'}} onClick={handleClose} variant="contained">OK</Button> 
     </Box>
    </Box>
  </Modal>

  <Modal
    open={del.status}
    onClose={()=>setDel({...del,status:false})}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box bgcolor='background.paper' boxShadow= {24} p= {4} className="modal-wrapper">
   
      <Typography id="modal-modal-title" variant="h6" sx={{ mb: 3,textAlign:'center'}}>
       Are You sure !
      </Typography>
      
     <Box sx={{textAlign:'center'}}>
     <Button sx={{marginLeft:'auto'}} onClick={()=>{handleDelete(del.id)}} variant="contained" color="error">Delete</Button> 
     </Box>
    </Box>
  </Modal>
</>
)
}
