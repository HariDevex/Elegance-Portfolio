import { useMemo } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { fadeInUpSimple, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../animations'

export const HeroSection = () => {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    })), []
  )

  return (
    <section id="home" style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',paddingTop:'80px'}}>
      <div className="bg-grid" style={{position:'absolute',inset:0,opacity:0.7}}/>
      <div className="bg-dots" style={{position:'absolute',inset:0,opacity:0.5}}/>
      <div style={{position:'absolute',inset:0}}>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{position:'absolute',top:'20%',left:'20%',width:'600px',height:'600px',background:'radial-gradient(circle, rgba(14,165,233,.25) 0%, transparent 70%)',borderRadius:'50%',filter:'blur(120px)'}}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{position:'absolute',bottom:'20%',right:'20%',width:'600px',height:'600px',background:'radial-gradient(circle, rgba(139,92,246,.25) 0%, transparent 70%)',borderRadius:'50%',filter:'blur(120px)'}}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'400px',height:'400px',background:'radial-gradient(circle, rgba(236,72,153,.2) 0%, transparent 70%)',borderRadius:'50%',filter:'blur(100px)'}}
        />
        {particles.map(p => (
          <motion.div
            key={p.id}
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            style={{position:'absolute',left:`${p.x}%`,top:`${p.y}%`,width:p.size,height:p.size,background:'#38bdf8',borderRadius:'50%',opacity:0.6}}
          />
        ))}
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{maxWidth:'80rem',margin:'0 auto',padding:'32px 16px',position:'relative',zIndex:10,display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'64px',alignItems:'center',width:'100%'}}
      >
        <div>
          <motion.div variants={staggerItem} style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'8px 16px',borderRadius:'9999px',background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)',marginBottom:'32px'}}>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{width:'8px',height:'8px',borderRadius:'50%',background:'#4ade80'}}
            />
            <span style={{fontSize:'14px',color:'#d1d5db'}}>Accepting new projects for April 2026</span>
          </motion.div>
          <motion.h1 variants={staggerItem} style={{fontFamily:'Poppins,sans-serif',fontSize:'clamp(2.5rem,5vw,4.5rem)',fontWeight:'800',lineHeight:1.1,marginBottom:'24px'}}>
            We Build<br/>
            <span className="gradient-text">Digital Products</span><br/>
            That Actually Work
          </motion.h1>
          <motion.p variants={staggerItem} style={{color:'#9ca3af',fontSize:'20px',marginBottom:'32px',maxWidth:'36rem',lineHeight:1.6}}>
            From LiDAR scanning to web apps — we deliver projects that help businesses save time, reduce costs, and grow faster. No fluff, just results.
          </motion.p>
          <motion.div variants={staggerItem} style={{display:'flex',flexWrap:'wrap',gap:'16px',marginBottom:'32px'}}>
            <a href="#contact" className="btn-primary" style={{display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none',fontSize:'18px',padding:'16px 32px'}}>
              Book Free Consultation <Icons.ArrowRight/>
            </a>
            <a href="#portfolio" className="btn-outline" style={{fontSize:'18px',padding:'16px 32px'}}>
              See Our Work <Icons.ExternalLink/>
            </a>
          </motion.div>
          <motion.div variants={staggerItem} style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'24px',marginBottom:'32px'}}>
            {[
              { value: '8+', label: 'Years', Icon: Icons.Award },
              { value: '1500+', label: 'Projects', Icon: Icons.Briefcase },
              { value: '900+', label: 'Clients', Icon: Icons.Users },
              { value: '$30M+', label: 'Revenue', Icon: Icons.TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="glass" style={{display:'flex',alignItems:'center',gap:'8px',padding:'12px 16px',borderRadius:'9999px'}}>
                <stat.Icon/>
                <div>
                  <div className="gradient-text-duo" style={{fontSize:'20px',fontWeight:'700'}}>{stat.value}</div>
                  <div style={{fontSize:'12px',color:'#9ca3af'}}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={staggerItem} style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'24px',fontSize:'14px',color:'#9ca3af'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#4ade80'}}/> <span>Registered Company</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#4ade80'}}/> <span>24/7 Support</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#4ade80'}}/> <span>On-Time Delivery</span></div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="desktop-only"
          style={{display:'block'}}
        >
          <div style={{position:'relative',width:'100%',aspectRatio:'1'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(circle, rgba(14,165,233,.2) 0%, rgba(139,92,246,.2) 100%)',borderRadius:'50%',filter:'blur(80px)'}}/>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{position:'absolute',top:'25%',left:'25%',width:'75%',height:'75%',background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'24px',padding:'32px'}}
            >
              <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'24px'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Icons.Code2/>
                </div>
                <div>
                  <div style={{fontWeight:'600'}}>Recent Results</div>
                  <div style={{fontSize:'14px',color:'#9ca3af'}}>Real projects, real impact</div>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                {[
                  { Icon: Icons.Globe, text: 'E-commerce: 40% more sales', result: '+40%', color: '#4ade80' },
                  { Icon: Icons.MapPin, text: 'BIM Project: Saved 200 hrs', result: '-200hrs', color: '#facc15' },
                  { Icon: Icons.Smartphone, text: 'App: 10K+ downloads', result: '10K+', color: '#38bdf8' },
                  { Icon: Icons.Cloud, text: 'Cloud: 99.9% uptime', result: '99.9%', color: '#a78bfa' },
                ].map((item, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px',borderRadius:'8px',background:'rgba(255,255,255,.05)'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                      <item.Icon style={{color:'#38bdf8',width:'16px',height:'16px'}}/>
                      <span style={{fontSize:'14px',color:'#d1d5db'}}>{item.text}</span>
                    </div>
                    <span style={{fontSize:'14px',fontWeight:'700',color:item.color}}>{item.result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{position:'absolute',bottom:'20%',right:'5%',background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'16px',padding:'16px'}}
            >
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'linear-gradient(135deg,#4ade80,#10b981)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Icons.TrendingUp/>
                </div>
                <div>
                  <div style={{fontSize:'14px',fontWeight:'600'}}>Client Success</div>
                  <div style={{fontSize:'12px',color:'#4ade80'}}>+127% Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <div className="scroll-indicator">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{width:'24px',height:'40px',borderRadius:'12px',border:'2px solid rgba(255,255,255,.2)',display:'flex',alignItems:'start',justifyContent:'center',padding:'8px'}}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{width:'6px',height:'6px',borderRadius:'50%',background:'rgba(255,255,255,.4)'}}
          />
        </motion.div>
      </div>
    </section>
  )
}
