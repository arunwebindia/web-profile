import React from 'react'
import { Box } from '@mui/system'
import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Program from '../components/Program';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { programming } from '../utility_files/utility';

export default function Programming({setProgramming}) {

  return (<>
    <Box sx={{ width: '100%', minHeight: '100vh', padding: '1.2rem', backgroundColor: '#dcf7ff33', }} id="skill">
      
        <Box sx={{ fontSize: '32px', padding: '.5rem 0', borderBottom: ".3px solid blue" }}>
          Javascript practice question
        </Box>
        {
            programming.map((elem,index)=>{
              return (
                <Box sx={{ padding: ".5rem",marginBottom:"1rem" }}> 
          <Typography sx={{ paddingBottom: ".5rem" }}>
            {index +1}. {elem.ques}
          </Typography>
         
          <Link to={'/programming/solution'} onClick={()=> setProgramming(elem)}>See solution</Link>
        </Box>
              )
            })
          }
        
    </Box>
  </>
  )
}
