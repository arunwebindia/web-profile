
import { useState } from 'react'
import Sidebar from './common/Sidebar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
        <Sidebar setOpen={setOpen} open={open} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
