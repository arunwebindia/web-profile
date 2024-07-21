
import { useState,useEffect } from 'react'
import Sidebar from './common/Sidebar';
import { Box } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Container from './ProfileAllPage/Container';
function App() {
  const [open, setOpen] = useState(true);

  
  return (
    
    <BrowserRouter>
    <Box >
 
    </Box>
        <Sidebar setOpen={setOpen} open={open} />
        <Routes>
          <Route path='/' element={<Container/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
