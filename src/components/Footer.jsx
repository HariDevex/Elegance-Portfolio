import * as Icons from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
  const footerLinks = {
    Services: ['Web Development', 'Mobile Apps', 'LiDAR Scanning', 'BIM Modeling', 'SEO & Marketing'],
    Company: ['About Us', 'Our Team', 'Contact', 'Careers'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
  }

  return (
    <footer style={{padding:'64px 0',borderTop:'1px solid rgba(255,255,255,.1)'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:'48px',marginBottom:'48px'}}>
          <div>
            <Logo/>
            <p style={{color:'#9ca3af',fontSize:'14px',marginTop:'16px',marginBottom:'16px'}}>Building digital products that help businesses grow. Based in Tamil Nadu, serving clients worldwide.</p>
            <div style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:'#6b7280',marginBottom:'16px'}}>
              <Icons.Building style={{width:'14px',height:'14px'}}/>
              <span>EleganceGeoInfoTech</span>
            </div>
            <a href="https://www.instagram.com/elegancegeoinfotech/" target="_blank" rel="noopener noreferrer" className="glass" style={{width:'40px',height:'40px',borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'background .3s'}}>
              <Icons.Instagram style={{width:'20px',height:'20px'}}/>
            </a>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{fontWeight:'600',marginBottom:'16px',display:'flex',alignItems:'center',gap:'8px'}}>
                {title === 'Services' && <Icons.Layers style={{color:'#38bdf8',width:'18px',height:'18px'}}/>}
                {title === 'Company' && <Icons.Building style={{color:'#38bdf8',width:'18px',height:'18px'}}/>}
                {title === 'Legal' && <Icons.Lock style={{color:'#38bdf8',width:'18px',height:'18px'}}/>}
                {title}
              </h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'12px'}}>
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" style={{color:'#9ca3af',fontSize:'14px',textDecoration:'none',display:'flex',alignItems:'center',gap:'8px',transition:'color .3s'}}>
                      <Icons.ChevronRight style={{width:'14px',height:'14px'}}/> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{paddingTop:'32px',borderTop:'1px solid rgba(255,255,255,.1)'}}>
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'16px',marginBottom:'16px'}}>
            <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'16px',fontSize:'12px',color:'#6b7280'}}>
              <div style={{display:'flex',alignItems:'center',gap:'4px'}}><Icons.Mail style={{width:'12px',height:'12px'}}/> <span>elegancegeoinfotech06@gmail.com</span></div>
              <div style={{display:'flex',alignItems:'center',gap:'4px'}}><Icons.Phone style={{width:'12px',height:'12px'}}/> <span>+91 63691 26125</span></div>
              <div style={{display:'flex',alignItems:'center',gap:'4px'}}><Icons.MapPin style={{width:'12px',height:'12px'}}/> <span>Thippampatti, Dharmapuri, Tamil Nadu</span></div>
            </div>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'16px'}}>
            <p style={{color:'#9ca3af',fontSize:'14px'}}>&copy; 2026 Elegance IT & Geo Infotech. All rights reserved.</p>
            <p style={{color:'#6b7280',fontSize:'12px'}}>Crafted with care in India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
