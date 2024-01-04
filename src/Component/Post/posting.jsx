import { useState, useEffect } from "react";
import SaveButton from "./savebutton";

export default function Posting({
  profileImg,
  username,
  postImg,
  postTime,
  likes,
  caption,
  commentar,
  liked,
  setLiked,
  posting,
  savedb
}) {
  const [postLikes, setPostLikes] = useState(likes);
  const [showPopUp, setShowPopUp] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = () => {
    const currentTime = new Date().getTime();
    const delta = currentTime - lastTap;

    if (delta < 300 && !liked) {
      // Double-tap within 300 milliseconds and not already liked
      setLiked(true);
      setPostLikes((prevLikes) => prevLikes + 1);
      setShowPopUp(true);

      // Hide the pop-up after a short delay
      setTimeout(() => {
        setShowPopUp(false);
      }, 500);
    }

    setLastTap(currentTime);
  };

  const handleLiked = () => {
    setLiked(!liked);
    setPostLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  };

  useEffect(() => {
    return () => setLastTap(0);
  }, []);

  return (
    <div className="post">
      <div className="post-account">
        <img src={profileImg} alt="Profile" />
        <p>{username}</p>
        <i className="fa-solid fa-circle" style={{ fontSize: '3px', color: 'rgba(255,255,255, 0.65)' }}></i>
        <p style={{ color: 'rgba(255,255,255, 0.65)' }}>{postTime}</p>
        <i className="fa-solid fa-ellipsis" style={{ marginLeft: 'auto' }}></i>
      </div>
      <img
        src={postImg}
        className='post-img'
        onClick={handleDoubleTap}
      />
      <i className={`fa-solid fa-heart like-animation ${showPopUp ? 'pop-up' : ''}`}></i>
      <div className="post-likes">
        <i className={`fa-${liked === true ? 'solid' : 'regular'} fa-heart ${liked === true ? 'liked' : ''}`} onClick={handleLiked}></i>
        <i className="fa-regular fa-comment"></i>
        <i className="fa-solid fa-paper-plane"></i>
        <SaveButton
          posting={posting}
          savedb={savedb}
        />
      </div>
      <div className="post-details">
        <p>{postLikes} likes</p>
        <p><span>{username}</span> <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{caption}</span> <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>selengkapnya</span></p>
        <p style={{ color: 'rgba(255,255,255, 0.5)' }}>Lihat semua {commentar} komentar</p>
        <input type="text" placeholder='Tambahkan komentar...' />
      </div>
    </div>
  );
}
