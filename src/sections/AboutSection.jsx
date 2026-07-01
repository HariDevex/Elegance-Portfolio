import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, staggerItem, fadeInUpSimple, fadeInLeft, fadeInRight } from '../animations'

export const AboutSection = () => {
  const stats = [
    { value: '8+', label: 'Years Experience', color: 'from-amber-400 to-orange-500', Icon: Icons.Award },
    { value: '900+', label: 'Happy Clients', color: 'from-blue-400 to-cyan-500', Icon: Icons.Users },
    { value: '1500+', label: 'Projects Done', color: 'from-emerald-400 to-teal-500', Icon: Icons.Briefcase },
    { value: '$30M+', label: 'Client Revenue', color: 'from-purple-400 to-pink-500', Icon: Icons.BarChart3 },
  ]

  const whyChooseUs = [
    { title: 'Fixed Price Projects', description: "No surprises. You know exactly what you'll pay before we start.", Icon: Icons.CheckCircle },
    { title: 'On-Time Delivery', description: 'We respect deadlines. Your project ships when promised.', Icon: Icons.Clock },
    { title: 'Dedicated Support', description: 'Direct access to our team. No ticket system runaround.', Icon: Icons.Headphones },
    { title: 'Transparent Process', description: 'Regular updates and full visibility into your project progress.', Icon: Icons.Eye },
  ]

  return (
    <section id="about" style={{padding:'96px 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.04), transparent)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'64px',alignItems:'center',position:'relative',zIndex:10}}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-badge"><Icons.Info/> About Us</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'24px'}}>We're the team that <span className="gradient-text">actually delivers</span></h2>
          <p style={{color:'#d1d5db',fontSize:'18px',marginBottom:'24px',lineHeight:1.7}}>Based in Tamil Nadu, India, we're a team of developers, designers, and GIS specialists who got tired of watching businesses get burned by agencies that overpromise and underdeliver.</p>
          <p style={{color:'#9ca3af',marginBottom:'24px',lineHeight:1.7}}>We started Elegance IT & Geo Infotech to offer something different: honest pricing, real communication, and projects that actually ship. Whether you need a website, a mobile app, or precision LiDAR scanning — we treat every project like it's our own.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'16px',marginBottom:'32px'}}>
            <div className="glass-strong" style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px 16px',borderRadius:'9999px'}}>
              <Icons.Building style={{color:'#38bdf8',width:'16px',height:'16px'}}/>
              <span style={{fontSize:'14px',color:'#d1d5db'}}>Registered Company</span>
            </div>
            <div className="glass-strong" style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px 16px',borderRadius:'9999px'}}>
              <Icons.MapPin style={{color:'#38bdf8',width:'16px',height:'16px'}}/>
              <span style={{fontSize:'14px',color:'#d1d5db'}}>Dharmapuri, Tamil Nadu</span>
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'16px'}}
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-strong"
                style={{padding:'16px',borderRadius:'12px',display:'flex',alignItems:'flex-start',gap:'12px'}}
              >
                <item.Icon style={{color:'#4ade80',width:'20px',height:'20px',flexShrink:0,marginTop:'2px'}}/>
                <div>
                  <h4 style={{fontWeight:'600',fontSize:'14px',marginBottom:'4px'}}>{item.title}</h4>
                  <p style={{fontSize:'12px',color:'#9ca3af'}}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          style={{position:'relative'}}
        >
          <div style={{position:'absolute',inset:'-16px',background:'linear-gradient(135deg, rgba(14,165,233,.15), rgba(139,92,246,.15))',borderRadius:'24px',filter:'blur(40px)'}}/>
          <div className="glass" style={{position:'relative',borderRadius:'24px',padding:'32px'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'24px'}}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{textAlign:'center',padding:'24px',borderRadius:'16px',background:'rgba(255,255,255,.05)'}}
                >
                  <div style={{width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto 16px',backgroundImage:`linear-gradient(135deg, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[1]})`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <stat.Icon style={{color:'#fff'}}/>
                  </div>
                  <div className="gradient-text-duo" style={{fontSize:'30px',fontWeight:'700',marginBottom:'4px'}}>{stat.value}</div>
                  <div style={{fontSize:'14px',color:'#9ca3af'}}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div style={{marginTop:'32px',padding:'24px',borderRadius:'16px',background:'linear-gradient(135deg, rgba(14,165,233,.08), rgba(139,92,246,.08))',border:'1px solid rgba(14,165,233,.15)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'16px'}}>
                <div style={{display:'flex',marginLeft:'-8px'}}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{width:'40px',height:'40px',borderRadius:'50%',background:'linear-gradient(135deg,#38bdf8,#8b5cf6)',border:'2px solid #08080d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:'700',marginLeft:'-8px'}}>
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <div style={{display:'flex',gap:'2px'}}>
                  {[1,2,3,4,5].map(i => <Icons.Star key={i} style={{color:'#facc15',fill:'#facc15',width:'14px',height:'14px'}}/>)}
                </div>
              </div>
              <p style={{fontSize:'14px',color:'#d1d5db',fontStyle:'italic'}}>"Elegance IT transformed our business with their exceptional web development services. Highly recommended!"</p>
              <p style={{fontSize:'12px',color:'#6b7280',marginTop:'8px'}}>- CEO, Tech Startup</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
