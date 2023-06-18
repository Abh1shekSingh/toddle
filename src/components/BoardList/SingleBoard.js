import React, { useState } from 'react'
import './BoardList.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteBoard} from '../../redux/slices/boardSlice'
import EditBox from '../EditBox/EditBox';
function SingleBoard({color, title, id}) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [editBox, setEditBox] = useState(false)
  const handleEditClick = () => {
    setEditBox(!editBox);
    handleClose()
  }
  return (
    <div>
     <div className='card' >
        <div className = 'card_inner'>
          <div
            className='color-box'
            style={{backgroundColor:`${color}`}}
          />
          <div className='card_content'>
            <Link style={{textDecoration:'none'}} to ={`/board/${id}`}><h3>{title}</h3></Link>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleEditClick()}><BorderColorIcon /> Edit</MenuItem>
                <MenuItem onClick={() => dispatch(deleteBoard(id))} ><DeleteIcon /> Delete</MenuItem>
              </Menu>
            </div>
            {editBox && (
              <EditBox setEditBox = {setEditBox} editBox = {editBox} id = {id} color = {color} title = {title} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBoard