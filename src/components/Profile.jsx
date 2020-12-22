import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
      <div className='content'>
        <div> 
          <img className="top_img" src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" />
        </div>
        <div>
          ava+description
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div className='posts'>
            <div className='item'>
              post 1
            </div>
            <div className='item'>
              post 2
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile;