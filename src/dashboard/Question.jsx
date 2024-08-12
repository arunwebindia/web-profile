import React, { useEffect } from 'react'
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

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
      <Box sx={{ background: '#fff', p: 2, height: '300px', overflow: "auto" }}>
        {
          allreply?.map((elem, ing) => {
            if (elem?.reply.length > 0) {
              return (
                <Box>
                  <Typography variant="p">
                    {elem?.question}
                  </Typography>
                  <Box py={2}>
                    <Button sx={{ color: "blue", fontSize: '10px', color: 'white' }} variant="contained" size="small" onClick={() => setOpenSol({ status: true, dataa: elem })}>View</Button>
                  </Box>
                </Box>
              );
            }
          })
        }

      </Box>
      <Modal
        open={opensol.status}
        onClose={() => { setOpenSol({ ...opensol, status: false }) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor='background.paper' boxShadow= {24} p= {4} className="modal-wrapper">
          <Box sx={{ padding: '.5rem', border: '.1px solid lightgray', maxHeight: '500px', overflow: 'auto' }}>
            <Box className="my_solution" sx={{ background: 'black', color: "#fff", p: 1 }}>
              {opensol?.dataa?.question}
            </Box>
            {
              opensol?.dataa?.reply?.map((elem) => {
                return (
                  <Box className="new_solution" py={1}>
                    <Box sx={{ background: '#fff' }} p={1}>
                      <Typography variant="h6">{elem.name}</Typography>
                      <Typography sx={{ fontSize: '14px' }} py={1}>
                        {elem.message}
                      </Typography>
                      <Button sx={{ color: "white" }} variant="contained" color='success' size="small">add</Button>
                      <Button sx={{ color: "red", marginLeft: '8px' }} variant="outlined" color="error" size="small" onClick={() => handleDeleteReply(opensol?.dataa._id, elem._id)}>delete</Button>
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
