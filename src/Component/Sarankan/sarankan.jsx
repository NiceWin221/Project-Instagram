import sarankan from './images/profile.jpg'
import sarankan2 from './images/profile2.jpg'
import sarankan3 from './images/profile3.jpg'
import sarankan4 from './images/profile4.jpg'
import sarankan5 from './images/profile5.jpg'
import sarankan6 from './images/profile6.jpg'
import './sarankan.css'

export default function Sarankan(){
  return(
    <div className="sarankan-container">
      <div className="sarankan">
        <img src={sarankan} />
        <div className="sarankan-paragraf">
          <p style={{fontWeight: 'bolder'}}>wybnsa</p>
          <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>Windy</p>
        </div>
        <i>Alihkan</i>
      </div>
      <div className="disarankan">
        <p style={{color: 'rgba(255, 255, 255, 0.7)'}}>Disarankan untuk Anda</p>
        <i>Lihat Semua</i>
      </div>
      <div className="sarankan">
        <img src={sarankan2} />
        <div className="sarankan-paragraf">
          <p style={{fontWeight: 'bolder'}}>syekh.alijaber</p>
          <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>Diikuti oleh shahihfiqih + 4 lainnya</p>
        </div>
        <i>Ikuti</i>
      </div>
      <div className="sarankan">
        <img src={sarankan3} />
        <div className="sarankan-paragraf">
          <p style={{fontWeight: 'bolder'}}>museid.acg</p>
          <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>Diikuti oleh mortzy_op</p>
        </div>
        <i>Ikuti</i>
      </div>
      <div className="sarankan">
        <img src={sarankan4} />
        <div className="sarankan-paragraf">
          <p style={{fontWeight: 'bolder'}}>awakeningrecords</p>
          <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>Diikuti oleh bry.ath</p>
        </div>
        <i>Ikuti</i>
      </div>
      <div className="sarankan">
        <img src={sarankan5} />
        <div className="sarankan-paragraf">
          <p style={{fontWeight: 'bolder'}}>maherzainofficial</p>
          <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>Diikuti oleh rrq_lj + 2 lainnya</p>
        </div>
        <i>Ikuti</i>
      </div>
      <div className="sarankan">
        <img src={sarankan6} />
        <div className="sarankan-paragraf">
          <p style={{fontWeight: 'bolder'}}>udilsurbakti</p>
          <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>Diikuti oleh baniadil</p>
        </div>
        <i>Ikuti</i>
      </div>
    </div>
  )
}