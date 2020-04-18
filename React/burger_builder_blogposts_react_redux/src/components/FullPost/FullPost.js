import React, { useEffect, useState } from "react";
import "./FullPost.css";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const FullPost = (props) => {


    const deletePostHandler = () => {
        axios.delete('/posts/' + props.id)
          .then(response => {
            console.log(response)
          })
    }

  let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
  if (props.post){
    post = <p style={{textAlign:'center'}}>Loading post!</p>;
  }
  if (props.post) {
  post = (
    <div className="FullPost">
      <Link to={'/' + props.post.id }>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <div className="Edit">
        <button onClick={deletePostHandler}className="Delete">Delete</button>
      </div>
      </Link>
    </div>
  )}
  return post;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(FullPost);
