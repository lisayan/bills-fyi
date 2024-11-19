import React from "react"
import logo from '../../images/logo_updated.jpeg'

export default function Logo(props) {
  return (
    <img 
      src={logo} 
      alt="logo" 
      style={{ width: '220px', height: '50px' }} 
      {...props}
    />
  )
}
