
import React from 'react'
import {nav,social_media} from '../utility_files/utility'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box } from '@mui/system'
export default function Header() {
  return (
    <>
    <Box  sx={{background:"#fff",padding:'5px 10px'}}>
        <Box className="mycontainer" sx={{padding:'0 .6rem'}}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'#374f50'}}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.5rem'}}>
                     <LocalPhoneIcon></LocalPhoneIcon><Box >8601736322</Box>
                </Box>
                <Box className="social-media" >
            {
            social_media.map((elem,ind)=>{
              return (
                <a href={elem.href} target="_blank" rel="noreferrer" key={ind}>
              {elem.icon}
            </a>
              )
            })
            }
          </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}
