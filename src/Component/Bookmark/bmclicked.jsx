import './bookmark.css'
import Profile2 from './images/profile2.jpg'
import SaveButton from '../Post/savebutton'
import { useState } from 'react'

export default function BMClicked({
  postSaved,
  setPostSaved,
  setPostActive,
  liked,
  savedb,
  test,
  setTest
}) {
  const handlePostUnActive = () => {
    setPostActive(false)
    setPostSaved([])
  }

  const [comment, setComment] = useState('');
  const [postComments, setPostComments] = useState({});

  const handleInputChange = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };

  const handleCommentSubmit = (postId) => {
    // Create a copy of the current post comments
    const currentPostComments = postComments[postId] || [];
    // Add the new comment to the copy
    const newComment = { username: 'wybnsa', text: comment, time: new Date().toLocaleString() };
    const updatedComments = [...currentPostComments, newComment];
    // Update the state with the new comments
    setPostComments({ ...postComments, [postId]: updatedComments });
    // Clear the comment input
    setComment('');
  };

  return (
    <>
      {postSaved.map((post) => (
        <div className="bmclicked-container" key={post.postImg}>
          <div className="bmclicked">
            <img src={post.postImg} />
          </div>
          <div className="bmclicked-details">
            <div className="bmclicked-profile">
              <img src={post.profileImg} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <p style={{ fontWeight: 'bolder' }}>{post.username}</p>
                <i className="fa-solid fa-circle" style={{ fontSize: '3px' }}></i>
                <p style={{ color: '#1890ff' }}>ikuti</p>
              </div>
              <i className="fa-solid fa-ellipsis" style={{ marginLeft: 'auto' }}></i>
            </div>
            <div className="bmclicked-commentar">
              <div className="account-comment">
                <img src={post.profileImg} />
                <div>
                  <span style={{ fontWeight: 'bolder' }}>{post.username}</span> <span style={{ display: 'inline', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {post.caption}
                  </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', display: 'flex', gap: '5px', marginTop: '7px' }}>Telah disunting <i className="fa-solid fa-circle" style={{ fontSize: '3px', paddingTop: '2px' }}></i> {post.postTime}</span>
                </div>
              </div>
              {postComments[post.postImg] &&
                postComments[post.postImg].map((comment, index) => (
                  <div className="account-comment" key={index}>
                    <img src={Profile2} alt="Profile" />
                    <div>
                      <span style={{ fontWeight: 'bolder' }}>{comment.username}</span>{' '}
                      <span style={{ display: 'inline', color: 'rgba(255, 255, 255, 0.8)' }}>
                        {comment.text}
                      </span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', display: 'flex', gap: '5px', marginTop: '7px' }}>
                        {comment.time}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="bmclicked-like">
              <div className="bmclicked-like-details">
                <i className={`fa-${liked === true ? 'solid' : 'regular'} fa-heart ${liked === true ? 'liked' : ''}`}></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i>
                <SaveButton
                  posting={{ id: post.postImg }}
                  savedb={savedb}
                />
              </div>
              <div style={{ padding: '10px 20px', fontSize: '14px' }}>
                <p>{post.likes} like</p>
                <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>22 november 2019</p>
              </div>
              <div className="bmclicked-comment">
                <i className="fa-regular fa-face-smile"></i>
                <input
                  type="text"
                  placeholder='Tambahkan komentar...'
                  value={comment}
                  onChange={handleInputChange}
                />
                <button className={`kirim-button ${comment.trim() !== '' ? 'remove-button' : ''}`} onClick={() => handleCommentSubmit(post.postImg)}>Kirim</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <i className='fa-solid fa-xmark post-close' onClick={handlePostUnActive}></i>
    </>
  )
}