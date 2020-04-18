import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h6>{props.title}</h6>
        <div className="Info">
            <div className="Author">{props.userId}</div>
        </div>
    </article>
);

export default post;