import { Grid } from "@mui/material";
import Input from '@mui/joy/Input';
import { Box } from "@mui/system";
import React from "react";
import Button from '@mui/joy/Button';
import { Typography } from '@mui/material';

import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';


export default function Contact() {
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
              <form action="">
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Name</FormLabel>
                  <Input
                    type="text"
                    size="sm"
                    placeholder="Name"
                  />
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Email</FormLabel>
                  <Input
                    type="email"
                    size="sm"
                    placeholder="Email"
                  />
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel sx={{marginBottom:'.5rem'}}>Your message</FormLabel>
                  <Textarea minRows={2} size="sm" />
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