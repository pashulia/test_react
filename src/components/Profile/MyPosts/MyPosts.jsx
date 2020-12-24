import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div>
        My post
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          <Post message="Hi, how are you?" LikesCount="15"/>
          <Post message="It's my first post" LikesCount="20"/>
        </div>
      </div>     
  )
}

export default MyPosts;