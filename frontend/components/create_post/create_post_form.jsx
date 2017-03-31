import React from "react";
import Canvas from "./canvas";

const CreatePostForm = (props) => {

  return (
    <main className="new-post-form">
      <h1 className="new-post-heading">ADD PIXLS</h1>
      <Canvas createPost={props.createPost} {...props}/>
    </main>
  )
}

export default CreatePostForm;
