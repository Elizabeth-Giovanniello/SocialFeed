import React, { useState } from 'react';

const SingleComment = (props) => {

    const [likedStatus, setLikedStatus] = useState(false);
    const [dislikedStatus, setDislikedStatus] = useState(false);

    function toggleLike(){
        setLikedStatus(!likedStatus);
        if(dislikedStatus){setDislikedStatus(false);}
    }

    function toggleDislike(){
        setDislikedStatus(!dislikedStatus);
        if(likedStatus){setLikedStatus(false);}
    }

    return ( 
        <div className="card pt-2 mb-4 mx-auto bg-light">
            <div className="card-header bg-light border-0 pt-0">
                <h5 className="m-0">{props.commenterName}</h5>
            </div>
            <div className="card-body pb-1 pt-1">
                <p className="card-text">{props.commentText}</p>
            </div>
            <div className="card-footer bg-light border-0 pt-0 pb-0">
                <button className={"btn px-1 pt-0 btn-lg bi bi-hand-thumbs-up" + (likedStatus ? "-fill text-primary" : "")} onClick={()=> toggleLike()}></button>
                <button className={"btn px-1 pt-0 btn-lg bi bi-hand-thumbs-down" + (dislikedStatus ? "-fill text-primary" : "")} onClick={()=> toggleDislike()}></button>
                <small className="text-muted ps-2">{props.date}</small>
            </div>
        </div>
    );
}
 
export default SingleComment;