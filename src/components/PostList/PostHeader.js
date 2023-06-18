import React from 'react'
import './PostList.css'
function PostHeader({title}) {
  return (
    <div className='PostHeader'>
        <h3>{title}</h3>
        <input type='text' placeholder='Search..' />
    </div>
  )
}

export default PostHeader