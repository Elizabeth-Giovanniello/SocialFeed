import React, { useState } from 'react';


const AddPostForm = (props) => {

    const [posterName, setPosterName] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            posterName: posterName,
            content: content,
            date: new Date().toDateString()
        };
        props.addNewPost(newPost);
        setContent("");
        console.log("posted") //clearing content only for better UX: likely your name won't change
    }


    return ( 
        <div className="container border rounded mt-5 mb-5 p-4 w-75 bg-white shadow-sm">
            <h5 className="text-center mb-3">Create Post</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control' placeholder="Name" value={posterName} onChange={(event) => setPosterName(event.target.value)} required/>
                </div>
                <div className="form-group">
                    <textarea className='form-control mt-2' placeholder="What's on your mind?" value={content} onChange={(event) => setContent(event.target.value)} required></textarea>
                </div>
                <button className="btn btn-primary mt-2 px-4" type="submit">Post</button>
            </form>
        </div>
     );
}
 
export default AddPostForm;