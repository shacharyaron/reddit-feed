import React, {useState} from 'react';
import './css/PostsList.css';
import Post from "./Post";

const PostsList = props => {

    return (
        <div className='posts-list-container'>
            {props.posts.map(post => {
                return (<Post
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        author={post.author}
                        createdTimestamp={post.createdTimestamp}
                        upvotes={post.upvotes}
                        url={post.url}
                        thumbnail={post.thumbnail}
                    />
                );
            })}
        </div>
    );

};

export default PostsList;