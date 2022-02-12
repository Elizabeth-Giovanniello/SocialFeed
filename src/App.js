import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';


function App() {

  const [posts, setPosts] = useState([{posterName: "Bob", content: "Hello World!"}]);

  return (
    <div>
      <DisplayPosts posts={posts}/>
      <AddPostForm />
    </div>
  );
}

export default App;
