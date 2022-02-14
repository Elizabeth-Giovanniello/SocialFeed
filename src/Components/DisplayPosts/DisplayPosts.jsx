import React from 'react';
import SinglePost from '../SinglePost/SinglePost';


const DisplayPosts = (props) => {

    return (
        props.posts.map((post, index) => {
            return (
                //needed to make the key the reverse of the index because new posts are added to the beginning of the list, not the end
                //previously when a new post was added, the posts would move down but the likes and dislikes would stay where they were
                <div className="container" key={props.posts.length - index}> 
                    <SinglePost posterName={post.posterName} content={post.content} date={post.date}/>
                </div>
            )
        })
    );
}
    
export default DisplayPosts;