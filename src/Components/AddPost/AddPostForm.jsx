import React, { useState } from 'react';


const AddPostForm = (props) => {

    const [posterName, setPosterName] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            posterName: posterName,
            content: content
        };
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" value={posterName} onChange={(event) => setPosterName(event.target.value)}/>
            <label>Write a Post:</label>
            <textarea value={content} onChange={(event) => setContent(event.target.value)}></textarea>
            <button type="submit">Post</button>
        </form>
     );
}
 
export default AddPostForm;