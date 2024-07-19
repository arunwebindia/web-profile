
import React from "react";
import { Box } from "@mui/system";
import Banner from './Banner';
import Contact from "./Contact";
import Education from "./Education";
import Skill from './Skill'
import Project from './Project'
import About from "./About";
export default function Container() {
    return (
        <Box
            sx={{ marginLeft: "250px", width: "calc(100% - 250px)", height: "100vh", overflow: 'auto', position: 'relative' }}
className="home"
        >
        <Banner></Banner>
        <About/>
        <Education/>
        <Skill></Skill>
        <Project></Project>
        <Contact/>
        </Box>
    )
}
