// StoryVideo.js
import React, { useState } from 'react';
import Video from './video';
import { useNavigate } from 'react-router-dom';
import Profile1 from './images/profile1.jpg'
import Profile2 from './images/profile2.jpg'
import Profile3 from './images/profile3.jpg'
import Profile4 from './images/profile4.jpg'
import Profile5 from './images/profile5.jpg'
import Profile6 from './images/profile6.jpg'
import Profile7 from './images/profile7.jpg'
import Profile8 from './images/profile8.jpg'
import Profile9 from './images/profile9.jpg'
import Profile10 from './images/profile10.jpg'
import Profile11 from './images/profile11.jpg'
import Profile12 from './images/profile12.jpg'
import Profile13 from './images/profile13.jpg'
import Profile14 from './images/profile14.jpg'
import Profile15 from './images/profile15.jpg'
import Profile16 from './images/profile16.jpg'
import Story1 from './images/story1.jpg';
import Story2 from './images/story2.jpg'
import Story3 from './images/story3.jpg'
import Story4 from './images/story4.jpg'
import Story5 from './images/story5.jpg'
import Story6 from './images/story6.jpg'
import Story7 from './images/story7.jpg'
import Story8 from './images/story8.jpg'
import Story9 from './images/story9.jpg'
import Story10 from './images/story10.jpg'
import Story11 from './images/story11.jpg'
import Story12 from './images/story12.jpg'
import Story13 from './images/story13.jpg'
import Story14 from './images/story14.jpg'
import Story15 from './images/story15.jpg'
import Story16 from './images/story16.jpg'

const StoryVideo = ({active, setActive, storyScroll, setStoryScroll, setIsActive}) => {
  const handleScrollRight = () => {
    setStoryScroll((prevPosition) => prevPosition + 220);
    setActive(active + 1);
  };

  const handleScrollLeft = () => {
    setStoryScroll((prevPosition) => prevPosition - 220);
    setActive(active - 1);
  };

  const navigate = useNavigate();
  const handleCloseStory = () => {
    navigate('/');
  };

  const videos = [
    { username: 'bry.ath', profileImage: Profile1, duration: '7 jam', backgroundImage: Story1 },
    { username: 'adihidayat', profileImage: Profile2, duration: '5 jam', backgroundImage: Story2 },
    { username: 'andrewtate', profileImage: Profile3, duration: '10 jam', backgroundImage: Story3 },
    { username: 'hananattaki', profileImage: Profile4, duration: '1 jam', backgroundImage: Story4 },
    { username: 'sandhikagalih', profileImage: Profile5, duration: '2 jam', backgroundImage: Story5 },
    { username: 'agunghapsah', profileImage: Profile6, duration: '7 jam', backgroundImage: Story6 },
    { username: 'baniadil', profileImage: Profile7, duration: '23 jam', backgroundImage: Story7 },
    { username: 'teamrrq', profileImage: Profile8, duration: '20 jam', backgroundImage: Story8 },
    { username: 'komikkamvret', profileImage: Profile9, duration: '15 jam', backgroundImage: Story9 },
    { username: 'dagelan', profileImage: Profile10, duration: '2 jam', backgroundImage: Story10 },
    { username: 'abdulshomad', profileImage: Profile11, duration: '5 jam', backgroundImage: Story11 },
    { username: 'khabib_nurmagomedov', profileImage: Profile12, duration: '5 jam', backgroundImage: Story12 },
    { username: 'evosesports', profileImage: Profile13, duration: '8 jam', backgroundImage: Story13 },
    { username: 'shahihfiqih', profileImage: Profile14, duration: '11 jam', backgroundImage: Story14 },
    { username: 'indozone.id', profileImage: Profile15, duration: '14 jam', backgroundImage: Story15 },
    { username: 'mpl.id.official', profileImage: Profile16, duration: '19 jam', backgroundImage: Story16 },
  ];


  return (
    <div className="overlay">
      <h1>Instagram</h1>
      <i className="fa-solid fa-xmark overlay-close" onClick={handleCloseStory}></i>
      <div className="video-container">
        {videos.map((data, index) => (
          <Video key={index} isActive={active === index} storyScroll={storyScroll} data={data} setStoryScroll={setStoryScroll} setActive={setActive} active={active} setIsActive={setIsActive} videos={videos}/>
        ))}
        <button style={{ left: '540px' }} onClick={handleScrollLeft}>
          &lt;
        </button>
        <button style={{ right: '540px' }} onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default StoryVideo;
