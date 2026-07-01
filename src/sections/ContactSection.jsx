import { useState } from 'react'
import * as Icons from 'lucide-react'

export const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormState({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { Icon: Icons.Mail, title: 'Email Us', value: 'elegancegeoinfotech06@gmail.com', link: 'mailto:elegancegeoinfotech06@gmail.com' },
    { Icon: Icons.Phone, title: 'Call Us', value: '+91 63691 26125', link: 'tel:+916369126125' },
    { Icon: Icons.MapPin, title: 'Visit Us', value: 'Thippampatti, Dharmapuri, Tamilnadu, India', link: '#' },
  ]

  return (
    <section id="contact" style={{padding:'96px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'64px'}}>
        <div>
          <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em'}}>Get In Touch</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'24px'}}>Let's Build <span className="gradient-text">Something Great</span></h2>
          <p style={{color:'#9ca3af',marginBottom:'32px'}}>Ready to transform your business with cutting-edge technology? Contact us today and let's discuss your project.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
            {contactInfo.map((info, i) => (
              <a key={i} href={info.link} className="glass" style={{display:'flex',alignItems:'center',gap:'16px',padding:'16px',borderRadius:'12px',textDecoration:'none',transition:'border-color .3s'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(14,165,233,.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <info.Icon style={{color:'#38bdf8',width:'24px',height:'24px'}}/>
                </div>
                <div>
                  <div style={{fontSize:'14px',color:'#9ca3af'}}>{info.title}</div>
                  <div style={{fontWeight:'500'}}>{info.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass" style={{borderRadius:'16px',padding:'32px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
            <div>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',marginBottom:'8px'}}>Your Name</label>
              <input type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} style={{width:'100%',padding:'12px 16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',outline:'none',transition:'border-color .3s',fontSize:'16px'}} placeholder="John Doe" required/>
            </div>
            <div>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',marginBottom:'8px'}}>Email Address</label>
              <input type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} style={{width:'100%',padding:'12px 16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',outline:'none',transition:'border-color .3s',fontSize:'16px'}} placeholder="john@example.com" required/>
            </div>
            <div>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',marginBottom:'8px'}}>Your Message</label>
              <textarea value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} rows={5} style={{width:'100%',padding:'12px 16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',outline:'none',transition:'border-color .3s',fontSize:'16px',resize:'none'}} placeholder="Tell us about your project..." required/>
            </div>
            <button type="submit" className="btn-primary" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',width:'100%',padding:'16px',fontSize:'16px',border:'none',cursor:'pointer'}}>
              <Icons.Send style={{width:'18px',height:'18px'}}/> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
