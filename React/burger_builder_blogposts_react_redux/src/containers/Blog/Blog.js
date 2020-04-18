import React, { useState, useEffect } from "react";
// import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import { connect } from 'react-redux'

const Blog = (props) => {
  console.log(props)
  // const [postState, setPostState] = useState({
  //   posts: [],
  // });
  // useEffect(() => {
  //   let mounted = true
  //   if (mounted) {
  //   axios
  //     .get("/posts")
  //     .then((response) => {
  //       const posts = response.data.slice(0, 4);
  //       setPostState({ posts: posts });
  //       // console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })};
  //     return () => {
  //       mounted = false
  //       console.log('get posts unmounted')
  //     }
  // }, []);

  const [selectedPostId, setSelectedPostId] = useState({
    selectedPost: null,
  });

  const postSelectedHandler = (postid) => {
    setSelectedPostId({ selectedPost: postid });
  };

  const posts = props.posts.map((post) => {
    return (
      <Post
        title={post.title}
        key={post.id}
        userId={post.body}
        clicked={() => postSelectedHandler(post.id)}
      />
    );
  });

  return (
    <div>
      <section className="Posts">{posts}</section>
      <section>
        <FullPost id={selectedPostId.selectedPost} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Blog);
