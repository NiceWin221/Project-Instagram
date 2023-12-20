import { useState } from 'react';
import Account from './account';
import Message from './message';
import Profile from './images/profile.jpg';
import Profile2 from './images/profile2.jpg';
import Profile3 from './images/profile3.jpg';
import Profile4 from './images/profile4.jpg';
import Profile5 from './images/profile5.jpg';
import Profile6 from './images/profile6.jpg';
import Profile7 from './images/profile7.jpg';
import Profile8 from './images/profile8.jpg';
import Profile9 from './images/profile9.jpg';
import Profile10 from './images/profile10.jpg';
import Profile11 from './images/profile11.jpg';
import './direct.css';

export default function Direct() {
  const initialAccounts = [
    { profile: Profile, username: 'Bryan Athallah', active: '1 jam lalu' },
    { profile: Profile2, username: 'Adi Hidayat', active: '8 jam lalu' },
    { profile: Profile3, username: 'Andrew Tate', active: '2 jam lalu' },
    { profile: Profile4, username: 'Hanan Attaki', active: '4 jam lalu' },
    { profile: Profile5, username: 'Sandhika Galih', active: '20 menit lalu' },
    { profile: Profile6, username: 'Agung Hapsah', active: '4 jam lalu' },
    { profile: Profile7, username: 'Bani Adil', active: '2 jam lalu' },
    { profile: Profile8, username: 'Team RRQ', active: '6 jam lalu' },
    { profile: Profile9, username: 'Komik Kamvret', active: '12 jam lalu' },
    { profile: Profile10, username: 'Dagelan', active: '20 jam lalu' },
    { profile: Profile11, username: 'Abdul Shomad', active: '5 menit lalu' }
  ];

  const [accountMessages, setAccountMessages] = useState({});
  const [selectedProfile, setSelectedProfile] = useState(Profile);
  const [inputValue, setInputValue] = useState('');

  const handleAccountClick = (profile) => {
    setSelectedProfile(profile);
    // If messages for the selected profile don't exist, create an empty array
    setAccountMessages((prevMessages) => ({
      ...prevMessages,
      [profile]: prevMessages[profile] || [],
    }));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setAccountMessages((prevMessages) => ({
        ...prevMessages,
        [selectedProfile]: [...(prevMessages[selectedProfile] || []), { text: inputValue }],
      }));
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="direct-container">
      <div className="direct">
        <div className="direct-navbar">
          <p style={{ fontWeight: 'bolder', fontSize: '23px' }}>wybnsa</p>
          <p>v</p>
          <i className="fa-regular fa-pen-to-square" style={{ fontSize: '25px', marginLeft: 'auto' }}></i>
        </div>
        <div className="direct-details">
          <p style={{ fontWeight: 'bolder' }}>Pesan</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginLeft: 'auto' }}>Permintaan</p>
        </div>
        <div className="account-container">
          {initialAccounts.map((account, index) => (
            <Account
              key={index}
              profile={account.profile}
              username={account.username}
              active={account.active}
              onClick={() => handleAccountClick(account.profile)}
            />
          ))}
        </div>
      </div>
      <Message
        inputValue={inputValue}
        messages={accountMessages[selectedProfile] || []}
        selectedProfile={selectedProfile}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        initialAccounts={initialAccounts}
      />
    </div>
  );
}
