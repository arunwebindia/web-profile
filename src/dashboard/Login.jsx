import { Grid } from "@mui/material";
import Input from '@mui/joy/Input';
import { Box } from "@mui/system";
import React from "react";
import Button from '@mui/joy/Button';
import { Typography } from '@mui/material';
import FormLabel from '@mui/joy/FormLabel';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Login({setLogin}) {
  const notify = () => toast.error('Sorry we are getting errors', {
    position: "top-right"});
  const validate = values => {
    const errors = {};
   
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length <4) {
      errors.username = 'Must be 8 characters or more';
    }
    if (!values.username) {
      errors.email = 'Required';
    } else if (values.password.length < 4) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: async(values) => {
      let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,values);
      if(res.data){
        setLogin(true);
      }
      else{
        notify()
        setLogin(false);
      }
    },
  });


  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="contact">
      <Box className="section-wrapper">
        <Grid container spacing={6} m={0} className="contact-us" width="100%">
          <Grid lg={7} sx={{display:'flex',alignItems:"start",flexDirection:'column',justifyContent:'center',gap:".8rem"}}>
            <h1>Admin Panel</h1>
            <Typography sx={{textAlign:'start'}}>
            Welcome to my admin panel if you want to access this please login or contact us.
           
            </Typography>
          </Grid>
          <Grid lg={5} flexGrow={1}>
            <Box sx={{ padding: "1.5rem",backgroundColor:'#b9dcff33', border: ".3px solid #fff", borderRadius: '.5rem',}} boxShadow={"sm"}>
              <form onSubmit={formik.handleSubmit}>
                
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Username</FormLabel>
                  <Input
                    type="text"
                    size="sm"
                    placeholder="Username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username ? <small>{formik.errors.username}</small> : null}
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Password</FormLabel>
                  <Input
                    type="password"
                    size="sm"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password ? <small>{formik.errors.password}</small> : null}
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