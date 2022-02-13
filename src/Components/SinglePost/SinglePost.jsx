import React, { useState } from 'react';
import './SinglePost.css'

const SinglePost = (props) => {

    const [likedStatus, setLikedStatus] = useState(false);
    const [dislikedStatus, setDislikedStatus] = useState(false);

    // function toggleLike(){
    //     if (likedStatus){
    //         setLikedStatus(false);
    //     }
    //     else{
    //         setLikedStatus(true);
    //         setDislikedStatus(false);
    //     }
    //     console.log(`Liked status: ${likedStatus}/nDisliked status: ${dislikedStatus}`)
    // }

    // function toggleDislike(){
    //     if (dislikedStatus){
    //         setDislikedStatus(false);
    //     }
    //     else{
    //         setDislikedStatus(true);
    //         setLikedStatus(false);
    //     }
    //     console.log(`Liked status: ${likedStatus}/nDisliked status: ${dislikedStatus}`)
    // }

    return ( 
        <div className="container border rounded">
            <h5>{props.posterName}</h5>
            <small className="text-muted">{props.date}</small>
            <p>{props.content}</p>
            <p>Liked status: {likedStatus.toString()}</p>
            <p>Disliked status: {dislikedStatus.toString()}</p>
            <button className="btn px-1 btn-lg bi bi-hand-thumbs-up-fill" onClick={()=> setLikedStatus(!likedStatus)}></button>
            <button className="btn px-1 btn-lg bi bi-hand-thumbs-down-fill" onClick={()=> setDislikedStatus(!dislikedStatus)}></button>
        </div>
    );
}
 
// className={"btn px-1 btn-lg bi bi-hand-thumbs-up " + (this.likedStatus ? "-fill text-primary" : "")}

export default SinglePost;