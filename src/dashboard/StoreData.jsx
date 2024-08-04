import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function Notification() {
    const [open, setOpen] = useState(false);
    const [del,setDel] = useState(false);
    const [data,setData] = useState({});
    const handleOpen = (elem) =>{ setOpen(true);setData(elem)};
    const handleClose = () => setOpen(false);
    const tableStyle ={
        table:{
            border:'1px solid #eef6ff8f',padding:'1rem',borderCollapse:'collapse',background:'#fff',borderRadius:'.2rem',overflow:'hidden',width:'100%'
        },
        thead:{
            background:'#04041a',color:"#fff"
        },
        th:{
            padding:'1rem'
        },
        td:{
            padding:'1rem',color:'#151c1d'
        },
        tr:{
            border:'.3px solid lightgray'
        }
    }
    let notifi =[
        {
            name:'Arun Singh',
            email:'email.34@gmail.com',
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, illo sed, rerum pariatur doloremque commodi reprehenderit, minus debitis numquam amet maiores a cumque veniam corrupti minima quod?"
        },
        {
            name:'Arun Singh',
            email:'arunsingh@gmail.com',
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, amet maiores a cumque veniam corrupti minima quod?"
        },
        {
            name:'Arun Singh',
            email:'email.34@gmail.com',
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, illo sed, rerum pariatur doloremque commodi reprehenderit, minus debitis numquam amet maiores a cumque veniam corrupti minima quod?"
        },
        {
            name:'Arun Singh',
            email:'arunsingh@gmail.com',
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus nostrum optio, amet maiores a cumque veniam corrupti minima quod?"
        }
        
    ]
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: "100%",
        bgcolor: 'background.paper',
       borderRadius:'.2rem',
        boxShadow: 24,
        p: 2,
      };
  return (
    <>
    <Box sx={{height:'400px',overflow:'auto'}}>

    <Box sx={{margin:"auto",width:'100%',boxShadow:'sm'}}>
    <table style={tableStyle.table}>
        <thead style={tableStyle.thead}>
        <tr>
        <th style={tableStyle.th}>S.No.</th>
        <th style={tableStyle.th}>Name</th>
        <th style={tableStyle.th}>Message</th>
        <th style={tableStyle.th}>Time</th>
        <th style={tableStyle.th}>Action</th>
        </tr>
        </thead>
        <tbody>
            {
                notifi.map((elem,ind)=>{
                    return (<tr style={tableStyle.tr}>
                        <td style={tableStyle.td}>{ind+1}</td>
                        <td style={tableStyle.td}>{elem.name}</td>
                        <td style={tableStyle.td}>{elem.message?.slice(0,20)}...</td>
                        <td style={tableStyle.td}>Time</td>
                        <td><Button onClick={()=>handleOpen(elem)}><OpenInNewIcon/></Button><Button sx={{color:"red"}} onClick={()=>setDel(true)}><DeleteIcon/></Button></td>
                    </tr>)
                })
            }
        </tbody>
    </table>
    </Box>
    
    </Box>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <Typography sx={{textAlign:'start',fontSize:'12px',mb:3}}>
      time : 6/7/2024
      </Typography>
      <Typography id="modal-modal-title" variant="h4" sx={{}}>
       {data.name}
      </Typography>
      <Typography id="modal-modal-description" variant="body2" sx={{ mt: 1,}}>
        {data.message}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt:4}}>
      {data.email}
      </Typography>
     <Box sx={{textAlign:'end'}}>
     <Button sx={{marginLeft:'auto'}} onClick={handleClose} variant="contained">OK</Button> 
     </Box>
    </Box>
  </Modal>

  <Modal
    open={del}
    onClose={()=>setDel(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
   
      <Typography id="modal-modal-title" variant="h6" sx={{ mb: 3,textAlign:'center'}}>
       Are You sure !
      </Typography>
      
     <Box sx={{textAlign:'center'}}>
     <Button sx={{marginLeft:'auto'}} onClick={()=>setDel(false)} variant="contained" color="error">Delete</Button> 
     </Box>
    </Box>
  </Modal>
</>
)
}











// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Textarea from '@mui/joy/Textarea';
// import axios from 'axios'
// export default function StoreData() {
//     const [data,setData] = useState("");
//     function handleSubmit(e){
//         e.preventDefault();
//         let obj ={
//             senddata:data
//         }
//         console.log(obj.senddata)
//         axios.post("https://testingnode-ax2o.onrender.com/sendData",obj).then((res)=>{console.log(res)});
//     }
//   return (
//     <Box sx={{}}>
//     <form action="" onSubmit={handleSubmit} method='POST'>
//         <Box py={3}><Textarea placeholder="Type anything …" sx={{width:'100%'}} minRows={4} name='' value={data} onChange={(e)=>setData(e.target.value)}/></Box>
//         <Button variant="contained" sx={{display:'block',marginLeft:"auto"}} type='submit'>Save</Button>
//     </form>
// </Box>
//   )
// }
