import React, { useState } from 'react';

const AddCommentForm = (props) => {

    const [commenterName, setCommenterName] = useState('');
    const [commentText, setCommentText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            commenterName: commenterName,
            commentText: commentText,
            date: new Date().toDateString()
        };
        console.log("posted")
        props.addNewComment(newComment);
        setCommentText(''); //as with posts, clearing text only for better user experience
    }

    return ( 
        <div className="container rounded pb-3 pt-3">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <input type="text" className='form-control' placeholder="Name" value={commenterName} onChange={(event) => setCommenterName(event.target.value)} required/>
                    </div>
                </div>
                <div className="col-7 px-0">
                    <div className="form-group">
                        <input type="text" className='form-control mb-2' placeholder="Write a comment..." value={commentText} onChange={(event) => setCommentText(event.target.value)} required/>
                    </div>
                </div>
                <div className="col pe-0">
                    <button className="btn btn-primary bi bi-send float-right" type="submit"> Comment</button>
                </div>
            </div>
            </form>
        </div>
    );
}
 
export default AddCommentForm;