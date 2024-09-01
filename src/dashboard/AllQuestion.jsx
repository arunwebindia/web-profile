import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QuizIcon from '@mui/icons-material/Quiz';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function AllQustion({addprogram}) {
    const [open, setOpen] = useState(false);
    const [del,setDel] = useState({status:false,id:''});
    const [data,setData] = useState({});
    const handleOpen = (elem) =>{ setOpen(true);setData(elem)};
    const handleClose = () => setOpen(false);
    const [allprogram,setAllprogram] = useState(null);
    useEffect(()=>{
        const fn=async ()=>{
            const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/programming`);
            setAllprogram(resp?.data);
            console.log(resp?.data)
        }
        fn();
    },[addprogram,del.status]);
    function deleteQues(id){
        const resp = axios.delete(`${process.env.REACT_APP_BASE_URL}/programming/${id}`);
        setDel({...del,status:false})
    }
  
  return (
    <>
    <Box sx={{height:'300px',overflow:'auto'}}>

    <Box sx={{margin:"auto",width:'100%',boxShadow:'sm',height:'100%'}} className="contact-msg-wrapper">
    <table>
        <thead>
        <tr>
        <th>S.No.</th>
        <th>Question</th>
        <th>Example</th>
        <th>Solution</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {
            allprogram?.map((elem,ind)=>{
              return (<tr>
                  <td>{ind+1}</td>
                  <td>{elem.question?.slice(0,20)}...</td>
                  <td>{elem.example?.slice(0,20)}...</td>
                  <td>{elem.answer?.slice(0,20)}...</td>
                  <td><Button onClick={()=>handleOpen(elem)} sx={{minWidth:'auto',padding:0}}><VisibilityIcon/></Button><Button sx={{minWidth:'auto',padding:0,color:"red"}} onClick={()=>setDel({...del,status:true,id:elem._id})}><DeleteIcon/></Button></td>
              </tr>)
            })
          }
        </tbody>
    </table>
    </Box>
    </Box>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box bgcolor='background.paper' boxShadow= {24} p= {4} className="modal-wrapper" borderRadius={1}>
    <Box sx={{background:"#3498db",padding:'8px',display:'flex',justifyContent:'space-between',alignItems:'center',borderRadius:'3px 3px 0 0'}}>
        <Typography id="modal-modal-title" variant="h5" sx={{color:'#fff'}} textTransform={"capitalize"}>
        {"JavaScript"}
        </Typography>
        <Typography sx={{textAlign:'start',fontSize:'12px'}}>
          {data.time}
        </Typography>
    </Box>
    <Box sx={{py:2}}>
        <Typography id="modal-modal-title" sx={{display:'flex',alignItems:'start',gap:'10px',color:"rgb(25 118 210)"}}>
        <QuizIcon/>{data.question}
        </Typography>
        <Typography id="modal-modal-description" variant="body2" sx={{ my: 2,color:'gray'}}>
          {data.example}
        </Typography>
        <Box sx={{color:'blue',display:'flex',alignItems:'center'}} fontSize={"20px"}>
          <PsychologyAltIcon />
          Solution:</Box>
        <Typography id="modal-modal-description" sx={{ mt:2,backgroundColor:'#3e4648',color:'#fff',borderRadius:1}}>
        <pre>{data.answer}</pre>
        </Typography>
    </Box>
      
     <Box sx={{textAlign:'end',borderTop:".2px solid blue",pt:1}}>
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
     <Button sx={{width:"50%",marginRight:"10px"}} size='small' onClick={()=>deleteQues(del.id)} variant="contained" color="error">Delete</Button> 
     <Button sx={{width:"45%"}} size='small' variant="outlined" color="secondary">Cancel</Button> 
     </Box>
    </Box>
  </Modal>
</>
)
}
