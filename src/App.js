
import './App.css';
import {useState} from 'react'
import MouseStyle from './mouseStyle/MouseStyle';
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
    <h1>Welcome hosting</h1>
    <h2>hii every one</h2>
    <h2>hii every one</h2>
    <h2>hii every one</h2>
   </div>
  );
}

export default App;
