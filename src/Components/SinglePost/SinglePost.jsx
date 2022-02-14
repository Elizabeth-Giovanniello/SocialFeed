import React, { useState } from 'react';
import { Collapse } from "bootstrap";
import DisplayComments from '../DisplayComments/DisplayComments';
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
        <div className="card shadow px-3 pt-3 mb-4 w-75 mx-auto">
            <div className="card-header bg-white border-0">
                <h5 className="m-0">{props.posterName}</h5>
                <small className="text-muted">{props.date}</small>
            </div>
            <div className="card-body pb-4 mb-1">
                <p className="card-text">{props.content}</p>
            </div>
            <div className="card-footer bg-white pt-0">
                <button className={"btn px-1 btn-lg bi bi-hand-thumbs-up" + (likedStatus ? "-fill text-primary" : "")} onClick={()=> toggleLike()}></button>
                <button className={"btn px-1 btn-lg bi bi-hand-thumbs-down" + (dislikedStatus ? "-fill text-primary" : "")} onClick={()=> toggleDislike()}></button>
                <button type="button" className="btn btn-basic" data-bs-toggle="collapse" data-bs-target="#coment-section"><small className="text-muted ps-3">Comments</small></button>
            </div>
            <div className="card-footer bg-white pt-0">
                <div id="comment-section">
                    <DisplayComments/>
                </div>
            </div>
        </div>
    );
}
 
{/* <div className="container border rounded px-5 pt-3 mb-4 w-50 shadow"></div> */}

export default SinglePost;