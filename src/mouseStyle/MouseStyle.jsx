import React from 'react'
import styled from 'styled-components'

let Mouse = styled.div`
display:inline-block;
padding:8px;
border:.3px solid lightgray;
border-radius:50%;
position:absolute;
left:${(props)=>props.x}px;
top:${(props)=>props.y}px;
transform:translate(-50%,-50%);
cursor:pointer;
`

export default function MouseStyle(props) {

  return (
    <Mouse x={props.pos.x} y= {props.pos.y}>
        .
    </Mouse>
  )
}
