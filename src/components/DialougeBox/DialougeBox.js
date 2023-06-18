import React, {useState} from 'react'
import './DialougeBox.css'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux'
import {addBoard} from '../../redux/slices/boardSlice'
function DilaougeBox({setOpen, open}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [defaultColor, setDefaultColor] = useState([
    {id: 1, color:'#A7F0F9'},
    {id: 2, color:'#C5C5FC'},
    {id: 3, color:'#FFAEC0'},
    {id: 4, color:'#FFCC66'}
  ])
  const handleColorClick = (pickedColor) => {
    setColor(pickedColor);
  }
  const handleChange =(e) => {
    e.preventDefault();
    setTitle(e.target.value)
  }
  
  const handleClick = () => {
    setOpen(false);
    setTitle('');
    setColor('');
  }
  return (
    <div className='DilaougeBox'>
      <div className='heading'>
        <h3>Add a new Board</h3>
        <CloseIcon onClick={() => handleClick()} className='icon-close' />
      </div>
      <input type='text' placeholder='Name your board..' onChange={(e) =>handleChange(e)} />
      <div className='color-selection'>
        <h3>Select post colour</h3>
        <p>Here are some template to help you get started</p>
        {/* <input type='text' placeholder='Input color ' onChange={(e) => handleColorChange(e)} /> */}
        <div className='various_color'>
          {defaultColor.map((e) => (
            <div onClick = {() => handleColorClick(e.color)} id = {e.id} style={{backgroundColor:`${e.color}`}} ></div>
          ))}
        </div>
      </div>
      {(title && color !== '') ? (

     
      <button onClick={() => {
          dispatch(addBoard({id: Date.now(), color:color, title:title, posts:[]}))
          setOpen(false)
          setTitle('')
          setColor('');
          }}>Create Board</button>
        ) : (
          <button disabled style={{opacity:'50%', cursor:'default'}}>Create Board</button>
        )}
    </div>
  )
}

export default DilaougeBox