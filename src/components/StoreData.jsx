import React from 'react'
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

export default function StoreData({ getdata, setdeletestore, deletstor }) {
  const [open, setOpen] = useState({ status: false, id: '' });
  const [opensol, setOpenSol] = useState({ status: false, data: '' });
  const handleClose = () => { setOpen({ ...open, status: false }); setOpenSol({ ...opensol, status: false }) };
  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/store/${id}`);
    setdeletestore(!deletstor);
    handleClose()
  }

  return (
    <>
      <Box className="stordata-outer">
        {
          getdata?.map((elem, ind) => {
            return (
              <Box key={ind}>
                <Typography variant="p">
                  {
                    elem?.data
                  }
                </Typography>
                <Box py={2} className="storedata-btn-wrapper">
                  <Button className='storedata-btn' variant="contained" size="small" onClick={() => setOpenSol({ status: true, data: elem.data })}>View</Button>
                  <Button className='storedata-btn' variant="contained" size="small" onClick={() => { setOpen({ status: true, id: elem?._id }) }} color='error'>Delete</Button>
                </Box>
              </Box>
            )
          })
        }

      </Box>

      <Modal
        open={open.status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.paper"} className="storedata-modal"
          boxShadow={24}
          p={4}>

          <Typography id="modal-modal-title" variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
            Are You sure !
          </Typography>

          <Box sx={{ textAlign: 'center' }}>
            <Button sx={{ marginLeft: 'auto' }} variant="contained" color="error" onClick={() => handleDelete(open.id)}>Delete</Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={opensol.status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.paper"} className="storedata-modal"
          boxShadow={24}
          p={4}>
          <Box sx={{ padding: '.5rem', border: '.1px solid lightgray', maxHeight: '500px', overflow: 'auto' }}>
            <Box className="my_solution" sx={{ background: 'black', color: "#fff", p: 1 }}>
              {
                opensol.data
              }
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
