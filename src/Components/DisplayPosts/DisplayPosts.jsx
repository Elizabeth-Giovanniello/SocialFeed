import React from 'react';
import SinglePost from '../SinglePost/SinglePost';


const DisplayPosts = (props) => {
    

    return (
        props.posts.map((post) => {
            return (
              <SinglePost posterName={post.posterName} content={post.content} />
            )
        })
    );
}
    
export default DisplayPosts;