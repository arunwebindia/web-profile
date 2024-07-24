
import { useState,useEffect } from 'react'
import Sidebar from './common/Sidebar';
import { Box } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Container from './ProfileAllPage/Container';
import TaskHome from './ProfileAllPage/TaskHome';
import Programming from './ProfileAllPage/Programming';
import JScomponent from './ProfileAllPage/JScomponent';
import Ui from './ProfileAllPage/Ui';
function App() {
  const [open, setOpen] = useState(true);
  let [profile,setProfile] = useState(true);
  
  return (
    
    <BrowserRouter>
    <Box >
 
    </Box>
        <Sidebar setOpen={setOpen} open={open} profile={profile} setProfile={setProfile}/>
        <Routes>
          <Route path='/' element={<Container profile={profile} setProfile={setProfile}/>}>
                <Route path="/taskHome" element={<TaskHome/>}></Route>
                <Route path="/programming" element={<Programming/>}></Route>
                <Route path="/jscomponent" element={<JScomponent/>}></Route>
                <Route path="/ui" element={<Ui/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
