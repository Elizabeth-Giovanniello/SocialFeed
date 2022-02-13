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
        console.log("posted")
        props.addNewPost(newPost);
        event.target.reset();
    }

    return ( 
        <div className="container border rounded m-5 p-4 w-50">
            <h5 className="text-center mb-3">Create Post</h5>
            <form onSubmit={handleSubmit.bind(this)} className='form-grid'>
                <div className="form-group">
                    <input type="text" className='form-control' placeholder="Name" value={posterName} onChange={(event) => setPosterName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <textarea className='form-control mt-2' placeholder="What's on your mind?" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
                </div>
                <button className="btn btn-primary mt-2 px-4" type="submit">Post</button>
            </form>
        </div>
     );
}
 
export default AddPostForm;