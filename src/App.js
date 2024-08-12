import { useState} from 'react'
import TaskHome from './myTask/TaskHome';
import Programming from './myTask/Programming';
import JScomponent from './myTask/JScomponent';
import Solution from './myTask/Solution';
import PageNotFound from './PageNotFound/PageNotFound';
import Profile from './profile/Profile';
import Contact from './profile/Contact';
import Ui from './myTask/Ui';
import Admin from './dashboard/Admin';
import Login from './dashboard/Login';
import Sidebar from './common/Sidebar';
import { Box } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [open, setOpen] = useState(true);
  let [profile,setProfile] = useState(true);
  let [login,setLogin] =useState(false)
  let [programming,setProgramming] =useState({
    ques:"",
    ansText:"",
    ansValue:''
  })
  console.log('procenet env',process.env.REACT_APP_BASE_URL)
  return (
    <BrowserRouter>
      <Sidebar setOpen={setOpen} open={open} profile={profile} setProfile={setProfile}/>
      <Box sx={{ marginLeft: "250px", width: "calc(100% - 250px)", height: "100vh", overflow: 'auto', position: 'relative'}} className="home">
        <Routes>
          <Route path='/' element={<Profile/>}></Route> 
          <Route path='/task' element={<TaskHome/>}></Route> 
          <Route path="/task/programming" element={<Programming setProgramming={setProgramming}/>}></Route>
          <Route path='/task/programming/solution' element={<Solution programming={programming}/>}></Route>
          <Route path="/task/jscomponent" element={<JScomponent/>}></Route>
          <Route path="/task/ui" element={<Ui/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/admin" element={login ? <Admin setLogin={setLogin}/> : <Login setLogin={setLogin}/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route> 
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
