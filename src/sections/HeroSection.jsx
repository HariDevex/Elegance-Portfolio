import * as Icons from 'lucide-react'

export const HeroSection = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <section id="home" style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',paddingTop:'80px'}}>
      <div className="bg-grid" style={{position:'absolute',inset:0}}/>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
        <div style={{position:'absolute',top:'25%',left:'25%',width:'500px',height:'500px',background:'radial-gradient(circle, rgba(14,165,233,.3) 0%, transparent 70%)',borderRadius:'50%',filter:'blur(150px)',animation:'pulse 4s ease-in-out infinite'}}/>
        <div style={{position:'absolute',bottom:'25%',right:'25%',width:'500px',height:'500px',background:'radial-gradient(circle, rgba(139,92,246,.3) 0%, transparent 70%)',borderRadius:'50%',filter:'blur(150px)',animation:'pulse 4s ease-in-out infinite',animationDelay:'2s'}}/>
        {particles.map((particle) => (
          <div key={particle.id} style={{position:'absolute',left:`${particle.x}%`,top:`${particle.y}%`,width:particle.size,height:particle.size,background:'#38bdf8',borderRadius:'50%',animation:`float ${particle.duration}s ease-in-out infinite`,animationDelay:`${particle.delay}s`}}/>
        ))}
      </div>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'32px 16px',position:'relative',zIndex:10,display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'64px',alignItems:'center',width:'100%'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'8px 16px',borderRadius:'9999px',background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)',marginBottom:'32px'}}>
            <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#4ade80',animation:'pulse 2s ease-in-out infinite'}}/>
            <span style={{fontSize:'14px',color:'#d1d5db'}}>Accepting new projects for April 2026</span>
          </div>
          <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'clamp(2.5rem,5vw,4.5rem)',fontWeight:'800',lineHeight:1.1,marginBottom:'24px'}}>
            We Build<br/>
            <span className="gradient-text">Digital Products</span><br/>
            That Actually Work
          </h1>
          <p style={{color:'#9ca3af',fontSize:'20px',marginBottom:'32px',maxWidth:'36rem',lineHeight:1.6}}>
            From LiDAR scanning to web apps — we deliver projects that help businesses save time, reduce costs, and grow faster. No fluff, just results.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'16px',marginBottom:'32px'}}>
            <a href="#contact" className="btn-primary" style={{display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none',boxShadow:'0 10px 30px rgba(14,165,233,.3)'}}>
              Book Free Consultation <Icons.ArrowRight/>
            </a>
            <a href="#portfolio" className="glass" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'16px 32px',borderRadius:'9999px',color:'#fff',textDecoration:'none',fontWeight:'600',fontSize:'18px'}}>
              See Our Work <Icons.ExternalLink/>
            </a>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'24px',marginBottom:'32px'}}>
            {[
              { value: '8+', label: 'Years', Icon: Icons.Award },
              { value: '1500+', label: 'Projects', Icon: Icons.Briefcase },
              { value: '900+', label: 'Clients', Icon: Icons.Users },
              { value: '$30M+', label: 'Revenue', Icon: Icons.TrendingUp },
            ].map((stat, i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',padding:'12px 16px',borderRadius:'9999px',background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)'}}>
                <stat.Icon/>
                <div>
                  <div style={{fontSize:'20px',fontWeight:'700',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)','WebkitBackgroundClip':'text','WebkitTextFillColor':'transparent'}}>{stat.value}</div>
                  <div style={{fontSize:'12px',color:'#9ca3af'}}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'24px',fontSize:'14px',color:'#9ca3af'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#4ade80'}}/> <span>Registered Company</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#4ade80'}}/> <span>24/7 Support</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#4ade80'}}/> <span>On-Time Delivery</span></div>
          </div>
        </div>
        <div style={{display:'none'}} className="desktop-only">
          <div style={{position:'relative',width:'100%',aspectRatio:'1'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(circle, rgba(14,165,233,.3) 0%, rgba(139,92,246,.3) 100%)',borderRadius:'50%',filter:'blur(100px)'}}/>
            <div style={{position:'absolute',top:'25%',left:'25%',width:'75%',height:'75%',background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'24px',padding:'32px',animation:'float 4s ease-in-out infinite'}}>
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
                  { Icon: Icons.Globe, text: 'E-commerce: 40% more sales', result: '+40%' },
                  { Icon: Icons.MapPin, text: 'BIM Project: Saved 200 hrs', result: '-200hrs' },
                  { Icon: Icons.Smartphone, text: 'App: 10K+ downloads', result: '10K+' },
                  { Icon: Icons.Cloud, text: 'Cloud: 99.9% uptime', result: '99.9%' },
                ].map((item, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px',borderRadius:'8px',background:'rgba(255,255,255,.05)'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                      <item.Icon style={{color:'#38bdf8',width:'16px',height:'16px'}}/>
                      <span style={{fontSize:'14px',color:'#d1d5db'}}>{item.text}</span>
                    </div>
                    <span style={{fontSize:'14px',fontWeight:'700',color:'#4ade80'}}>{item.result}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:'absolute',bottom:'25%',right:0,background:'rgba(255,255,255,.05)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'16px',padding:'16px',animation:'float 3s ease-in-out infinite',animationDelay:'1s'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'linear-gradient(135deg,#4ade80,#10b981)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Icons.TrendingUp/>
                </div>
                <div>
                  <div style={{fontSize:'14px',fontWeight:'600'}}>Client Success</div>
                  <div style={{fontSize:'12px',color:'#4ade80'}}>+127% Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div style={{width:'24px',height:'40px',borderRadius:'12px',border:'2px solid rgba(255,255,255,.3)',display:'flex',alignItems:'start',justifyContent:'center',padding:'8px',animation:'float 1.5s ease-in-out infinite'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'rgba(255,255,255,.5)',animation:'float 1.5s ease-in-out infinite'}}/>
        </div>
      </div>
    </section>
  )
}
