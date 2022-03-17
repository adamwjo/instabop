import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../profile/profileSlice'



export const store = configureStore({
    reducer: {
      profile: profileReducer
    },
  })


//   function reducer(prevState, action){
  // if (action.type === "LIKE"){
 //   return "state that looks like what we want for a like"
//  }
//       //what is the action?
//   }