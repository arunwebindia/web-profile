import { Grid } from "@mui/material";
import Input from '@mui/joy/Input';
import { Box } from "@mui/system";
import React from "react";
import Button from '@mui/joy/Button';

import Textarea from "@mui/joy/Textarea";
import FormLabel from '@mui/joy/FormLabel';


export default function Contact() {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#b9dcff33', }} id="contact">
      <Box className="section-wrapper">
        <Grid container spacing={2}>
          <Grid lg={8}>
            <h1>Contact</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad
            dignissimos iusto expedita, quidem quas odit, enim ea cupiditate iste
            esse deleniti facilis tempora accusantium, ipsam ex error ullam impedit.
          </Grid>
          <Grid lg={4}>
            <Box sx={{ padding: "1.5rem", maxWidth: "450px", border: ".3px solid #fff", borderRadius: '.5rem', background: '#fff' }} boxShadow={"sm"}>
              <form action="">
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    size="sm"
                    placeholder="Name"
                  />
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    size="sm"
                    placeholder="Email"
                  />
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                  <FormLabel>Your message</FormLabel>
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