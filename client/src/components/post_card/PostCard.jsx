import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../profile/profileSlice'

const PostCard = ({text_content, image, id}) => {

  const dispatch = useDispatch()

  return (
    <div>
        <img src={image} alt="post" />
        <div>
            <h4><b>John Doe</b></h4>
            <p>{text_content}</p>
        </div>
        <button onClick={() => dispatch(deletePost(id))}>x</button>
    </div>
  )
}



export default PostCard
