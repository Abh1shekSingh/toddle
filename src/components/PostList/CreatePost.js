import React, { useState } from 'react'
import './PostList.css'
import { addPost } from '../../redux/slices/boardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import InputLabel from '@mui/material/InputLabel';



function CreatePost() {
    const [open, setOpen] = React.useState(false);
    const [heading, setHeading] = useState('')
    const [desc, setDesc] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHeading('')
    setDesc('')
  };

    const dispatch = useDispatch();
    const params = useParams();
    const id = parseInt(params.id)
    const items = useSelector(state=>state)
    const selectedArray = items.board.find((array) => array.id === id);
    // const title = selectedArray.title;
    console.log(selectedArray)

    
    const [image, setImage] = useState();
    const headingChange = (e) => {
        if(e.target.value !== ''){
           setHeading(e.target.value)
        }else {
            alert('Text Filed Required')
        }
    }

    const DescChange = (e) => {
        if(e.target.value !== ''){
           setDesc(e.target.value)
        }
    }

    const handleImagePick = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    
    
  return (
    <div>
        {/* <div className='Publish_menu'>
                    <div className='menu_heading'>
                        <h3>Create a post</h3>
                        <i><CloseIcon /></i>
                    </div>
                    <p>write something for your posts</p>
                    <input onChange={(e) => headingChange(e)} type='text' placeholder='heading' />
                    <input onChange={(e) => DescChange(e)} type='text' placeholder='desc' />
                    <button onClick={() => dispatch(addPost({id, key:Date.now(), heading, desc}))}>Publish</button>
                </div> */}
        <div>
            <button className='createPostBtn' variant="outlined" onClick={handleClickOpen}>
                <i><AddIcon /></i>
                Create new post
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle >Create a post<br></br><span style={{fontSize:'.9rem'}}>Write something for your post</span></DialogTitle>
                {/* <p>Write something for your post</p> */}
                <DialogContent>
                <DialogContentText>
                    Subject
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="outline-basic"
                    label="Name your post"
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={(e) =>headingChange(e)}
                />
                <input type='file' id='upload' onChange={(e) => handleImagePick(e)} hidden />
                <InputLabel varient='outlined' size='normal' className='upload_image' for='upload' ><ImageIcon />Add your image</InputLabel>
                </DialogContent>
                <Divider variant='middle' />
                <DialogContent>
                <DialogContentText>
                    What's on your mind?
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="outline-basic"
                    label="Name your post"
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => DescChange(e)} 
                />
                </DialogContent>
                <DialogActions>
                {/* <Button onClick={handleClose}>Cancel</Button> */}
                {(heading && desc !== '') ? (

                
                <Button variant='outlined' style={{backgroundColor:'red', color:'white', border:'none'}} onClick={() => {
                    dispatch(addPost({id, image, key:Date.now(), heading, desc}))
                    handleClose()
                    setHeading('')
                    setDesc('')
                    }}>Publish</Button>
                    ) : 
                    <Button disabled variant='outlined' style={{backgroundColor:'red', opacity :'50%', color:'white', border:'none'}}>Publish</Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    </div>
  )
}

export default CreatePost