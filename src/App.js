import { useState} from 'react'
import TaskHome from './myTask/TaskHome';
import Programming from './myTask/Programming';
import JScomponent from './myTask/JScomponent';
import Solution from './myTask/Solution';
import PageNotFound from './PageNotFound/PageNotFound';
import Contact from './profile/Contact';
import Ui from './myTask/Ui';
import Admin from './dashboard/Admin';

import { Box } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ProjectIndex from './project/ProjectIndex';
import JavascriptCompiler from './project/JavascriptCompiler';
import HtmlCompiler from './project/HtmlCompiler';
import Donate from './project/Donate';
import Navbar from './common/Navbar';
import Header from './common/Header';
import EmailExtractor from './project/EmailExtractor';
import About from './about/About';
import Home from './Home/Home';
import Footer from './footer/Footer';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Forget from './authentication/Forget'
function App() {
  let [login,setLogin] =useState(false)
  let [programming,setProgramming] =useState({
    ques:"",
    ansText:"",
    ansValue:''
  })

  return (
    <BrowserRouter>
      <Box sx={{top:0,position:'sticky',zIndex:9}}>
        <Header/>
        <Navbar setLogin={setLogin} login={login}/>
      </Box>
        <Routes>
          <Route path='/login' element={<Login setLogin={setLogin}></Login> }></Route>
          <Route path='/register'  element={<Register setLogin={setLogin}/>}></Route>
          <Route path='/forget'  element= {<Forget setForgot={setLogin}/>}></Route>
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/about' element={<About/>}></Route> 
          <Route path='/task' element={<TaskHome/>}></Route> 
          <Route path="/task/programming" element={<Programming setProgramming={setProgramming}/>}></Route>
          <Route path='/task/programming/solution' element={<Solution programming={programming}/>}></Route>
          <Route path="/task/jscomponent" element={<JScomponent/>}></Route>
          <Route path="/task/ui" element={<Ui/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/project" element={<ProjectIndex/>}></Route>
          <Route path="/project/1" element={<JavascriptCompiler/>}></Route>
          <Route path="/project/2" element={<HtmlCompiler/>}></Route>
          <Route path="/project/3" element={<Donate/>}></Route>
          <Route path="/project/4" element={<EmailExtractor/>}></Route>
          <Route path="/admin" element={<Admin setLogin={setLogin}/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route> 
        </Routes>
        <Footer/>
       
    </BrowserRouter>
  );
}
export default App;
