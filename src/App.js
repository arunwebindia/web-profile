
import { useState } from 'react'
import Sidebar from './common/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Container from './ProfileAllPage/Container';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
        <Sidebar setOpen={setOpen} open={open} />
        <Routes>
          <Route path='/' element={<Container/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
