import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "idle",
    currentUser: {}
  }


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        profileLoading: (state, action) => {
            if(state.status === "idle"){
                state.status = 'pending'
            }
        },
        profileLoaded: (state, action) => {
            if (state.status === 'pending') {
                state.status = 'idle'
                state.currentUser = action.payload
              }
        },
        addPost: (state, action) => {
            state.currentUser.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            const index = state.posts.findIndex(p => p.id === action.payload)
            state.currentUser.posts.splice(index, 1)
        }
    }
   
})



export const { profileLoading, profileLoaded, addPost, deletePost } = profileSlice.actions

export const fetchProfile = () => async (dispatch) => {
    dispatch(profileLoading())
    const response = await fetch("http://localhost:3000/me")
    const data = await response.json()
    dispatch(profileLoaded(data))
  }
export default profileSlice.reducer