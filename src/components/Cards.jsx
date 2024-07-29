import React from 'react'

export default function Cards(props) {
  return (
    <span className="custom-cards">
        <img src={props?.src} alt="" />
        <h3>{props?.name}</h3>
        <span>{props?.progress}</span>
        {props.children}
    </span>
  )
}