import React from "react";
import Canvas from "./canvas";

const CreatePostForm = (props) => {
  
  return (
    <main className="new-post-form">
      <h1>ADD PIXLS</h1>
      <Canvas createPost={props.createPost}/>
    </main>
  )
}

export default CreatePostForm;
