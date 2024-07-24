
import React from "react";
import { Box } from "@mui/system";
import Banner from './Banner';
import Contact from "./Contact";
import Education from "./Education";
import Skill from './Skill'
import Project from './Project'
import About from "./About";
import { Outlet, Route } from "react-router-dom";

export default function Container(props) {
    return (
        <Box
            sx={{ marginLeft: "250px", width: "calc(100% - 250px)", height: "100vh", overflow: 'auto', position: 'relative' }}
className="home"
        >
            {
                props.profile ? 
                <>
                <Banner></Banner>
        <About/>
        <Education/>
        <Skill></Skill>
        <Project></Project>
                </>
                :
                <>
                <Outlet/>
                </>
            }
        
        <Contact/>
        </Box>
    )
}
