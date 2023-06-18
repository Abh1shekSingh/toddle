import React from 'react'
import SingleBoard from './SingleBoard';
import { useSelector } from 'react-redux'
function BoardList() {
  const items = useSelector(state => state);
  console.log(items.board);
  return (
    <div className='boards' >
      {items.board.map((board) => (
        <SingleBoard id = {board.id} color={board.color} title = {board.title} />
      ))}
    </div>
  )
}

export default BoardList