import React from "react";
import PostCard from "./PostCard";

function Feed() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <PostCard titulo="Post 0" autor="Bere" />
          <PostCard titulo="Post 1" autor="Bere" />
          <PostCard titulo="Post 2" autor="Bere" />
          <PostCard titulo="Post 3" autor="Bere" />
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">
              Older Posts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
