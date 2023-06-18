import React, { useState } from 'react'
import './PostList.css'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { deletePost} from '../../redux/slices/boardSlice';
import EditPost from './EditPost';


function SinglePost({parentID,heading, id, desc ,imge}) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [editOpen, setEditOpen] = useState(false)
    const [like, setLike] = useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEditClick = () => {
        setEditOpen(!editOpen)
        handleClose();
    }

    const handleLike = () => {
        setLike(!like)
    }
   
    console.log(id)
    return (
    <div>
        <div className='Post_card'>
            <div className='heading_section'>
                <h3>{heading}</h3>
                <span>
                    {/* <BookmarkBorderIcon /> */}
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
                            <MenuItem onClick={() => handleEditClick()}><DriveFileRenameOutlineIcon /> Edit</MenuItem>
                            <MenuItem onClick={() => dispatch(deletePost({parentID, id}))}><DeleteOutlineIcon />Delete</MenuItem>
                        </Menu>
                    </div>
                </span>
            </div>
            <img src={imge} alt='posts_images'/>
            <p>{desc}</p>
            <div className='divider' />
            <CardActions>
                <Button onClick={() => handleLike()} size="small">
                   {like === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </Button>
            </CardActions>
        </div>
        {editOpen && (
            <EditPost parentID = {parentID} heading = {heading} id = {id} desc = { desc} img = {imge} editOpen = {editOpen} setEditOpen = {setEditOpen} />
        )}
    </div>
  )
}

export default SinglePost