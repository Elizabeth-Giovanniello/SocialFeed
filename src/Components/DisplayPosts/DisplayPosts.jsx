import React from 'react';

const DisplayPosts = (props) => {
    return (
        props.posts.map((post) => {
            return (
              <div className="container border rounded">
                <h5>{post.posterName}</h5>
                <p>{post.content}</p>
                <button class="bi bi-hand-thumbs-up"></button>
                <button class="bi bi-hand-thumbs-down"></button>
              </div>
            )
        })
    );
}
    
export default DisplayPosts;