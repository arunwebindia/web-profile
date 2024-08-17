import { Grid } from "@mui/material";
import Input from '@mui/joy/Input';
import { Box } from "@mui/system";
import React from "react";
import Button from '@mui/joy/Button';
import { Typography } from '@mui/material';
import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';
import { useFormik } from 'formik';
import axios from "axios";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

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
        if(res.status === 200){
          notify();
          resetForm();
        }
      }
      fetchformdata();

    },
  });


  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="contact">
      <Box className="section-wrapper">
        <Grid container spacing={6} m={0} className="contact-us" width="100%">
          <Grid item lg={7} sx={{display:'flex',alignItems:"start",flexDirection:'column',justifyContent:'center',gap:".8rem"}}>
            <h1>Get in Touch</h1>
            <Typography sx={{textAlign:'start'}}>

           If you have any suggestion or If you any query please contact me.
            </Typography>
          </Grid>
          <Grid item lg={5} flexGrow={1}>
            <Box sx={{ padding: "1.5rem",backgroundColor:'#b9dcff33', border: ".3px solid #fff", borderRadius: '.5rem',}} boxShadow={"sm"}>
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Name</FormLabel>
                  <Input
                    type="text"
                    size="sm"
                    name="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? <small>{formik.errors.name}</small> : null}
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Email</FormLabel>
                  <Input
                    type="email"
                    size="sm"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? <small>{formik.errors.email}</small> : null}
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Your message</FormLabel>
                  <Textarea minRows={3} size="sm"  onChange={formik.handleChange} name="message"
                    value={formik.values.message}/>
                    {formik.errors.message ? <small>{formik.errors.message}</small> : null}
                </Box>
                <Box>
                  <Button type="submit">Submit</Button>
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