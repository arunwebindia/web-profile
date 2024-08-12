import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import axios from 'axios';


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
                        <td>{elem.question?.slice(0,50)}...</td>
                        <td>{elem.example?.slice(0,50)}...</td>
                        <td>{elem.answer?.slice(0,50)}...</td>
                        <td><Button onClick={()=>handleOpen(elem)}><OpenInNewIcon/></Button><Button sx={{color:"red"}} onClick={()=>setDel({...del,status:true,id:elem._id})}><DeleteIcon/></Button></td>
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
    <Box bgcolor='background.paper' boxShadow= {24} p= {4} className="modal-wrapper">
    <Typography sx={{textAlign:'start',fontSize:'12px',mb:3}}>
      {data.time}
      </Typography>
      <Typography id="modal-modal-title" variant="h4" sx={{}}>
       {data.question}
      </Typography>
      <Typography id="modal-modal-description" variant="body2" sx={{ mt: 1,}}>
        {data.example}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt:4}}>
      {data.answer}
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
     <Button sx={{marginLeft:'auto'}} onClick={()=>deleteQues(del.id)} variant="contained" color="error">Delete</Button> 
     </Box>
    </Box>
  </Modal>
</>
)
}
