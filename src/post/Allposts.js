import React from "react";
import { connect } from "react-redux";
import Post from "./post";

const Allposts = (props) => {
  return (
    <div>
      {props.posts && props.posts.length > 0? props.posts.map((post) => (
        <Post key={post.id} post={post} />
      )) : ''}
      {console.log(props.posts)}
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state);
  return {
    posts: state.Allposts,
  };
};

export default connect(mapStateToProps)(Allposts);
