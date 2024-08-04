import { Textarea } from '@mui/joy'
import Input from '@mui/joy/Input';
import { Button, FormLabel, Typography } from '@mui/material'
import { borderRadius, Box, height } from '@mui/system'
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';

export default function Solution({programming}) {
    const [vewAns, setViewAns] = useState(true);
    const [viewNew, setViewNew] = useState(true);
    
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', backgroundColor: '#ffd1c233', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 0' }} id="solution">
            <Box className="section-wrapper" sx={{maxWidth:'90%'}} width={'70%'}>
                <Box className="ques-box" border={".3px solid lightblue"} p={1}>
                    <Box className="ques" sx={{ padding: '.5rem', fontSize: '1.6rem', borderLeft: '4px solid red',color:'green' }}>
                        <Typography>
                            {programming.ques}
                        </Typography>
                    </Box>
                    <Button variant="outlined" size="small" sx={{ marginTop: '.5rem', marginBottom: ".5rem" }} onClick={() => setViewAns(!vewAns)}>
                        {vewAns ? 'view' : 'hide'} answer
                    </Button>
                    <Box className="ans" sx={vewAns ? { background: "#000",color:"white",height:0,overflow:'hidden',borderRadius:".25rem"}:{ background: "#000",color:"white",overflow:'auto',padding:'.5rem',borderRadius:".25rem",textAlign:'start'}}>
                        
                        <pre>{programming.ansText}</pre>
                    </Box>
                    <Box className="post" sx={{ padding: '10px 0' }}>
                        <Box>
                            <FormLabel sx={{ marginBottom: '.25rem' }}>Name</FormLabel>
                            <Input sx={{marginBottom:'.5rem'}}></Input>
                            <FormLabel sx={{ marginBottom: '.25rem' }}>Send your code</FormLabel>
                            <Textarea minRows={5} size="sm" name="message" />
                        </Box>
                        <Button variant="contained" size="small" sx={{ marginTop: '.5rem', marginBottom: ".5rem" }}>
                            send
                        </Button>
                        <Button variant="contained" size="small" sx={{ marginTop: '.5rem', marginBottom: ".5rem", marginLeft: '.5rem' }} onClick={() => setViewNew(!viewNew)}>
                            {viewNew ? 'view' : 'hide'} new
                        </Button>
                    </Box>
                    <Box className="new-post" style={viewNew ? {height:'0',overflow:'hidden'}:{overflow:'auto',border:'.2px solid lightgray',padding:'.5rem',borderRadius:'.5rem',background:'#fff'}}>
                        <Box sx={{fontSize:'20px',marginBottom:'.25rem'}}>Comments ({5})</Box>
                        <Box sx={{ padding: '.5rem'}}>
                            <Box sx={{ color: 'blue', fontSize: "1.3rem",display:'flex', gap:'.25rem',alignItems:'center', mb:1 }}> <Avatar>H</Avatar><span>Arun Singh</span></Box>
                            <Box backgroundColor="#000" padding={'16px'} paddingLeft={"40px"} overflow={"auto"} color={'#fff'} borderRadius='.25rem'>
                                <pre>
                                {
`function randum(max,min){
    if(max == null && min == null){
        return 0
    }
    else{
        if(max == null){
            max = min;
        }
        return min + Math.floor(Math.random()*(max - min +1))
    }
}
console.log(randum(5, 8))
                                    `
                                }
                            
                            </pre>
                            </Box>
                        </Box>
                        <Box sx={{ padding: '.5rem'}}>
                            <Box sx={{ color: 'blue', fontSize: "1.3rem",display:'flex', gap:'.25rem',alignItems:'center', mb:1 }}> <Avatar>H</Avatar><span>Arun Singh</span></Box>
                            <Box backgroundColor="#000" padding={'16px'} paddingLeft={"40px"} overflow={"auto"} color={'#fff'} borderRadius='.25rem'>
                                <pre>
                                {
`function randum(max,min){
    if(max == null && min == null){
        return 0
    }
    else{
        if(max == null){
            max = min;
        }
        return min + Math.floor(Math.random()*(max - min +1))
    }
}
console.log(randum(5, 8))
                                    `
                                }
                            
                            </pre>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
