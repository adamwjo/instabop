import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile } from './profileSlice'

//components
import NewPostForm from '../new_post_form/NewPostForm'
import PostCard from '../post_card/PostCard'


export default function Profile() {

    const currentUser = useSelector(({profile}) => profile.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchProfile())
        
    }, [])
   

 
    return (
        <>
            <div>Profile</div>
            <NewPostForm />
            {currentUser.posts.map(post => <PostCard key={post.id} {...post} />)}
        </> 
        
    )
}
