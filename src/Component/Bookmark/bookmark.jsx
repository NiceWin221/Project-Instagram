import './bookmark.css';
import { useNavigate } from 'react-router-dom';
import BMClicked from './bmclicked';
import { useState } from 'react';

export default function Bookmark({ savedPosts, bookmark, posting, liked, setLiked }) {
  const navigate = useNavigate();
  const [postActive, setPostActive] = useState(false);
  const [postClick, setPostClick] = useState(null);
  const [postSaved, setPostSaved] = useState([])

  const handlePostClick = (index) => {
    const clickedPost = savedPosts[index]
    setPostSaved((prevPostSaved) => [...prevPostSaved, clickedPost])
    setPostClick(index);
    setPostActive(true);
  };

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <>
      <div className="bookmark-container">
        <div style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'flex', gap: '5px', padding: '30px 0 10px 10px', cursor: 'pointer' }} onClick={handleBack}>
          <i className="fa-solid fa-chevron-left"></i>
          <p>Tersimpan</p>
        </div>
        <h1>Semua Postingan</h1>
        <div className="bookmark-saved">
          {savedPosts.map((post, index) => (
            <div key={post.postImg} className="bookmark" onClick={() => handlePostClick(index)}>
              <img src={post.postImg} alt={post.caption} />
              <div className='bookmark-details'>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <i className="fa-solid fa-heart"></i>
                  <p>{post.likes}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <i className="fa-solid fa-comment"></i>
                  <p>{post.commentar}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {postActive && (
        <div className="bmclicked-parent">
          <BMClicked
            key={postClick}
            postSaved={postSaved}
            setPostSaved={setPostSaved}
            postActive={postActive}
            setPostActive={setPostActive}
            bookmark={bookmark[postClick]}
            liked={liked[postClick]}
            profileImg={posting[postClick].profileImg}
            username={posting[postClick].username}
            postImg={posting[postClick].postImg}
            postTime={posting[postClick].postTime}
            likes={posting[postClick].likes}
            caption={posting[postClick].caption}
            commentar={posting[postClick].commentar}
          />
        </div>
      )}
    </>
  );
}
