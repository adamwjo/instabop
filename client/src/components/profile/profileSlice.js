import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "idle",
    loaded: false,
    posts: [
        {
            id: 1432552,
            text_content: "excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: 84762123,
            text_content: "excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
        },
    ]
  }


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            const index = state.posts.findIndex(p => p.id === action.payload)
            state.posts.splice(index, 1)
        }
    }
   
})



export const { addPost, deletePost } = profileSlice.actions
export default profileSlice.reducer