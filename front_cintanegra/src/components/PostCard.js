import React from "react";
import { Link } from 'react-router-dom'

function PostCard({ titulo, autor, id }) {
  //Como parametro recibo props
  return (
    <>
      <div class="post-preview">
        <Link to={`/post/${id}`}>
          <h2 class="post-title">
           {titulo}
          </h2>
        </Link>
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
