import { useState } from 'react'
import Profile1 from './images/profile.jpg'
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
import './story.css'
import StoryVideo from '../StoryVideo/storyvideo'
import { useNavigate } from 'react-router-dom'

export default function Story({setActive, setStoryScroll, isActive, setIsActive}) {
  const [isStoryScroll, setIsStoryScroll] = useState(0)

  const handleScrollRight = () => {
    setIsStoryScroll((prevPosition) => prevPosition + 320)
  }

  const handleScrollLeft = () => {
    setIsStoryScroll((prevPosition) => prevPosition - 320)
  }

  const navigate = useNavigate()
  const handleStoryClick = (index) => () => {
    navigate('/story');
    setActive(index);
    setStoryScroll(index * 220)

    const newIsActive = [...isActive]
    newIsActive[index] = !newIsActive[index]
    setIsActive(newIsActive)
    
  };

  return (
    <>
    <div className="story-container">
      <div className="story" style={{ transform: `translateX(${-isStoryScroll}px)` }}>
        <div className={`story-profile ${isActive[0] ? 'active' : ''}`} onClick={handleStoryClick(0)}>
          <img src={Profile1} />
          <p>bry.ath</p>
        </div>
        <div className={`story-profile ${isActive[1] ? 'active' : ''}`} onClick={handleStoryClick(1)}>
          <img src={Profile2} />
          <p>adihidayatofficial</p>
        </div>
        <div className={`story-profile ${isActive[2] ? 'active' : ''}`} onClick={handleStoryClick(2)}>
          <img src={Profile3} />
          <p>andrewtate</p>
        </div>
        <div className={`story-profile ${isActive[3] ? 'active' : ''}`} onClick={handleStoryClick(3)}>
          <img src={Profile4} />
          <p>hananataki</p>
        </div>
        <div className={`story-profile ${isActive[4] ? 'active' : ''}`} onClick={handleStoryClick(4)}>
          <img src={Profile5} />
          <p>sandhikagalih</p>
        </div>
        <div className={`story-profile ${isActive[5] ? 'active' : ''}`} onClick={handleStoryClick(5)}>
          <img src={Profile6} />
          <p>agung_hapsah</p>
        </div>
        <div className={`story-profile ${isActive[6] ? 'active' : ''}`} onClick={handleStoryClick(6)}>
          <img src={Profile7} />
          <p>baniadil</p>
        </div>
        <div className={`story-profile ${isActive[7] ? 'active' : ''}`} onClick={handleStoryClick(7)}>
          <img src={Profile8} />
          <p>teamrrq</p>
        </div>
        <div className={`story-profile ${isActive[8] ? 'active' : ''}`} onClick={handleStoryClick(8)}>
          <img src={Profile9} />
          <p>komikkamvret</p>
        </div>
        <div className={`story-profile ${isActive[9] ? 'active' : ''}`} onClick={handleStoryClick(9)}>
          <img src={Profile10} />
          <p>dagelan</p>
        </div>
        <div className={`story-profile ${isActive[10] ? 'active' : ''}`} onClick={handleStoryClick(10)}>
          <img src={Profile11} />
          <p>ustadabdulsomad</p>
        </div>
        <div className={`story-profile ${isActive[11] ? 'active' : ''}`} onClick={handleStoryClick(11)}>
          <img src={Profile12} />
          <p>khabib_nurmagomedov</p>
        </div>
        <div className={`story-profile ${isActive[12] ? 'active' : ''}`} onClick={handleStoryClick(12)}>
          <img src={Profile13} />
          <p>evosesports</p>
        </div>
        <div className={`story-profile ${isActive[13] ? 'active' : ''}`} onClick={handleStoryClick(13)}>
          <img src={Profile14} />
          <p>shahihfiqih</p>
        </div>
        <div className={`story-profile ${isActive[14] ? 'active' : ''}`} onClick={handleStoryClick(14)}>
          <img src={Profile15} />
          <p>indozone.id</p>
        </div>
        <div className={`story-profile ${isActive[15] ? 'active' : ''}`} onClick={handleStoryClick(15)}>
          <img src={Profile16} />
          <p>mpl.id.official</p>
        </div>
      </div>
      <button className='btn1' onClick={handleScrollLeft} style={{display: isStoryScroll === 0 ? 'none' : ''}}>&lt;</button>
      <button className='btn2' onClick={handleScrollRight} style={{display: isStoryScroll === 640 ? 'none' : ''}}>&gt;</button>
    </div>
    </>
  )
}