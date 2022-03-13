import React, { useState } from "react"

export default function NewPostForm() {
    
    
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
        console.log(formData);
        setFormData({
            text_content: "",
            image: ""
        })
    }

    return (
        <>
            <h2>New Post Form</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="image">Post an image:</label><br/>
                <input onChange={formHandler} type="text" id="image" name="image" value={formData.image}/><br/>
                <label htmlFor="lname">Write your post here:</label><br/>
                <textarea onChange={formHandler} type="text" id="lname" name="text_content" value={formData.text_content}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}
