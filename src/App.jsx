import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Navbar from './Component/Navbar/navbar'
import Story from './Component/Story/story'
import Post from './Component/Post/post'
import Sarankan from './Component/Sarankan/sarankan'
import Direct from "./Component/Direct/direct";
import StoryVideo from "./Component/StoryVideo/storyvideo";
import Profile from "./Component/Profile/profile";
import './Component/Profile/profile.css'
import "./Component/StoryVideo/storyvideo.css";
import './Component/Direct/direct.css'
import './Component/Sarankan/sarankan'
import './Component/Post/post.css'
import './Component/Story/story.css'
import './Component/Navbar/navbar.css'
import './App.css'


export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [directActive, setDirectActive] = useState(true)

  const handleActiveTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };

  const [isActive, setIsActive] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true])
  const [active, setActive] = useState(0);
  const [storyScroll, setStoryScroll] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='app'>
              <Navbar activeTab={activeTab} handleActiveTab={handleActiveTab} />
              <Story setActive={setActive} setStoryScroll={setStoryScroll} isActive={isActive} setIsActive={setIsActive} />
              <Post />
              <Sarankan />
            </div>
          }
        />
        <Route
          path="/direct"
          element={
            <div className='app'>
              <Navbar activeTab={activeTab} handleActiveTab={handleActiveTab} directActive={directActive} />
              <Direct />
            </div>
          }
        />
        <Route
          path="/story"
          element={
            <div className='app'>
              <StoryVideo active={active} setActive={setActive} storyScroll={storyScroll} setStoryScroll={setStoryScroll} />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className='app'>
              <Navbar activeTab={activeTab} handleActiveTab={handleActiveTab}/>
              <Profile />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
