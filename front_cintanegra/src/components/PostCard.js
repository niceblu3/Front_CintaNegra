import React from "react";

function PostCard({ titulo, autor }) {
  //Como parametro recibo props
  return (
    <>
      <div class="post-preview">
        <a href="post.html">
          <h2 class="post-title">
           {titulo}
          </h2>
        </a>
        <p class="post-meta">
          Posteado por:
          <a href="#"> {autor} </a>
        </p>
      </div>
      <hr />
    </>
  );
}


export default PostCard;
