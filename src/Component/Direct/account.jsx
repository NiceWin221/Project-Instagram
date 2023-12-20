export default function Account ({profile, username, active, onClick}){
  return(
    <div className="direct-account" onClick={onClick}>
          <img src={profile} />
          <div className="direct-account-details">
            <p>{username}</p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px', marginTop: '8px'}}>Aktif {active}</p>
          </div>
        </div>
  )
}