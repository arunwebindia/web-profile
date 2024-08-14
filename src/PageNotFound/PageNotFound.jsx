import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div>
        <h1>Page not found or Working on this</h1>
        Please go 
    <Link to='/'>HOME</Link>
    </div>
  )
}