// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import DeleteIcon from '@mui/icons-material/Delete';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';



// export default function Notification() {
//     const [open, setOpen] = useState(false);
//     const [del,setDel] = useState(false);
//     const [data,setData] = useState({});
//     const handleOpen = (elem) =>{ setOpen(true);setData(elem)};
//     const handleClose = () => setOpen(false);
 
//     let notifi =[
//         {
//             name:'Arun Singh',
//             email:'email.34@gmail.com',
//             message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, illo sed, rerum pariatur doloremque commodi reprehenderit, minus debitis numquam amet maiores a cumque veniam corrupti minima quod?"
//         },
//         {
//             name:'Arun Singh',
//             email:'arunsingh@gmail.com',
//             message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, amet maiores a cumque veniam corrupti minima quod?"
//         },
//         {
//             name:'Arun Singh',
//             email:'email.34@gmail.com',
//             message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, illo sed, rerum pariatur doloremque commodi reprehenderit, minus debitis numquam amet maiores a cumque veniam corrupti minima quod?"
//         },
//         {
//             name:'Arun Singh',
//             email:'arunsingh@gmail.com',
//             message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, amet maiores a cumque veniam corrupti minima quod?"
//         }
        
//     ]

//   return (
//     <>
//     <Box sx={{height:'400px',overflow:'auto'}}>

//     <Box sx={{margin:"auto",width:'100%',boxShadow:'sm'}} className="contact-msg-wrapper">
//     <table>
//         <thead>
//         <tr>
//         <th>S.No.</th>
//         <th>Name</th>
//         <th>Message</th>
//         <th>Time</th>
//         <th>Action</th>
//         </tr>
//         </thead>
//         <tbody>
//             {
//                 notifi.map((elem,ind)=>{
//                     return (<tr>
//                         <td>{ind+1}</td>
//                         <td>{elem.name}</td>
//                         <td>{elem.message?.slice(0,50)}...</td>
//                         <td>Time</td>
//                         <td><Button onClick={()=>handleOpen(elem)}><OpenInNewIcon/></Button><Button sx={{color:"red"}} onClick={()=>setDel(true)}><DeleteIcon/></Button></td>
//                     </tr>)
//                 })
//             }
//         </tbody>
//     </table>
//     </Box>
    
//     </Box>
//     <Modal
//     open={open}
//     onClose={handleClose}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
//   >
//     <Box className ="modal-wrapper">
//     <Typography sx={{textAlign:'start',fontSize:'12px',mb:3}}>
//       time : 6/7/2024
//       </Typography>
//       <Typography id="modal-modal-title" variant="h4" sx={{}}>
//        {data.name}
//       </Typography>
//       <Typography id="modal-modal-description" variant="body2" sx={{ mt: 1,}}>
//         {data.message}
//       </Typography>
//       <Typography id="modal-modal-description" sx={{ mt:4}}>
//       {data.email}
//       </Typography>
//      <Box sx={{textAlign:'end'}}>
//      <Button sx={{marginLeft:'auto'}} onClick={handleClose} variant="contained">OK</Button> 
//      </Box>
//     </Box>
//   </Modal>

//   <Modal
//     open={del}
//     onClose={()=>setDel(false)}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
//   >
//     <Box className="modal-wrapper"  bgcolor= 'background.paper'
//  borderRadius='.2rem'
//   boxShadow={24}
//   p={2}>
//       <Typography id="modal-modal-title" variant="h6" sx={{ mb: 3,textAlign:'center'}}>
//        Are You sure !
//       </Typography>
//      <Box sx={{textAlign:'center'}}>
//      <Button sx={{marginLeft:'auto'}} onClick={()=>setDel(false)} variant="contained" color="error">Delete</Button> 
//      </Box>
//     </Box>
//   </Modal>
// </>
// )
// }
