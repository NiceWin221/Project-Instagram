import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Navbar from './Component/Navbar/navbar'
import Story from './Component/Story/story'
import Post from './Component/Post/post'
import Sarankan from './Component/Sarankan/sarankan'
import Direct from "./Component/Direct/direct";
import StoryVideo from "./Component/StoryVideo/storyvideo";
import Profile from "./Component/Profile/profile";
import Bookmark from "./Component/Bookmark/bookmark";
import './Component/Bookmark/bookmark.css'
import './Component/Profile/profile.css'
import "./Component/StoryVideo/storyvideo.css";
import './Component/Direct/direct.css'
import './Component/Sarankan/sarankan'
import './Component/Post/post.css'
import './Component/Story/story.css'
import './Component/Navbar/navbar.css'
import './App.css'

// Posting //

import profile from './images/profile.jpg'
import profilePost from './images/profile-post.jpg'
import profile2 from './images/profile2.jpg'
import profile2Post from './images/profile2-post.jpg'
import profile3 from './images/profile3.jpg'
import profile3Post from './images/profile3-post.jpg'

// Posting //

export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [directActive, setDirectActive] = useState(true)


  const handleActiveTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };


  const [isActive, setIsActive] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true])
  const [active, setActive] = useState(0);
  const [storyScroll, setStoryScroll] = useState(0);


  const [savedPosts, setSavedPosts] = useState([]);
  const [bookmark, setBookmark] = useState([false, false, false]);

  const posting = [
    {
      profileImg: profile3,
      username: "museid.acg",
      postImg: profile3Post,
      postTime: "3 days",
      likes: 7809,
      caption: "Film anime Haikyuu!! The Movie: Decisive Battle at the Garbage Dump releases a new visual!...",
      commentar: '584',
    },
    {
      profileImg: profile2,
      username: "mpl.id.official",
      postImg: profile2Post,
      postTime: "1 hour",
      likes: 42099,
      caption: "ONIC emerges as a formidable presence in the M5 World Championship this time...",
      commentar: '8321',
    },
    {
      profileImg: profile,
      username: "shahihfiqih",
      postImg: profilePost,
      postTime: "1 day",
      likes: 2206,
      caption: "Among the prayers for self-ruqyah...",
      commentar: '243',
    },
  ];


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='app'>
              <Navbar
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
              />
              <Story
                setActive={setActive}
                setStoryScroll={setStoryScroll}
                isActive={isActive}
                setIsActive={setIsActive}
              />
              <Post
                savedPosts={savedPosts}
                setSavedPosts={setSavedPosts}
                bookmark={bookmark}
                setBookmark={setBookmark}
                posting={posting}
              />
              <Sarankan />
            </div>
          }
        />
        <Route
          path="/direct"
          element={
            <div className='app'>
              <Navbar
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
                directActive={directActive}
              />
              <Direct />
            </div>
          }
        />
        <Route
          path="/story"
          element={
            <div className='app'>
              <StoryVideo
                active={active}
                setActive={setActive}
                storyScroll={storyScroll}
                setStoryScroll={setStoryScroll}
              />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className='app'>
              <Navbar
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
              />
              <Profile
                savedPosts={savedPosts}
              />
            </div>
          }
        />
        <Route
          path="/bookmark"
          element={
            <div className='app'>
              <Navbar
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
              />
              <Bookmark
                savedPosts={savedPosts}
                bookmark={bookmark}
                setSavedPosts={setSavedPosts}
                posting={posting}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
