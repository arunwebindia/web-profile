import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Card } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Notification(props) {
    const [open, setOpen] = useState(false);
    const [del,setDel] = useState({status:false,id:''});
    const [data,setData] = useState({});
    const [contactList,setcontactList] = useState(null);
    const [filterContact,setFilterContact] = useState();
    const [pagination,setpagination] =useState(0)

    
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
    
    const handleFilterContact =(state)=>{
      if(state){
        if(pagination < (contactList.length / 5) )setpagination(pagination + 1);
        setFilterContact(contactList.slice(pagination * 5,5))
      }
      else{
        if(pagination > 0)setpagination(pagination - 1);
        setFilterContact(contactList.slice(pagination - 1,5))
      }
    }
    
  return (
    <>
    <Card sx={{height:" calc(100% - 43px)",padding:'8px'}}>

   
    <Box sx={{margin:"auto",boxShadow:'sm',display:'flex',justifyContent:'space-between',flexDirection:'column',height:'calc(100% - 42px)',background:'#fff',overflow:'auto'}} className="contact-msg-wrapper">
    
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
                      <td><Button onClick={()=>handleOpen(elem)} sx={{minWidth:'auto',padding:0}}><VisibilityIcon/></Button><Button onClick={()=>setDel({...del,status:true,id:elem._id})} sx={{minWidth:'auto',padding:0,color:'red'}}><DeleteIcon/></Button></td>
                  </tr>
              )
            })
          }
        </tbody>
    </table>
    {/* <Box sx={{background:"#d1edf2",textAlign:"end"}}>
      <Button variant='outlined' onClick={()=>handleFilterContact(false)}>Prev</Button>
      <Button variant='outlined' onClick={()=>handleFilterContact(true)}>Next</Button>
    </Box> */}
    </Box>
    </Card>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    
  >
    <Box bgcolor='background.paper' boxShadow= {24} className="modal-wrapper" minWidth="40%" borderRadius={1} p={3}>
      <Box sx={{background:"#3498db",padding:'8px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography id="modal-modal-title" variant="h5" sx={{color:'#fff'}} textTransform={"capitalize"}>
        {data.name}
        </Typography>
        <Typography sx={{textAlign:'start',fontSize:'12px',color:'#fff'}}>
        {data.time}
        </Typography>
      </Box>
    
      <Typography id="modal-modal-description" variant="body2" py={3}>
      <Typography id="modal-modal-description" sx={{fontSize:'12px',color:'#3498db',borderBottom:".05px solid orange",display:"inline-block"}} textTransform={'uppercase'}>
        {data.email}
        </Typography>
        <Typography color={"#2f3d40"} textTransform={"capitalize"} py={1} fontSize={"14px"} lineHeight={2}>
        {data.message}
        </Typography>
      </Typography>
      
     <Box sx={{textAlign:'end',p:1,borderTop:'.1px solid #3498db'}}>
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
    <Box bgcolor='background.paper' boxShadow= {24} className="modal-wrapper" minWidth="300px" borderRadius={1}>
    <Box sx={{backgroundColor:"#db343480",padding:'8px 0',textAlign:'center',borderRadius:'3px 3px 0 0'}}>
          <DeleteForeverIcon color='error'/>
    </Box>
    <Typography color={"#2f3d40"} textTransform={"capitalize"} py={3} fontSize={"14px"} lineHeight={2} textAlign={"center"}>
        Are you sure to delete?
        </Typography>
      
     <Box sx={{textAlign:'center',padding:'10px 4px',borderTop:".01px solid red"}}>
     <Button sx={{width:"50%",marginRight:"10px"}} size='small' onClick={()=>{handleDelete(del.id)}} variant="contained" color="error">Delete</Button> 
     <Button sx={{width:"45%"}} size='small' variant="outlined" color="secondary">Cancel</Button> 
     
     </Box>
    </Box>
  </Modal>
</>
)
}
