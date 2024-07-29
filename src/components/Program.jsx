import { Textarea } from '@mui/joy'
import { Button, FormLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export default function Program() {
    const [vewAns,setViewAns] = useState(true);
    const [viewNew,setViewNew] = useState(true);
    
  return (
    <Box className="ques-box" border={".3px solid lightblue"} p={1} >
            <Box className="ques" sx={{padding:'.5rem',fontSize:'1.6rem',borderLeft:'4px solid red'}}>
              <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deserunt tempore fugit, impedit laudantium quam harum laborum, repellendus temporibus provident, omnis consequuntur eos nobis assumenda. Dicta fugiat impedit vel cumque!
              </Typography>
            </Box>
            <Button variant="outlined" size="small" sx={{marginTop:'.5rem',marginBottom:".5rem"}} onClick={()=>setViewAns(!vewAns)}>
              {vewAns ? 'view' :'hide'} answer
             </Button>
            <Box className="ans" sx={{border:".2px solid lightgray",padding:"0 1rem",background:"#fff"}}  style={{height:`${vewAns ? '0px' : ''}`,overflow:`${vewAns ? 'hidden' : ''}`}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum, quidem qui pariatur quae excepturi aliquam dolore corrupti alias? Reprehenderit dolores deserunt commodi dicta! Dolorum ex accusantium repellendus esse consequuntur.
            </Box>
            <Box className="post" sx={{padding:'10px 0'}}>
                <Box sx={{  }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Send your code</FormLabel>
                  <Textarea minRows={5} size="sm" name="message"/> 
                </Box>
                <Button variant="contained" size="small" sx={{marginTop:'.5rem',marginBottom:".5rem"}}>
              send
             </Button>
             <Button variant="contained" size="small" sx={{marginTop:'.5rem',marginBottom:".5rem",marginLeft:'.5rem'}}onClick={()=>setViewNew(!viewNew)}>
             {viewNew ? 'view' :'hide'} new
             </Button>
            </Box>
           
            <Box className="new-post" style={{height:`${viewNew ? '0px' : ''}`,overflow:`${viewNew ? 'hidden' : ''}`}}>
              <Box sx={{background:'lightgray',padding:'.5rem',color:'green'}}>New Post</Box>
              <Box sx={{padding:'0.5rem',background:'lightgray'}}>
                <Box sx={{color:'blue',fontSize:"1.2rem"}}>arun singh</Box>
                <Box backgroundColor="#fff" paddingTop="0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum, quidem qui pariatur quae excepturi aliquam dolore corrupti alias? Reprehenderit dolores deserunt commodi dicta! Dolorum ex accusantium repellendus esse consequuntur
                </Box>
              </Box>
              <Box sx={{padding:'0.5rem',background:'lightgray',marginTop:'.5rem'}}>
                <Box sx={{color:'blue',fontSize:"1.2rem"}}>arun singh</Box>
                <Box backgroundColor="#fff" paddingTop="0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laborum, quidem qui pariatur quae excepturi aliquam dolore corrupti alias? Reprehenderit dolores deserunt commodi dicta! Dolorum ex accusantium repellendus esse consequuntur
                </Box>
              </Box>
            </Box>
          </Box>
  )
}
