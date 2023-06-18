import React, { useState } from 'react'
import './PostList.css'
import { editPost } from '../../redux/slices/boardSlice'
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';


function EditPost({heading, parentID, id, desc, editOpen, setEditOpen}) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [renameHeading, setRenameHeading] = useState('')
    const [renameDesc, setRenameDesc] = useState('')
  

  const handleClose = () => {
    setOpen(false);
    setEditOpen(false)
    setRenameDesc('');
    setRenameHeading('');
  };

    
    const [image, setImage] = useState();


    const handleRenameHeading = (e) => {
        setRenameHeading(e.target.value)
    }
    const handleRenameDesc = (e) => {
        setRenameDesc(e.target.value)
    }

    const handleImagePick = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div>
    
            
            <div>
         
      <Dialog open={editOpen} onClose={handleClose}>
        <DialogTitle>Edit your post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make changes to you current post....
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New heading"
            type="text"
            fullWidth
            variant="outlined"
            onChange ={(e) => handleRenameHeading(e)}
          />
        </DialogContent>
        <input type='file' id='upload' onChange={(e) => handleImagePick(e)} hidden />
        <InputLabel varient='outlined' size='normal' className='edit_image' for='upload' ><ImageIcon />Add your image</InputLabel>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange ={(e) => handleRenameDesc(e)}
          />
        </DialogContent>
        <DialogActions>
        {(renameDesc && renameHeading !== '') ? (

        
          <Button className='saveChangesbtn' variant='outlined'  onClick={() => {
            dispatch(editPost({parentID, id, renameHeading, renameDesc, image}))
            handleClose()
            setRenameDesc('')
            setRenameHeading('')
            }}>Save changes</Button>
            ) : (
                <Button disabled style={{opacity:'50%', cursor:'default'}} className='saveChangesbtn' varientoutined>Save Changes</Button>
            )}
        </DialogActions>
      </Dialog>
      
    </div>
    </div>
  )
}

export default EditPost