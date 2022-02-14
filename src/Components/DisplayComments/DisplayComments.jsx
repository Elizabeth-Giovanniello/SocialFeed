import React, { useState } from 'react';
import SingleComment from '../SingleComment/SingleComment';
import AddCommentForm from '../AddComment/AddCommentForm';


const DisplayComments = (props) => {

    const [comments, setComments] = useState([]);

    function addNewComment(comment){

        let tempComments = [...comments, comment];
    
        setComments(tempComments);
        console.log("added!")
    }

    return ( 
        <div className="container">
            <AddCommentForm addNewComment={addNewComment}/>
            {comments.map((comment) => {
                return (
                    <SingleComment commenterName={comment.commenterName} commentText={comment.commentText} date={comment.date}/>
                    )
                })}
        </div>
    );
}
 
export default DisplayComments;