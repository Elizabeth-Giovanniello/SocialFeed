import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';


function App() {

  const [posts, setPosts] = useState([{posterName: "Bob", content: "Hello World!"}]);

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
    console.log("added!")
  }

  return (
    <div>
      <AddPostForm addNewPost={addNewPost}/>
      <DisplayPosts posts={posts}/>
    </div>
  );
}

export default App;
