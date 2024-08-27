
import { Button, Card, FormLabel, Typography } from '@mui/material'
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

export default function Forget({ setLogin }) {
  const [inputType, setInputType] = useState(true);
  const [getOTP,setgetOTP]= useState({
    getOtp:true,
    sendOtp:false,
    pass:false
  })
  // const validate = values => {
  //   const errors = {};

  //   if (!values.mobile) {
  //     errors.mobile = 'Required';
  //   } else if (values.mobile.length < 4) {
  //     errors.mobile = 'Must be 8 characters or more';
  //   }
  //   if (!values.password) {
  //     errors.password = 'Required';
  //   } else if (values.password.length < 4) {
  //     errors.password = 'Invalid password';
  //   }
  //   if (!values.rpassword) {
  //     errors.rpassword = 'Required';
  //   } else if (values.rpassword.length < 4) {
  //     errors.rpassword = 'Invalid password';
  //   }
  //   return errors;
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     username: '',
  //     password: '',
  //   },
  //   validate,
  //   onSubmit: (values) => {
  //     // let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,values);

  //   },
  // });
function handleGetOTP(e){
e.preventDefault()
  setgetOTP({...getOTP,getOtp:false,sendOtp:true});
}
function handleSendOTP(e){
  e.preventDefault()
  setgetOTP({...getOTP,sendOtp:false,pass:true});

}
function handlePass(e){
  e.preventDefault()
}
  return (
    <>
      <Box sx={{ height: "100vh", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgray' }}>
        <Card sx={{ padding: '3rem', minWidth: '30%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'blue' }}><WebhookIcon /> <span>ARUNWEB</span></Box>
          <Typography variant='h5' fontSize={'24px'} fontWeight={600} mt={2} mb={"0px"}>Forget Password</Typography>
          <Typography color={'gray'} fontSize={'12px'} mb={3}>We welcome you please fill your credential.</Typography>
          {
            getOTP.getOtp ?
            <form>
              <Box sx={{ marginBottom: '1rem' }}>
              <Box sx={{ position: 'relative' }}>
                <Input
                  type="number"
                  size="sm"
                  placeholder="Mobile Number"
                  name="mobile"
                  sx={{ padding: '10px', paddingLeft: "30px" }}
                />
                <AccountCircleIcon sx={{ position: 'absolute', left: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} />
              </Box>
              </Box>
              <Box>
              <Button type="submit" variant='contained' sx={{ width: "100%" }} onClick={handleGetOTP}>Get OTP</Button>
            </Box>
            </form>
            :""
          }
          {
            getOTP.sendOtp ? 
            <form>
              <Box sx={{ marginBottom: '1rem' }}>
              <Box class="OTPinput" sx={{display:"flex",width:"100%",gap:"10px",justifyContent:"center",mb:3}}>
            
                      <input type="text" maxlength="1"  inputmode="numeric"/>
                      <input type="text" maxlength="1" inputmode="numeric"/>
                      <input type="text" maxlength="1" inputmode="numeric"/>
                      <input type="text" maxlength="1" inputmode="numeric"/>
                </Box>
              </Box>
              <Box>
              <Button type="submit" variant='contained' sx={{ width: "100%" }} onClick={handleSendOTP}>Send OTP</Button>
            </Box>
            </form>
            :""
          }
          {
            getOTP.pass ? 
            <form>
            <Box sx={{ marginBottom: '1rem' }}>
              <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Password</FormLabel>
                  <Input
                    type="password"
                    size="sm"
                    name="password"
                    placeholder="Password"
                    
                  />
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    size="sm"
                    name="password"
                    placeholder="Password"
                    
                  />
                </Box>
            </Box>
            <Box>
            <Button type="submit" variant='contained' sx={{ width: "100%" }} onSubmit={handlePass}>Submit</Button>
          </Box>
          </form>
          :""
          }
          {/* <form onSubmit={formik.handleSubmit}>
            <Box sx={{ marginBottom: '1rem' }}>
              <Box sx={{ position: 'relative' }}>
                <Input
                  type="number"
                  size="sm"
                  placeholder="Mobile Number"
                  name="mobile"
                  sx={{ padding: '10px', paddingLeft: "30px" }}
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                />
                <AccountCircleIcon sx={{ position: 'absolute', left: '5px', top: '50%', transform: 'translate(0,-50%)', color: 'gray' }} />
              </Box>
              {formik.errors.mobile ? <small>{formik.errors.mobile}</small> : null}
            </Box>
              {
                !getOTP ? 
                ""
                : 
                <form>
                   <Box class="OTPinput" sx={{display:"flex",width:"100%",gap:"10px",justifyContent:"center",mb:3}}>
                      <input type="text" maxlength="1"  inputmode="numeric"/>
                      <input type="text" maxlength="1" inputmode="numeric"/>
                      <input type="text" maxlength="1" inputmode="numeric"/>
                      <input type="text" maxlength="1" inputmode="numeric"/>
                  </Box>
                </form>
              }
            <Box>
              <Button type="submit" variant='contained' sx={{ width: "100%" }}>Get OTP</Button>
            </Box>
          </form> */}
          <Box>
            <Typography fontSize={"14px"} my={4} textAlign={'center'}>Go to<Link to={'/login'}>Login</Link> </Typography>
          </Box>
        </Card>
      </Box>
    </>
  )
}
