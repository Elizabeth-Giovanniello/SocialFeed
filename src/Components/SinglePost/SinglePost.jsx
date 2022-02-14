import React, { useState } from 'react';
import './SinglePost.css'

const SinglePost = (props) => {

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
        <div className="container border rounded px-5 pt-3 mb-4">
            <h5>{props.posterName}</h5>
            <small className="text-muted">{props.date}</small>
            <p>{props.content}</p>
            <button className={"btn px-1 btn-lg bi bi-hand-thumbs-up" + (likedStatus ? "-fill text-primary" : "")} onClick={()=> toggleLike()}></button>
            <button className={"btn px-1 btn-lg bi bi-hand-thumbs-down" + (dislikedStatus ? "-fill text-primary" : "")} onClick={()=> toggleDislike()}></button>
        </div>
    );
}
 


export default SinglePost;