import { useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, staggerItem } from '../animations'

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
    <section id="contact" style={{padding:'96px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(14,165,233,.04), transparent)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'64px',position:'relative',zIndex:10}}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge"><Icons.MessageSquare/> Get In Touch</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'20px'}}>Let's Build <span className="gradient-text">Something Great</span></h2>
          <p style={{color:'#9ca3af',marginBottom:'40px',fontSize:'1.125rem',lineHeight:1.7}}>Ready to transform your business with cutting-edge technology? Contact us today and let's discuss your project.</p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{display:'flex',flexDirection:'column',gap:'16px'}}
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                variants={staggerItem}
                href={info.link}
                whileHover={{ x: 4, borderColor: 'rgba(14,165,233,.3)' }}
                className="glass glass-hover"
                style={{display:'flex',alignItems:'center',gap:'16px',padding:'16px',borderRadius:'12px',textDecoration:'none',transition:'border-color .3s'}}
              >
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(14,165,233,.15)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <info.Icon style={{color:'#38bdf8',width:'24px',height:'24px'}}/>
                </div>
                <div>
                  <div style={{fontSize:'13px',color:'#9ca3af'}}>{info.title}</div>
                  <div style={{fontWeight:'500',fontSize:'15px'}}>{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="glass" style={{borderRadius:'16px',padding:'32px'}}>
            <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label style={{display:'block',fontSize:'14px',fontWeight:'500',marginBottom:'8px',color:'#d1d5db'}}>Your Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  style={{width:'100%',padding:'14px 16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',outline:'none',fontSize:'16px',transition:'border-color .3s'}}
                  placeholder="John Doe"
                  required
                  onFocus={e => e.target.style.borderColor = '#0ea5e9'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label style={{display:'block',fontSize:'14px',fontWeight:'500',marginBottom:'8px',color:'#d1d5db'}}>Email Address</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  style={{width:'100%',padding:'14px 16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',outline:'none',fontSize:'16px',transition:'border-color .3s'}}
                  placeholder="john@example.com"
                  required
                  onFocus={e => e.target.style.borderColor = '#0ea5e9'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label style={{display:'block',fontSize:'14px',fontWeight:'500',marginBottom:'8px',color:'#d1d5db'}}>Your Message</label>
                <textarea
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  rows={5}
                  style={{width:'100%',padding:'14px 16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',outline:'none',fontSize:'16px',resize:'none',transition:'border-color .3s',fontFamily:'inherit'}}
                  placeholder="Tell us about your project..."
                  required
                  onFocus={e => e.target.style.borderColor = '#0ea5e9'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.1)'}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',width:'100%',padding:'16px',fontSize:'16px',border:'none',cursor:'pointer'}}
              >
                <Icons.Send style={{width:'18px',height:'18px'}}/> Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
