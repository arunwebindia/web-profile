import { Grid } from "@mui/material";
import Input from '@mui/joy/Input';
import { Box } from "@mui/system";
import React from "react";
import Button from '@mui/joy/Button';
import { Typography } from '@mui/material';
import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';
import { useFormik } from 'formik';

export default function Contact() {
  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.nusername = 'Required';
    } 
    else if(values.username.length < 4) {
      errors.username = 'Must be 5 characters or more';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <8) {
      errors.password = 'Must be 50 characters or more';
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
    onSubmit: values => {
      console.log(values)
    },
  });


  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="contact">
      <Box className="section-wrapper">
        <Grid container spacing={6} m={0} className="contact-us" width="100%">
          <Grid lg={7} sx={{display:'flex',alignItems:"start",flexDirection:'column',justifyContent:'center',gap:".8rem"}}>
            <h1>Get in Touch</h1>
            <Typography sx={{textAlign:'start'}}>

           If you have any suggestion or If you any query please contact me.
            </Typography>
          </Grid>
          <Grid lg={5} flexGrow={1}>
            <Box sx={{ padding: "1.5rem",backgroundColor:'#b9dcff33', border: ".3px solid #fff", borderRadius: '.5rem',}} boxShadow={"sm"}>
              <form onSubmit={formik.handleSubmit} action="https://formsubmit.co/el/numaki" method="POST" target="_blank">
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
     
    </Box>
  );
}