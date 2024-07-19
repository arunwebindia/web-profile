import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: "100vh",color: 'white' }} id="contact">
        <Box>
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati numquam perspiciatis asperiores illo.</p>
        </Box>
      
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          label="Name"
          id="outlined-size-small"
          placeholder='Name'
          size="small"
        />
      
      </div>
      <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          placeholder='Email'
          size="small"
        />
      
      </div>
      <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          placeholder='Email'
          size="small"
        />
      
      </div>
     <div>

      <Button variant="contained">Contained</Button>
     </div>
        </Box>
    </Box>
  )
}
