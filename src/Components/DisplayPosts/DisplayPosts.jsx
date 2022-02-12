import React from 'react';

const DisplayPosts = (props) => {
    return ( 
        {props.posts.map((post, index) => {
            return (
                <div className="container">
                <h5>{post.posterName}</h5>
                <p>{post.content}</p>
                </div>
            );
        })}
    );
}
 
export default DisplayPosts;