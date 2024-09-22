
import Input from '@mui/joy/Input';
import { Box } from "@mui/system";
import React from "react";
import Button from '@mui/joy/Button';
import { Typography } from '@mui/material';
import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';
import { useFormik } from 'formik';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/system/Unstable_Grid/Grid';

export default function Contact() {
  const notify = () => toast.success('Thank you for contact me.', {
    position: "top-right"});
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length < 15) {
      errors.message = 'Must be 15 characters or more';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values,{resetForm} )=> {
      const fetchformdata = async ()=>{
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/contact`,values);
        resetForm();
        if(res.status === 200){
          notify();
        }
      }
      fetchformdata();
    },
  });


  return (
    <Box sx={{ padding:'30px 0px'}}>
      <Box className="mycontainer" p={4}>
        <Grid container spacing={6} sx={{padding:"10px",background:"#fffdf3",borderRadius:'3px'}}>
        <Grid item lg={6} sx={{display:'flex',alignItems:"start",flexDirection:'column',justifyContent:'center',gap:".8rem"}}>
            <Typography variant='h5' sx={{fontSize:"2em",fontWeight:"700",color:'#88741b',pb:4}}>
              Let's talk on<br />  something <Box sx={{display:'inline-block',fontSize:"1.2em",color:'#ef6c00'}}>Great</Box> <br /> together.
            </Typography>
            
            <Box sx={{display:'flex',gap:'10px',alignItems:'center',fontSize:"18px"}}>
              <Avatar sx={{backgroundColor:'#88741b'}}>
              <LocalPhoneIcon></LocalPhoneIcon>
              </Avatar>
            <Box sx={{display:'inline-block'}}>8601736322</Box>
            </Box>
            <Box sx={{display:'flex',gap:'10px',alignItems:'center',fontSize:"18px"}}>
            <Avatar sx={{backgroundColor:'#88741b'}}><MailOutlineIcon></MailOutlineIcon></Avatar><Box sx={{display:'inline-block'}}>hgsarun@gmail.com</Box>
            </Box>
            <Box sx={{display:'flex',gap:'10px',alignItems:'center',fontSize:"18px"}}>
              <Avatar sx={{backgroundColor:'#88741b'}}>
              <HomeIcon></HomeIcon>
              </Avatar>
            <Box sx={{display:'inline-block'}}>Mansarovar park, Bamheta Ghaziyabad</Box>
            </Box>
          </Grid>
          <Grid item lg={6} flexGrow={1}>
            <Box sx={{ padding: "1.5rem",backgroundColor:'#685604', border: ".3px solid #fff", borderRadius: '.5rem',}}>
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem',color:'#ffffffa3',fontSize:'18px',fontWeight:'500'}}>Name</FormLabel>
                  <Input
                    type="text"
                    size="lg"
                    name="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? <small>{formik.errors.name}</small> : null}
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem',color:'#ffffffa3',fontSize:'18px',fontWeight:'500'}}>Email</FormLabel>
                  <Input
                    type="email"
                    size="lg"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? <small>{formik.errors.email}</small> : null}
                </Box>
                <Box sx={{ marginBottom: '1rem'}}>
                  <FormLabel sx={{marginBottom:'.5rem',color:'#ffffffa3',fontSize:'18px',fontWeight:'500'}}>Your message</FormLabel>
                  <Textarea minRows={3} size="lg"  onChange={formik.handleChange} name="message" placeholder='Your message...'
                    value={formik.values.message}/>
                    {formik.errors.message ? <small>{formik.errors.message}</small> : null}
                </Box>
                <Box sx={{textAlign:'end'}}>
                  <Button type="submit" className='contactbtn' sx={{width:'100%',backgroundColor:"#fff4b4",color:'#685604'}}   size='lg'>SUBMIT</Button>
                </Box>
              </form>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
      <ToastContainer />
    </Box>
  );
}