
import { Button, Card, Typography } from '@mui/material'
import { Box, fontWeight, width } from '@mui/system'
import Input from '@mui/joy/Input';
import WebhookIcon from '@mui/icons-material/Webhook';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export default function Register({ setLogin }) {
  const [inputType, setInputType] = useState(true)
  const validate = values => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 4) {
      errors.username = 'Must be 8 characters or more';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 4) {
      errors.password = 'Invalid password';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, values);
      if (res.data) {
        setLogin(true);
      }
      else {
        setLogin(false);
      }
    },
  });

  return (
    <>
      <Box sx={{ height: "100vh", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgray' }}>
        <Card sx={{ padding: '3rem', minWidth: '30%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'blue' }}><WebhookIcon /> <span>ARUNWEB</span></Box>
          <Typography variant='h5' fontSize={'24px'} fontWeight={600} mt={2} mb={"0px"}>Login to your account</Typography>
          <Typography color={'gray'} fontSize={'12px'} mb={3}>We welcome you please fill your credential.</Typography>
          <form onSubmit={formik.handleSubmit}>

            <Box sx={{ marginBottom: '1rem' }}>
              <Box sx={{ position: 'relative' }}>
                <Input
                  type="text"
                  size="sm"
                  placeholder="Username"
                  name="username"
                  sx={{ padding: '10px', paddingLeft: "30px" }}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <AccountCircleIcon sx={{ position: 'absolute', left: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} />
              </Box>

              {formik.errors.username ? <small>{formik.errors.username}</small> : null}
            </Box>
            <Box sx={{ marginBottom: '1rem' }}>
              <Box sx={{ position: 'relative' }}>
                <Input
                  type="text"
                  size="sm"
                  placeholder="secretName"
                  name="secretName"
                  sx={{ padding: '10px', paddingLeft: "30px" }}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <AccountCircleIcon sx={{ position: 'absolute', left: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} />
              </Box>
              {formik.errors.username ? <small>{formik.errors.username}</small> : null}
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
              <Box sx={{ position: 'relative' }}>
                <Input
                  type={inputType ? 'password' : 'text'}
                  size="sm"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  sx={{ padding: '10px', paddingLeft: "30px" }}
                  onChange={formik.handleChange}
                />
                <LockIcon sx={{ position: 'absolute', left: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} />
                {
                  inputType ?
                    <VisibilityOffIcon sx={{ position: 'absolute', right: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} onClick={() => { setInputType(!inputType) }} />
                    :
                    <VisibilityIcon sx={{ position: 'absolute', right: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} onClick={() => { setInputType(!inputType) }} />
                }
              </Box>
              {formik.errors.password ? <small>{formik.errors.password}</small> : null}
            </Box>
            <Box sx={{ marginBottom: '1rem' }}>
            <Box sx={{ position: 'relative' }}>
              <Input
                type={inputType ? 'password' : 'text'}
                size="sm"
                name="cpassword"
                placeholder="Confirm password"
                value={formik.values.password}
                sx={{ padding: '10px', paddingLeft: "30px" }}
                onChange={formik.handleChange}
              />
              <LockIcon sx={{ position: 'absolute', left: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} />
              {
                inputType ?
                  <VisibilityOffIcon sx={{ position: 'absolute', right: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} onClick={() => { setInputType(!inputType) }} />
                  :
                  <VisibilityIcon sx={{ position: 'absolute', right: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} onClick={() => { setInputType(!inputType) }} />
              }
            </Box>
            {formik.errors.password ? <small>{formik.errors.password}</small> : null}
          </Box>
         
          <Box>
            <Button type="submit" variant='contained' sx={{ width: "100%" }}>Submit</Button>
          </Box>
        </form>
        <Box>
          <Typography fontSize={"14px"} my={4} textAlign={'center'}>I remember my password<Link to={'/login'}>Login now</Link> </Typography>
        </Box>
      </Card>
    </Box >
    </>
  )
}