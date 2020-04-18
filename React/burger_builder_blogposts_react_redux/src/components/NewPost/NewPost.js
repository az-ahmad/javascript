import React, { useState } from 'react';
import axios from 'axios'
import './NewPost.css';

const NewPost = () => {

    const [ newTitle, setNewTitle ] = useState({
        title: '',
    })
    const [ newContent, setNewContent ] = useState({
        content: '',
    })
    const [ newAuthor, setNewAuthor ] = useState({
        author: 'Az',
    })

    const postDataHandler = () => {
        const data = {
            title: newTitle,
            body: newContent,
            author: newAuthor
        }
        axios.post('/posts', data)
            .then(response => {
                console.log(response)
            })
    }
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={newTitle.title} onChange={(event) => setNewTitle({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={newContent.content} onChange={(event) => setNewContent({content: event.target.value})} />
                <label>Author</label>
                <select value={newAuthor.author} onChange={(event) => setNewAuthor({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={postDataHandler}>Add Post</button>
            </div>
        );
}

export default NewPost;