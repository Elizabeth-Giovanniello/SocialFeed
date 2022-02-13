import React, { useState } from 'react';

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
            <button className="bi bi-hand-thumbs-up" onClick={()=> setLikedStatus(!likedStatus), setDislikedStatus(false)}></button>
            <button className="bi bi-hand-thumbs-down" onClick={()=> setDislikedStatus(!dislikedStatus), setLikedStatus(false)}></button>
        </div>
    );
}
 
export default SinglePost;