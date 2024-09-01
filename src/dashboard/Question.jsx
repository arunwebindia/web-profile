import React, { useEffect } from 'react'
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { Card } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Question() {
  const [allreply, setreplydata] = useState(null)
  const [opensol, setOpenSol] = useState({ status: false, dataa: null });

  useEffect(() => {
    const getDataa = async () => {
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/programming`);
      setreplydata(res.data)
    }
    getDataa();
  }, [opensol.status])

  const handleDeleteReply = async (dataId, replyId) => {
    const resp = await axios.delete(`${process.env.REACT_APP_BASE_URL}/programming/reply/${dataId}/${replyId}`);
    setOpenSol({ ...opensol, status: false })
  }

  return (
    <>
    <Card sx={{padding:'8px',height: "calc(100% - 55px)"}}>
      <Box sx={{ background: '#fff', height: '100%', overflow: "auto" }}>
        {
          allreply?.map((elem, ing) => {
            if (elem?.reply.length > 0) {
              return (
                <Box display={'flex'} alignItems={'start'} p={1}  backgroundColor= {'#add6ff4d'} mb={2}>
                  <Typography variant="p" sx={{display:'flex',alignItems:'start',gap:'10px'}}>
                  <QuizIcon/>{elem?.question}
                  </Typography>
                  <Box>
                    <Button sx={{ color: "blue", fontSize: '10px', color: 'white' }} variant="contained" size="small" onClick={() => setOpenSol({ status: true, dataa: elem })}><VisibilityIcon/></Button>
                  </Box>
                </Box>
              );
            }
          })
        }

      </Box>
      </Card>
      <Modal
        open={opensol.status}
        onClose={() => { setOpenSol({ ...opensol, status: false }) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor='background.paper' boxShadow= {24} p= {2} className="modal-wrapper" borderRadius={1}>
          <Box sx={{ padding: '.5rem', border: '.1px solid lightgray', maxHeight: '500px', overflow: 'auto' }}>
           
            <Typography id="modal-modal-title" sx={{display:'flex',alignItems:'start',gap:'10px',color:"rgb(25 118 210)"}}>
        <QuizIcon/>{opensol?.dataa?.question}
        </Typography>
            {
              opensol?.dataa?.reply?.map((elem) => {
                return (
                  <Box className="new_solution" >
                    <Box sx={{ background: '#fff'}} >
                      <Typography variant="h6" sx={{display:'flex',alignItems:'center',gap:'10px',pt:2}}><PersonIcon/> {elem.name}</Typography>
                      <Typography sx={{ fontSize: '14px',color:'gray',background:'lightgray',pb:2}} p={1} >
                        {elem.message}
                      </Typography>
                      <Box sx={{borderTop:'1px solid blue',marginTop:"10px",paddingTop:'10px' ,display:'flex',gap:'10px'}}>

                      <Button sx={{ color: "white" ,width:"100%"}} variant="contained" color='success' size="small">add</Button>
                      <Button sx={{ color: "red", width:"100%" }} variant="outlined" color="error" size="small" onClick={() => handleDeleteReply(opensol?.dataa._id, elem._id)}>delete</Button>
                      </Box>
                    </Box>
                  </Box>
                )
              })
            }
          </Box>
        </Box>
      </Modal>
    </>
  )
}
