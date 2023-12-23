import './bookmark.css'
import { useNavigate } from 'react-router-dom'
import BMClicked from './bmclicked'
import { useState } from 'react'

export default function Bookmark({ savedPosts, bookmark }) {
  const navigate = useNavigate()
  const [postActive, setPostActive] = useState(false)

  const handlePostActive = () => {
    setPostActive(true)
  }
  const handleBack = () => {
    navigate('/profile')
  }

  return (
    <>
      <div className="bookmark-container">
        <div style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'flex', gap: '5px', padding: '30px 0 10px 10px', cursor: 'pointer' }} onClick={handleBack}>
          <i className="fa-solid fa-chevron-left"></i>
          <p>Tersimpan</p>
        </div>
        <h1>Semua Postingan</h1>
        <div className="bookmark-saved">
          {savedPosts.map((post) => (
            <div key={post.postImg} className="bookmark" onClick={handlePostActive}>
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
          <BMClicked savedPosts={savedPosts} postActive={postActive} setPostActive={setPostActive} bookmark={bookmark[1]} />
        </div>
      )}
    </>
  )
}