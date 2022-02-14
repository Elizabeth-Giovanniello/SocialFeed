import React from 'react';
import SinglePost from '../SinglePost/SinglePost';


const DisplayPosts = (props) => {
    

    return (
        props.posts.map((post) => {
            return (
                <div className="container">
                    <SinglePost posterName={post.posterName} content={post.content} date={post.date}/>
                </div>
            )
        })
    );
}
    
export default DisplayPosts;