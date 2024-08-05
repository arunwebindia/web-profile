import React from 'react'

import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Textarea from '@mui/joy/Textarea';

export default function StoreData() {
    const [open, setOpen] = useState(false);
    const [view,setView] =useState(false);
    const [opensol,setOpenSol] = useState(false);
    const handleOpen = (elem) =>{ setOpen(true)};
    const handleClose = () => {setOpen(false);setOpenSol(false)};
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
      
    const programDetails={
        height:0,
        overflow:'hidden',
        
    }
  return (
    <>
      <Box sx={{background:'#fff',p:2,height:'300px',overflow:"auto"}}>
        <Box>
            <Typography variant="p">
                1.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                similique laudantium,quae ?
            </Typography>
            <Box py={2}>
                <Button sx={{color:"blue",fontSize:'10px',color:'white'}} variant="contained" size="small" onClick={()=>setOpenSol(true)}>View</Button>
                <Button sx={{color:"blue",fontSize:'10px',color:'white',ml:2}} variant="contained" size="small" onClick={()=>handleOpen(true)}>Delete</Button>
            </Box>
        </Box>
        <Box>
            <Typography variant="p">
                1.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                similique laudantium,quae ?
            </Typography>
            <Box py={2}>
                <Button sx={{color:"blue",fontSize:'10px',color:'white'}} variant="contained" size="small" onClick={()=>setOpenSol(true)}>View</Button>
                <Button sx={{color:"blue",fontSize:'10px',color:'white',ml:2}} variant="contained" size="small" onClick={()=>handleOpen(true)}>Delete</Button>
            </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{maxHeight:'200px',overflow:'auto'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla 
                cumque at expedita similique voluptatibus labore. Expedita, repellat 
                ratione consequatur a molestias similique exercitationem 
                asperiores ab sequi quo voluptatem sunt corrupti?
            </Box>
            <form action="">
                <Box py={3}>
                    <Textarea placeholder="Type anything…" sx={{width:'100%'}} minRows={4} />
                </Box>
                <Button variant="contained" sx={{display:'block',marginLeft:"auto"}}>Save</Button>
            </form>
        </Box>
      </Modal>
      <Modal
        open={opensol}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <Box sx={{padding:'.5rem',border:'.1px solid lightgray',maxHeight:'500px',overflow:'auto'}}>
                <Box className="my_solution" sx={{background:'black',color:"#fff",p:1}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Expedita eveniet ut quisquam modi ipsa ad, sit quibusdam 
                    iste illo similique odit asperiores porro accusamus ab 
                    laborum sequi officiis quas quo?
                </Box>
                <Box className="new_solution" py={1}>
                    <Box sx={{background:'#fff'}} p={1}>
                        <Typography variant="h6">Arun Singh</Typography>
                        <Typography sx={{fontSize:'14px'}} py={1}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita eveniet ut quisquam modi ips
                        ad, sit quibusdam iste illo similique odit asperiores porro accusamus
                        ab laborum sequi officiis quas quo?
                        </Typography>
                        <Button sx={{color:"white"}} variant="contained" color='success' size="small">add</Button>
                        <Button sx={{color:"red",marginLeft:'8px'}} variant="outlined" color="error" size="small">delete</Button>
                    </Box>
                </Box>
                <Box className="new_solution" py={1}>
                    <Box  sx={{background:'#fff'}} p={1}>
                        <Typography variant="h6">Arun Singh</Typography>
                        <Typography sx={{fontSize:'14px'}} py={1}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita eveniet ut quisquam modi ips
                        ad, sit quibusdam iste illo similique odit asperiores porro accusamus
                        ab laborum sequi officiis quas quo?
                        </Typography>
                        <Button sx={{color:"white"}} variant="contained" color='success' size="small">add</Button>
                        <Button sx={{color:"red",marginLeft:'8px'}} variant="outlined" color="error" size="small">delete</Button>
                    </Box>
                </Box>
            </Box>
           
        </Box>
      </Modal>
    </>
  )
}
