import { useState } from 'react'
import Profile2 from './images/profile2.jpg'
import Profile3 from './images/profile3.jpg'
import Profile4 from './images/profile4.jpg'
import Profile5 from './images/profile5.jpg'
import './navbar.css'

export default function Search() {
  const initialProfiles = [
    { id: 1, username: 'maherzainofficial' },
    { id: 2, username: 'udilsurbakti' },
    { id: 3, username: 'mpl.id.official' },
    { id: 4, username: 'shahihfiqih' },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);

  const handleDelete = (id) => {
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
  };

  const deleteAll = () => {
    setProfiles([])
  }
  return (
    <>
      <h1>Cari</h1>
      <div className="search-input">
        <input type="text" placeholder='Search' />
      </div>
      <div className="search">
        <p>Terbaru</p>
        <i onClick={deleteAll}>Hapus Semua</i>
      </div>
      {profiles.map((profile) => (
        <div key={profile.id} className="search-profile">
          <img src={getProfileImage(profile.id)} alt={profile.username} />
          <div className="search-paragraf">
            <p style={{ fontWeight: 'bolder' }}>{profile.username}</p>
            <div className='search-paragraf-dot'>
              <p>{profile.username}</p>
              <i className="fa-solid fa-circle"></i>
              <p>Mengikuti</p>
            </div>
          </div>
          <i onClick={() => handleDelete(profile.id)}>X</i>
        </div>
      ))}
    </>
  );
}

function getProfileImage(id) {
  switch (id) {
    case 1:
      return Profile2;
    case 2:
      return Profile3;
    case 3:
      return Profile4;
    case 4:
      return Profile5;
    default:
      return null;
  }
}
