import React, { useState } from "react"
import './newpostform.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../profile/profileSlice'

export default function NewPostForm() {
    
    const dispatch = useDispatch()
    
    const [formData, setFormData] = useState({
        text_content: "",
        image: ""
    })

    const formHandler = event => setFormData(prevState => {
        return {
            ...prevState,
            [event.target.name]: event.target.value
        }
    })

    const submitHandler = event => {
        event.preventDefault()
        dispatch(addPost(formData))
      
        setFormData({
            text_content: "",
            image: ""
        })
    }

    return (
        <>
            
            <form className="newpostform" onSubmit={submitHandler}>
                <h2>New Post Form</h2>
                <label htmlFor="image">Post an image:</label><br/>
                <input onChange={formHandler} type="text" id="image" name="image" value={formData.image}/><br/>
                <label htmlFor="lname">Write your post here:</label><br/>
                <textarea onChange={formHandler} type="text" id="lname" name="text_content" value={formData.text_content}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}
