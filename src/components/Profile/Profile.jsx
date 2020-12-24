import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
      <div className={classes.content}>
        <div> 
          <img className={classes.top_img} src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" />
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </div>
  )
}

export default Profile;