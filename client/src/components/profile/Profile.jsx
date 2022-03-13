import React from 'react'

//components
import NewPostForm from '../new_post_form/NewPostForm'
import PostCard from '../post_card/PostCard'

const postsData= [
    {
        profile_id: 1432552,
        text_content: "excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        profile_id: 84762123,
        text_content: "excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
    },
]

export default function Profile() {
  return (
     <>
        <div>Profile</div>
        <NewPostForm />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
     </> 
    
  )
}
