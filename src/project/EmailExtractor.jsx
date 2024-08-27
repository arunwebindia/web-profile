import { Textarea } from '@mui/joy'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export default function EmailExtractor() {
    
    const [paragraph,setPara]= useState('');
    const [Email,setEmail]= useState();
    const handleCheckEmail =()=>{
        let ar = paragraph.split(' ');
        let array_Email = ar.filter((words)=>words.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/igm));
        setEmail(array_Email);
        setPara(array_Email.map((elem)=>{
            return elem + "\n"
        }).join(''))
    }
    const handleCopy=(e,emailText)=>{
        window.navigator.clipboard.writeText(emailText);
        e.target.innerText = 'copied successfully !'
        e.target.style.color='green'
        setTimeout(()=>{
            e.target.innerText = 'copy'
        e.target.style.color='blue'
        },3000)
   
    }
  return (
    <>
    <Box>
        <Box sx={{padding:'10px 0'}} className="mycontainer">
            <Box as="h1" mb={3} textAlign={'center'}>Find Email from sentence</Box>
            <Textarea sx={{}} minRows={8} maxRows={12} onChange={(e)=>setPara(e.target.value)} value={paragraph}></Textarea>
            <Box sx={{marginTop:'1rem'}}>
            <Button variant='contained' onClick={handleCheckEmail}>Find Email</Button>
            <Button variant='outlined' sx={{marginLeft:'10px',color:'red'}} onClick={()=>setPara('')}>Clear</Button>
            </Box>
            <Box sx={{border:'.3px solid lightgray',marginTop:'10px',padding:"10px",minHeight:'100px',maxHeight:'400px',overflow:'auto',borderRadius:'3px'}}>
                {
                    Email?.length >= 1 ?  
                    
                    
                        Email?.map((value,index)=>{
                                    return (
                                <Box as='div' sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',width:'100%',my:2,p:1,boxShadow:" rgba(0, 0, 0, 0.04) 0px 3px 5px"}} key={index}>
                                <Box as="p" sx={{color:'blue'}}>{index + 1}. {value}</Box>
                                <Button variant='outlined' size='sm' onClick={(e)=>handleCopy(e,value)}>Copy</Button>
                            </Box>
                                    )
                                })
                    
                    :
                    <Box as='div' sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',width:'100%',my:2,p:1,boxShadow:" rgba(0, 0, 0, 0.04) 0px 3px 5px"}}>

                        Email adress not found !!
                    </Box>
                    
                    
                    
                }
                
            </Box>
        </Box>
    </Box>
    </>
  )
}
