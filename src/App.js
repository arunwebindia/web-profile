import { useState} from 'react'
import TaskHome from './javascript/TaskHome';
import Programming from './javascript/Programming';
import JScomponent from './javascript/JScomponent';
import Solution from './javascript/Solution';
import PageNotFound from './PageNotFound/PageNotFound';
// import Contact from './components/Contact';
import Contact from './contact/Contact';
import Ui from './javascript/Ui';
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
import AdminProfile from './dashboard/profile/AdminProfile';
import TypeMaster from './project/TypingMaster';
import MemoryGame from './project/MemoryGame';

function App() {
  let [login,setLogin] =useState(false);
  let [loginActive,setLogInActive] =useState(false);
  const [token,setToken] = useState()
  let [programming,setProgramming] =useState({
    ques:"",
    ansText:"",
    ansValue:''
  })
  if(token){
    return <Login></Login>
  }
  else{
  return (
    <BrowserRouter>
      <Box sx={{top:0,position:'sticky',zIndex:9}}>
        {
          loginActive ? "" :
          <>
          <Header/>
          <Navbar setLogin={setLogin} login={login} setLogInActive={setLogInActive}/>
          </>
        }
        
      </Box>
        <Routes>
          <Route path='/login' element={<Login setLogin={setLogin} setLogInActive={setLogInActive}></Login> }></Route>
          <Route path='/profile' element={login ?<AdminProfile setLogin={setLogin}></AdminProfile> : <Login></Login> }></Route>
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
          <Route path="/project/5" element={<TypeMaster/>}></Route>
          <Route path="/project/6" element={<MemoryGame/>}></Route>
          <Route path="/admin" element={login ? <Admin setLogin={setLogin}/> : <Login></Login>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route> 
        </Routes>
        {
          loginActive ? "" :<Footer/>
        }
        
       
    </BrowserRouter>
  );
}
    
}
export default App;
