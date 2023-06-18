import React, { useState } from 'react'
import './EditBox.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch } from 'react-redux';
import {editBoard} from '../../redux/slices/boardSlice'
function EditBox({setEditBox, editBox,id, color,title}) {
    const dispatch = useDispatch();
    const [rename, setRename] = useState('');
    const handleChange = (e) => {
        setRename(e.target.value)
    }
    const [open, setOpen] = React.useState(false);

  

  const handleClose = () => {
    setOpen(false);
    setEditBox(false)
    setRename('');
  };
  return (
    <div className='EditBox'>
        
         <div>
      <Dialog open={editBox} onClose={handleClose}>
        <DialogTitle>Give a new Name to you board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New board heading"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {(rename !== '') ? (

          
          <Button variant='outlined' className='Save_Changes_btn' onClick={() => {
                dispatch(editBoard({id, rename}))
                 setEditBox(false)
                 setRename('');
             }}>Save changes</Button>
           ): (
            <Button disabled style={{opacity:'50%', cursor:'default'}} variant='outlined' className='Save_Changes_btn'>Save Changes</Button>
           )}
        </DialogActions>
      </Dialog>
    </div>
    </div>
  )
}

export default EditBox