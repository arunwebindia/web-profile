import React from 'react'
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { Card } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
export default function StoreData({ getdata, setdeletestore, deletstor }) {
  const [open, setOpen] = useState({ status: false, id: '' });
  const [opensol, setOpenSol] = useState({ status: false, data: {} });
  const handleClose = () => { setOpen({ ...open, status: false }); setOpenSol({ ...opensol, status: false }) };
  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/store/${id}`);
    setdeletestore(!deletstor);
    handleClose()
  }
  return (
    <>
      <Card sx={{ padding: '8px', height: "calc(100% - 55px)" }}>
        <Box className="stordata-outer" p={0}>
          {

            getdata?.map((elem, ind) => {
              return (
                <Box key={ind} sx={{ border: '.2px solid lightgray', mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightblue', padding: '8px', }}>
                    <Typography color={"blue"}>Arun Singh</Typography>
                    <Box >
                      <VisibilityIcon color='success' onClick={() => setOpenSol({ status: true, data: elem })} />
                      <DeleteIcon color='error' onClick={() => { setOpen({ status: true, id: elem?._id }) }} />
                    </Box>
                  </Box>
                  <Box sx={{ padding: '8px', pb: 0 }}>
                    <Typography sx={{ fontSize: "12px" }}>Date:4/4/2024</Typography>
                    <Typography>Javascript programming</Typography>
                  </Box>
                  <Typography sx={{ padding: '8px', fontSize: '13px', lineHeight: "1.75", color: 'gray' }}>
                    {
                      elem.file
                        ?
                        <>
                          <Box as="img" src={`${process.env.REACT_APP_BASE_URL}/files/${elem.file}`} alt="image" width={'auto'} height={'100px'} overflow={"auto"} />
                        </>
                        :
                        elem?.data
                    }
                  </Typography>

                </Box>
              )
            })
          }

        </Box>
      </Card>
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
          boxShadow={24} borderRadius={2}
          p={4}>
          <Box sx={{ padding: '.5rem', border: '.1px solid lightgray', maxHeight: '500px', overflow: 'auto' }}>
            <Box className="" sx={{ background: '', color: "", p: 1 }}>
              {
                <>

                  {opensol.data.data}
                  
                  <Box as="object"
                    data={`${process.env.REACT_APP_BASE_URL}/files/${opensol.data.file}`} width="200" height="200">
                  </Box>
                  <Box as="a" href={`${process.env.REACT_APP_BASE_URL}/files/${opensol.data.file}`} download={true}>download doc</Box>
                </>
              }
            </Box>
          </Box>
        </Box>
      </Modal>

    </>
  )
}
