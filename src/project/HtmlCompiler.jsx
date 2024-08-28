import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid';
import React, { useEffect, useRef, useState } from 'react'
import Textarea from "@mui/joy/Textarea";

export default function HtmlCompiler() {
const [html,setHtml] = useState({
    html:"",
    css:'',
    js:''
})
const ref = useRef();
useEffect(()=>{

},[])
function handleChange(e){
    setHtml({...html,[e.target.name]:e.target.value});
   
}
function runCode(){
    ref.current.contentDocument.head.innerHTML =`<style>${html.css}</style>`;
    ref.current.contentDocument.body.innerHTML = html.html;
    ref.current.contentWindow.eval(html.js)
}
  return (
    <>
    <Box>
    <Box sx={{p:3,background:'#FFF'}} className="mycontainer">
        <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box sx={{width:'100%'}}>
                            <Typography>HTML</Typography>
                            <Textarea minRows={8} name='html' value={html.html} onChange={handleChange} sx={{background:'#000',color:'#fff'}} spellcheck="false"></Textarea>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Typography>CSS</Typography>
                            <Textarea minRows={8} name='css' value={html.css} onChange={handleChange} spellcheck="false"></Textarea>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Typography>JS</Typography>
                            <Textarea minRows={8} name='js' value={html.js} onChange={handleChange} spellcheck="false"></Textarea>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button variant='contained'color='success' onClick={runCode}>Run</Button>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{border:'.2px solid lightgray',height:"500px",width:"100%"}}>
                    <iframe src="" width={"100%"} height={"100%"} ref={ref} frameBorder={0}>

                    </iframe>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </Box>
    </>
  )
}
