export const Logo = () => (
  <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
    <img src="/Logo.png" alt="Elegance IT & Geo Infotech" style={{height:'48px',width:'auto'}}/>
    <div style={{display:'none'}} className="desktop-only">
      <span style={{fontSize:'18px',fontWeight:'700',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)','WebkitBackgroundClip':'text','WebkitTextFillColor':'transparent'}}>Elegance IT &</span>
      <br/>
      <span style={{fontSize:'14px',color:'#9ca3af'}}>Geo Infotech</span>
    </div>
  </div>
)
