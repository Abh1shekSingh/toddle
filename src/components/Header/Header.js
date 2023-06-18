import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import AddIcon from '@mui/icons-material/Add';
import DilaougeBox from '../DialougeBox/DialougeBox';
function Header() {
  
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div className='Header'>
      <img src = {logo} alt ='logo' />
      <input type='text' placeholder='Search...' />
      {/* <button ><AddIcon />Create new board</button> */}
      <button onClick={() => handleClick()}><AddIcon />Create new board</button>
      {open && (
        <DilaougeBox open = {open} setOpen = {setOpen} />
      )}
    </div>
  )
}

export default Header