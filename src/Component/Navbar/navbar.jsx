import { useNavigate } from 'react-router-dom'
import Profile from './images/profile.jpg'
import Notification from './notification'
import Search from './search'
import './navbar.css'

export default function Navbar({ activeTab, handleActiveTab, directActive }) {
  const navigate = useNavigate()
  const handleDirectClick = () => {
    navigate('/direct')
  }
  const handleHomeClick = () => {
    navigate('/')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }
  return (
    <>
      <div className={`navbar ${activeTab === 1 || directActive === true || activeTab === 3 ? 'slide' : ''}`}>
        <h1>Instagram</h1>
        <div className="instagram-icon">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="navbar-page">
          <div className="navbar-home" onClick={handleHomeClick}>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div className="navbar-home" onClick={() => handleActiveTab(1)}>
            <i className={`fa-solid fa-magnifying-glass ${activeTab === 1 ? 'clicked' : ''}`}></i>
            <p>Search</p>
          </div>
          <div className="navbar-home" >
            <i className="fa-regular fa-compass"></i>
            <p>Explore</p>
          </div>
          <div className="navbar-home" >
            <i className="fa-solid fa-circle-play"></i>
            <p>Reels</p>
          </div>
          <div className="navbar-home" onClick={() => {
            handleActiveTab(2);
            handleDirectClick()
          }}>
            <i className={`fa-regular fa-comment`}></i>
            <p>Chat</p>
          </div>
          <div className="navbar-home" onClick={() => handleActiveTab(3)}>
            <i className={`fa-${activeTab === 3 ? 'solid' : 'regular'} fa-heart ${activeTab === 3 ? 'clicked' : ''}`}></i>
            <p>Notification</p>
          </div>
          <div className="navbar-home" >
            <i className="fa-solid fa-plus"></i>
            <p>Upload</p>
          </div>
          <div className="navbar-home" onClick={handleProfileClick}>
            <img src={Profile} />
            <p>Profile</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="navbar-home">
            <i className="fa-brands fa-threads"></i>
            <p>Threads</p>
          </div>
          <div className="navbar-home">
            <i className="fa-solid fa-bars"></i>
            <p>More</p>
          </div>
        </div>
      </div>
      <div className={`search-container ${activeTab === 1 ? 'active' : ''}`}>
        <Search />
      </div>
      <div className={`search-container ${activeTab === 3 ? 'active' : ''}`}>
        <Notification />
      </div>
    </>
  )
}