import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './PostList.css'
import SinglePost from './SinglePost';
import PostHeader from './PostHeader';

import CreatePost from './CreatePost';

function PostList() {
    const params = useParams();
    const id = parseInt(params.id)
    const items = useSelector(state=>state)
    const selectedArray = items.board.find((array) => array.id === id);
    const title = selectedArray.title;
    console.log(selectedArray)

    
    // const [publishMenu, setPublishMenu] = useState(false);
    

    // const handlePublishClick = () => {
    //     setPublishMenu(!publishMenu)
    // }

    

  return (
    <div>
        <PostHeader title={title} />
        <div className='content_section'>
           <div className='create_post_button'>
             <h2>Your posts</h2>
             {/* <button onClick={() => handlePublishClick()}>Create post</button> */}
             <CreatePost />
           </div>
           {/* {publishMenu && ( */}
                
           {/* )} */}
            <div className='single_post_card'>
                {selectedArray.posts.map((item) => (
                    <SinglePost parentID={id} id={item.id} imge={item.image} desc = {item.desc} heading = {item.heading} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default PostList