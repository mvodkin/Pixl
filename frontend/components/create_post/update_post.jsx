import Canvas from "./canvas";
import React from "react";

const UpdatePostForm = (props) => {

  return (
    <main className="new-post-form">
      <h1 className="new-post-heading">EDIT PIXLS</h1>
      <Canvas createPost={props.createPost} props={props}/>
    </main>
  )
}

export default UpdatePostForm;
