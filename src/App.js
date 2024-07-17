
import './App.css';
import {useState} from 'react'
import MouseStyle from './mouseStyle/MouseStyle';
import Sidebar from './common/Sidebar';
function App() {
  let [mousePos,setMousePos] =useState({x:0,y:0})
  function handleMouse(e){
    let x = e.clientX;
    let y = e.clientY;
   setMousePos({...mousePos,x:x,y:y})
  }
  return (
   <div onMouseMove={handleMouse}>
    <MouseStyle pos={{x:mousePos.x,y:mousePos.y}}></MouseStyle>
   <Sidebar/>
   </div>
  );
}

export default App;
