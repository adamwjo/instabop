import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../profile/profileSlice'



export const store = configureStore({
    reducer: {
      profile: profileReducer
    },
  })


//   function reducer(prevState, action){
//       //what is the action?
//   }