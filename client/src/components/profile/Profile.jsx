import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//components
import NewPostForm from '../new_post_form/NewPostForm'
import PostCard from '../post_card/PostCard'


export default function Profile() {

    const posts = useSelector((state) => state.profile.posts)
   

    console.log(posts);
    return (
        <>
            <div>Profile</div>
            <NewPostForm />
            {posts.map(post => <PostCard key={post.id} {...post} />)}
        </> 
        
    )
}
