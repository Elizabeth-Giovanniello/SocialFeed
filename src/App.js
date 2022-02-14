import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';


function App() {

  const [posts, setPosts] = useState([{posterName: "Bob", content: "Hello World!", date: "Sun Feb 13 2022"}]);

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
    console.log("added!")
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 className="text-primary" style={{margin: '1em'}}>Fake
        <small className="text-muted">Book</small></h3>
      </div>
    <div className="container">
      <AddPostForm addNewPost={addNewPost}/>
      <DisplayPosts posts={posts}/>
    </div>
    </div>
  );
}

export default App;
