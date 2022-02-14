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
        <div className="card px-3 pt-3 mb-4 mx-auto bg-light">
            <div className="card-header bg-light">
                <h5 className="m-0">{props.posterName}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{props.content}</p>
            </div>
            <div className="card-footer bg-light">
                <button className={"btn px-1 btn-lg bi bi-hand-thumbs-up" + (likedStatus ? "-fill text-primary" : "")} onClick={()=> toggleLike()}></button>
                <button className={"btn px-1 btn-lg bi bi-hand-thumbs-down" + (dislikedStatus ? "-fill text-primary" : "")} onClick={()=> toggleDislike()}></button>
                <small className="text-muted ps-2">{props.date}</small>
            </div>
        </div>
    );
}
 
export default SingleComment;