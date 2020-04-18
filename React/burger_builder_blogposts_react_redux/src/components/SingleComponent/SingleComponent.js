import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import deletePost from '../../Actions/postActions'

const SingleComponent = (props) => {

    const handleClick = () => {
        props.deletePost(props.post.id)
        props.history.push('/')
    }
    return (
        <div>
            <h4>{props.post.id}</h4>
            <h4>{props.post.title}</h4>
            <h4>{props.post.body}</h4>
            <Button onClick={handleClick}>
                Delete Post
            </Button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleComponent)