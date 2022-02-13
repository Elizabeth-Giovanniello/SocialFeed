import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';


function App() {

  const [posts, setPosts] = useState([{posterName: "Bob", content: "Hello World!", date: "11/3/2021"}]);

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
    console.log("added!")
  }

  return (
    <div className="container">
      <div className="row">
        <AddPostForm addNewPost={addNewPost}/>
        <DisplayPosts posts={posts}/>
      </div>
    </div>
  );
}

export default App;
