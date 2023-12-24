import './bookmark.css'
import Post from './images/post.jpg'
import Profile from './images/profile.jpg'

export default function BMClicked({
  postSaved,
  setPostSaved,
  setPostActive,
  bookmark
}) {
  const handlePostUnActive = () => {
    setPostActive(false)
    setPostSaved([])
  }

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
                <p>{post.username}</p>
                <i className="fa-solid fa-circle" style={{ fontSize: '3px' }}></i>
                <p style={{ color: '#1890ff' }}>ikuti</p>
              </div>
              <i className="fa-solid fa-ellipsis" style={{ marginLeft: 'auto' }}></i>
            </div>
            <div className="bmclicked-commentar">

            </div>
            <div className="bmclicked-like">
              <div className="bmclicked-like-details">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i>
                <i className={`fa-${bookmark === true ? 'solid' : 'regular'} fa-bookmark ${bookmark === true ? 'saved' : ''}`} style={{ marginLeft: 'auto' }} ></i>
              </div>
              <div style={{ padding: '10px 20px', fontSize: '14px' }}>
                <p>{post.likes} like</p>
                <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>22 november 2019</p>
              </div>
              <div className="bmclicked-comment">
                <i className="fa-regular fa-face-smile"></i>
                <input type="text" placeholder='Tambahkan komentar...' />
                <p>Kirim</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <i className='fa-solid fa-xmark post-close' onClick={handlePostUnActive}></i>
    </>
  )
}