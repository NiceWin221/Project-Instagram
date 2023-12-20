import Profile3 from './images/profile3.jpg'
import Profile5 from './images/profile5.jpg'
import Profile6 from './images/profile6.jpg'
import Thumbnail from './images/thumbnail.jpg'
import Thumbnail2 from './images/thumbnail2.jpg'

export default function Notification() {
  return (
    <>
      <h1 style={{ fontWeight: 'bolder' }}>Notifikasi</h1>
      <p style={{ fontWeight: 'bolder', marginLeft: '20px', marginBottom: '20px' }}>Bulan ini</p>
      <div className="notification-container">
        <img src={Profile6} />
        <p>
          <span style={{ fontWeight: 'bolder', display: 'inline' }}>bry.ath</span> menyebut Anda di sebuah komentar: @wybnsa{' '}
          <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'inline' }}>3 minggu</span>
        </p>
        <img src={Thumbnail} style={{ borderRadius: '0' }} />
      </div>
      <div className="notification-container">
        <img src={Profile6} />
        <p>
          <span style={{ fontWeight: 'bolder', display: 'inline' }}>bry.ath</span> menyebut Anda di sebuah komentar: @wybnsa in easy fight <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'inline' }}>3 minggu</span>
          </p>
        <img src={Thumbnail2} style={{ borderRadius: '0' }} />
      </div>
      <p style={{ fontWeight: 'bolder', marginLeft: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.2)', padding: '20px', marginTop: '20px' }}>Lebih Awal</p>
      <div className="notification-container">
        <img src={Profile5} />
        <p>
          <span style={{ fontWeight: 'bolder', display: 'inline' }}>shahihfiqih</span> mulai mengikuti anda <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'inline' }}>6 minggu</span>
          </p>
        <button>Diikuti</button>
      </div>
      <div className="notification-container">
        <img src={Profile3} />
        <p>
          <span style={{ fontWeight: 'bolder', display: 'inline' }}>udilsurbakti,</span> orang yang mungkin anda kenal, ada di instagram <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'inline' }}>2 minggu</span>
          </p>
        <i>ikuti</i>
      </div>
    </>
  )
}