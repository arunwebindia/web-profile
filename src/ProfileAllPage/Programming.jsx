import React from 'react'
import { Box } from '@mui/system'
import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Program from '../components/Program';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

export default function Programming() {

  return (<>
    <Box sx={{ width: '100%', minHeight: '100vh', padding: '1.2rem', backgroundColor: '#dcf7ff33', }} id="skill">
      
        <Box sx={{ fontSize: '32px', padding: '.5rem 0', borderBottom: ".3px solid blue" }}>
          Javascript practice question
        </Box>
        <Box sx={{ padding: ".5rem",marginBottom:"1rem" }}>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia veniam vel qui facere eaque, eius officiis enim nobis molestias quasi.
          </Typography>
          <Typography color={"gray"} marginBottom={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia veniam vel qui facere eaque, eius officiis enim nobis molestias quasi. Sed nam tempore consectetur, magni repellat quia labore adipisci?
          </Typography>
          <Link to={'/programming/solution'}>See solution</Link>
        </Box>
        <Box sx={{ padding: ".5rem" }}>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia veniam vel qui facere eaque, eius officiis enim nobis molestias quasi.
          </Typography>
          <Typography color={"gray"} marginBottom={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia veniam vel qui facere eaque, eius officiis enim nobis molestias quasi. Sed nam tempore consectetur, magni repellat quia labore adipisci?
          </Typography>
          <Link to={'/programming/solution'}>See solution</Link>
        </Box>
    </Box>
  </>
  )
}
