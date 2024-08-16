import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Textarea from "@mui/joy/Textarea";

export default function JavascriptCompiler() {
  const [code, setcode] = useState('');
  const [output, setoutput] = useState('');
  const [color,setcolor] = useState('blue')

  const runCode = (e) => {
    try {
        let codefunction = new Function(code);
        const logs = [];
        console.log = (msg) => {
        logs.push(msg)
      }
        codefunction();
        if(logs.join('\n').length < 1){
          setcolor('red');
          setoutput('Nothing to display output and please write code and run again.')
        }
        else{
          setcolor('green')
          setoutput(logs.join('\n'))
        }
    } catch (e) {
        setcolor('red')
        setoutput(e.toString());
    }
  }

return (
  <>
    <Box sx={{ p: 2 }}>
      {/* <Box sx={{ textAlign: "start", mb: 2 }}>
        <Button size="small" variant='contained' onClick={runCode}>Run</Button>
      </Box> */}
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box sx={{ borderRadius: "3px", height: "500px", overflow: 'auto',overflowX:'hidden',position:'relative' }}>
          <Button size="small" variant='contained' onClick={runCode} sx={{position:'absolute',right:'5%',bottom:'5%',zIndex:'10'}} >Run</Button>
            <Textarea spellcheck="false" sx={{ height: '99.95%', border: "0px", boxShadow: "none",background:'black',color:'white' }} onChange={(e) => setcode(e.target.value)} name="code" value={code} />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ border: '.2px solid gray',borderRadius:'5px',p:2, height: "500px", overflow: 'auto',color:color }}  >
          {output}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </>
)
}
