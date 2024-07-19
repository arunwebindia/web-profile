
import React from "react";
import { Box } from "@mui/system";
import Banner from './Banner';
import Contact from "./Contact";


export default function Container() {
    return (
        <Box
            sx={{ marginLeft: "250px", width: "calc(100% - 250px)", height: "100vh", overflow: 'auto', position: 'relative' }}
className="home"
        >
        <Banner></Banner>
        <Contact/>
        </Box>
    )
}
