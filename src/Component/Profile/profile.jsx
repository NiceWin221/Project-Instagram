import './profile.css'
import Profile1 from './images/profile.jpg'
import { useState, useEffect } from 'react'
import Aboutus from '../Aboutus/aboutus'
import '../Aboutus/aboutus.css'
import { useNavigate } from 'react-router-dom'

export default function Profile({ savedb, fetchData, showResult }) {
  const [active, setActive] = useState(1)
  const handleActive = (numb) => {
    setActive(numb)
  }

  useEffect(() => {
    const save = indexedDB.open('save', 1);

    save.addEventListener('success', (event) => {
      savedb = event.target.result;
      showResult();
    });

    save.addEventListener('upgradeneeded', (event) => {
      savedb = event.target.result;
      if (!savedb.objectStoreNames.contains('saveInstagram')) {
        const objectStore = savedb.createObjectStore('saveInstagram', {
          keyPath: 'id', // Set keyPath to null for auto-incrementing keys
          autoIncrement: true,
        });
      }
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate()
  const handleBookmark = () => {
    navigate('/bookmark')
  }

  return (
    <div className='profile'>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={Profile1} />
        </div>
        <div className="profile-account">
          <div className="profile-name">
            <p>wybnsa</p>
            <button>Edit profil</button>
            <button>Lihat arsip</button>
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="profile-follow">
            <p>0 <span>kiriman</span></p>
            <p>107 <span>pengikut</span></p>
            <p>106 <span>diikuti</span></p>
          </div>
          <div className="profile-description">
            <p>Windy</p>
            <p style={{ marginTop: '10px', color: 'rgba(255, 255, 255, 0.9)' }}>Minggu 👍</p>
          </div>
        </div>
      </div>
      <div className="profile-story">
        <div className="profile-story-add">
          <button><i className="fa-solid fa-plus"></i></button>
          <p style={{ marginTop: '20px', fontSize: 'smaller' }}>Baru</p>
        </div>
      </div>
      <div className="profile-post">
        <div className={`postingan ${active === 1 ? 'active' : ''}`} onClick={() => handleActive(1)}>
          <i className="fa-solid fa-table-cells"></i>
          <p>POSTINGAN</p>
        </div>
        <div className={`tersimpan ${active === 2 ? 'active' : ''}`} onClick={() => { showResult(); handleActive(2) }}>
          <i className="fa-regular fa-bookmark"></i>
          <p>TERSIMPAN</p>
        </div>
        <div className={`disukai ${active === 3 ? 'active' : ''}`} onClick={() => handleActive(3)}>
          <i className="fa-regular fa-heart"></i>
          <p>DISUKAI</p>
        </div>
      </div>
      {active === 1 ? (
        <div className="posted">
          <i className="fa-solid fa-camera"></i>
          <h1>Belum Ada Postingan</h1>
        </div>
      ) : ''}
      {active === 2 ?
        (
          <div className="saved-parent">
            <div className="saved-post" onClick={() => { handleBookmark(); showResult(); }}>
              {fetchData.map((post) => (
                <div className="saved-cover" key={post.postImg}>
                  <img src={post.postImg} />
                </div>
              ))}
            </div>
          </div>
        ) : ''}
      {active === 3 ? (
        <div className="liked-post">

        </div>
      ) : ''}
      <div style={{ marginTop: '80px' }}>
        <Aboutus />
        <div className="meta">
          <p>Bahasa Indonesia</p>
          <i className="fa-solid fa-chevron-down" style={{ border: 'none', marginRight: '15px' }}></i>
          <i className="fa-solid fa-c"></i>
          <p>2023 Instagram from Meta</p>
        </div>
      </div>
    </div>
  )
}