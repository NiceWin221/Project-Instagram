import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useFetcher } from 'react-router-dom';

const Video = ({ isActive, storyScroll, data, setStoryScroll, setActive, active, videos }) => {
  const [liked, setLiked] = useState(false)
  const handleLiked = () => {
    setLiked(!liked)
  }

  const { username, duration, profileImage, backgroundImage } = data;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStoryScroll(storyScroll + 220);
      setActive((prevActive) => (prevActive + setActive(active + 1)))
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [setStoryScroll, setActive, videos]);



  return (
    <div className={`video ${isActive ? 'active' : ''}`} style={{ transform: `translateX(${-storyScroll}px)`, background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
      <div className={`video-duration ${isActive ? 'active' : ''}`}>
        <span></span>
      </div>
      <div className={`status ${isActive ? 'active' : ''}`}>
        <div className="status-img">
          <img src={profileImage} />
        </div>
        <p>{username}</p>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{duration}</p>
        <div className={`status-icon ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-volume-xmark"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className={`comment ${isActive ? 'active' : ''}`}>
        <input type="text" placeholder={`Balas kepada ${username}...`} />
        <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart ${liked ? 'liked' : ''}`} onClick={handleLiked}></i>
        <i className="fa-regular fa-paper-plane"></i>
      </div>
    </div>
  );
};

export default Video;
