import { motion } from 'framer-motion'

export const Logo = () => (
  <motion.a
    href="#home"
    whileHover={{ scale: 1.02 }}
    style={{display:'flex',alignItems:'center',gap:'12px',textDecoration:'none'}}
  >
    <img src="/Logo.png" alt="Elegance IT & Geo Infotech" style={{height:'48px',width:'auto'}}/>
    <div className="desktop-only" style={{display:'none'}}>
      <span style={{fontSize:'18px',fontWeight:'700',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)','WebkitBackgroundClip':'text','WebkitTextFillColor':'transparent'}}>Elegance IT &</span>
      <br/>
      <span style={{fontSize:'14px',color:'#9ca3af'}}>Geo Infotech</span>
    </div>
  </motion.a>
)
