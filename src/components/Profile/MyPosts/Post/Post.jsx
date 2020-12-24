import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
      <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJjaUVrc9az_B1Rqphs0EULawVrCg_mBMIg&usqp=CAU"/>
        {props.message}
        <div>
          <span>like: {props.LikesCount}</span>
        </div>
      </div>     
  )
}

export default Post;