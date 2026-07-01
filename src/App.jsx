import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'

const Logo = () => (
  <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
    <img src="/Logo.png" alt="Elegance IT & Geo Infotech" style={{height:'48px',width:'auto'}}/>
    <div style={{display:'none'}} className="desktop-only">
      <span style={{fontSize:'18px',fontWeight:'700',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)','WebkitBackgroundClip':'text','WebkitTextFillColor':'transparent'}}>Elegance IT &</span>
      <br/>
      <span style={{fontSize:'14px',color:'#9ca3af'}}>Geo Infotech</span>
    </div>
  </div>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`} style={{padding: scrolled ? '12px 0' : '20px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Logo/>
        <div style={{display:'flex',alignItems:'center',gap:'32px'}} className="desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{color:'#d1d5db',textDecoration:'none',fontSize:'14px',fontWeight:'500',transition:'color .3s'}} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='#d1d5db'}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{textDecoration:'none',fontSize:'14px'}}>Get Started</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} style={{background:'none',border:'none',color:'#fff',cursor:'pointer',padding:'8px'}} className="mobile-menu-trigger">
          {isOpen ? <Icons.X/> : <Icons.Menu/>}
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="glass" style={{padding:'24px',borderRadius:'16px'}}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{display:'block',color:'#d1d5db',textDecoration:'none',padding:'8px 0',fontSize:'16px'}}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{display:'block',textAlign:'center',marginTop:'16px',textDecoration:'none'}}>Get Started</a>
        </div>
      </div>
    </nav>
  );
};

const CountUp = ({ value, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <div className="count-up">{prefix}{count.toLocaleString()}{suffix}</div>;
};

const HeroSection = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

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
  );
};

const ServicesSection = () => {
  const services = [
    { Icon: Icons.Globe, title: 'Web Development', description: 'Build modern, responsive websites and web applications that drive engagement and conversions.', features: ['Custom Websites', 'E-commerce Solutions', 'Progressive Web Apps', 'WordPress & CMS'], color: 'from-blue-500 to-cyan-500' },
    { Icon: Icons.Smartphone, title: 'Mobile App Development', description: 'Create powerful mobile applications for iOS and Android that users love.', features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'], color: 'from-purple-500 to-pink-500' },
    { Icon: Icons.MapPin, title: 'GIS & Mapping', description: 'Leverage geographic data with advanced mapping and spatial analysis solutions.', features: ['Interactive Maps', 'Spatial Analysis', 'GeoData Integration', 'Location Services'], color: 'from-emerald-500 to-teal-500' },
    { Icon: Icons.Palette, title: 'Graphic Design', description: 'Stunning visual designs that capture your brand essence and captivate your audience.', features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design'], color: 'from-orange-500 to-amber-500' },
    { Icon: Icons.Database, title: 'Data Management', description: 'Organize, secure, and optimize your data for actionable insights and growth.', features: ['Database Design', 'Data Migration', 'Cloud Storage', 'Analytics & Reporting'], color: 'from-indigo-500 to-violet-500' },
    { Icon: Icons.Cloud, title: 'Cloud Solutions', description: 'Scale your infrastructure with reliable and cost-effective cloud services.', features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Server Management'], color: 'from-sky-500 to-blue-500' },
    { Icon: Icons.Code2, title: 'Software Development', description: 'Custom software solutions built to solve your unique business challenges.', features: ['Custom Software', 'API Development', 'Third-party Integrations', 'Legacy Modernization'], color: 'from-rose-500 to-red-500' },
    { Icon: Icons.Shield, title: 'Cybersecurity', description: 'Protect your digital assets with comprehensive security solutions.', features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'], color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="services" style={{padding:'96px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(14,165,233,.05), transparent)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em'}}>What We Offer</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'24px'}}>Our <span className="gradient-text">Services</span></h2>
          <p style={{color:'#9ca3af',maxWidth:'42rem',margin:'0 auto'}}>Comprehensive IT & Geo Infotech solutions - From web development to GIS mapping, we deliver excellence in every project.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'24px'}}>
          {services.map((service, i) => (
            <div key={i} className="card" style={{cursor:'pointer'}}>
              <div style={{width:'56px',height:'56px',borderRadius:'16px',backgroundImage:`linear-gradient(135deg, ${service.color.includes('blue')?'#3b82f6':'#a855f7'}, ${service.color.includes('cyan')?'#06b6d4':'#ec4899'})`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'24px'}}>
                <service.Icon style={{color:'#fff'}}/>
              </div>
              <h3 style={{fontSize:'20px',fontWeight:'600',marginBottom:'12px'}}>{service.title}</h3>
              <p style={{color:'#9ca3af',fontSize:'14px',marginBottom:'16px'}}>{service.description}</p>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {service.features.map((feature, j) => (
                  <div key={j} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'#d1d5db'}}>
                    <Icons.CheckCircle style={{color:'#38bdf8',width:'14px',height:'14px'}}/> {feature}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{display:'block',marginTop:'16px',paddingTop:'16px',borderTop:'1px solid rgba(255,255,255,.1)',color:'#38bdf8',fontSize:'14px',fontWeight:'500',textDecoration:'none'}}>
                Learn More <Icons.ChevronRight/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const stats = [
    { value: '8+', label: 'Years Experience', color: 'from-amber-400 to-orange-500', Icon: Icons.Award },
    { value: '900+', label: 'Happy Clients', color: 'from-blue-400 to-cyan-500', Icon: Icons.Users },
    { value: '1500+', label: 'Projects Done', color: 'from-emerald-400 to-teal-500', Icon: Icons.Briefcase },
    { value: '$30M+', label: 'Client Revenue', color: 'from-purple-400 to-pink-500', Icon: Icons.BarChart3 },
  ];

  const whyChooseUs = [
    { title: 'Fixed Price Projects', description: "No surprises. You know exactly what you'll pay before we start.", Icon: Icons.CheckCircle },
    { title: 'On-Time Delivery', description: 'We respect deadlines. Your project ships when promised.', Icon: Icons.Clock },
    { title: 'Dedicated Support', description: 'Direct access to our team. No ticket system runaround.', Icon: Icons.Headphones },
    { title: 'Transparent Process', description: 'Regular updates and full visibility into your project progress.', Icon: Icons.Eye },
  ];

  return (
    <section id="about" style={{padding:'96px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'64px',alignItems:'center'}}>
        <div>
          <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em'}}>About Us</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'24px'}}>We're the team that <span className="gradient-text">actually delivers</span></h2>
          <p style={{color:'#d1d5db',fontSize:'18px',marginBottom:'24px',lineHeight:1.6}}>Based in Tamil Nadu, India, we're a team of developers, designers, and GIS specialists who got tired of watching businesses get burned by agencies that overpromise and underdeliver.</p>
          <p style={{color:'#9ca3af',marginBottom:'24px',lineHeight:1.6}}>We started Elegance IT & Geo Infotech to offer something different: honest pricing, real communication, and projects that actually ship. Whether you need a website, a mobile app, or precision LiDAR scanning — we treat every project like it's our own.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'16px',marginBottom:'32px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px 16px',borderRadius:'9999px',background:'rgba(255,255,255,.05)'}}>
              <Icons.Building style={{color:'#38bdf8',width:'16px',height:'16px'}}/>
              <span style={{fontSize:'14px',color:'#d1d5db'}}>Registered Company</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px 16px',borderRadius:'9999px',background:'rgba(255,255,255,.05)'}}>
              <Icons.MapPin style={{color:'#38bdf8',width:'16px',height:'16px'}}/>
              <span style={{fontSize:'14px',color:'#d1d5db'}}>Dharmapuri, Tamil Nadu</span>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'16px'}}>
            {whyChooseUs.map((item, i) => (
              <div key={i} style={{padding:'16px',borderRadius:'12px',background:'rgba(255,255,255,.05)',display:'flex',alignItems:'flex-start',gap:'12px'}}>
                <item.Icon style={{color:'#4ade80',width:'20px',height:'20px',flexShrink:0,marginTop:'2px'}}/>
                <div>
                  <h4 style={{fontWeight:'600',fontSize:'14px',marginBottom:'4px'}}>{item.title}</h4>
                  <p style={{fontSize:'12px',color:'#9ca3af'}}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',inset:'-16px',background:'linear-gradient(135deg, rgba(14,165,233,.2), rgba(139,92,246,.2))',borderRadius:'24px',filter:'blur(40px)'}}/>
          <div className="glass" style={{position:'relative',borderRadius:'24px',padding:'32px'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'24px'}}>
              {stats.map((stat, i) => (
                <div key={i} style={{textAlign:'center',padding:'24px',borderRadius:'16px',background:'rgba(255,255,255,.05)'}}>
                  <div style={{width:'48px',height:'48px',borderRadius:'12px',margin:'0 auto 16px',backgroundImage:`linear-gradient(135deg, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[1]})`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <stat.Icon style={{color:'#fff'}}/>
                  </div>
                  <div style={{fontSize:'30px',fontWeight:'700',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)','WebkitBackgroundClip':'text','WebkitTextFillColor':'transparent',marginBottom:'4px'}}>{stat.value}</div>
                  <div style={{fontSize:'14px',color:'#9ca3af'}}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:'32px',padding:'24px',borderRadius:'16px',background:'linear-gradient(135deg, rgba(14,165,233,.1), rgba(139,92,246,.1))',border:'1px solid rgba(14,165,233,.2)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'16px'}}>
                <div style={{display:'flex',marginLeft:'-8px'}}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{width:'40px',height:'40px',borderRadius:'50%',background:'linear-gradient(135deg,#38bdf8,#8b5cf6)',border:'2px solid #0a0a0f',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:'700',marginLeft:'-8px'}}>
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <div style={{display:'flex',gap:'2px'}}>
                  {[1,2,3,4,5].map(i => <Icons.Star key={i} style={{color:'#facc15',fill:'#facc15',width:'14px',height:'14px'}}/>)}
                </div>
              </div>
              <p style={{fontSize:'14px',color:'#d1d5db'}}>"Elegance IT transformed our business with their exceptional web development services. Highly recommended!"</p>
              <p style={{fontSize:'12px',color:'#6b7280',marginTop:'8px'}}>- CEO, Tech Startup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedStatsSection = () => {
  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', Icon: Icons.Award },
    { value: 1500, suffix: '+', label: 'Projects Completed', Icon: Icons.Briefcase },
    { value: 900, suffix: '+', label: 'Happy Clients', Icon: Icons.Users },
    { value: 30, prefix: '$', suffix: 'M+', label: 'Revenue Generated', Icon: Icons.TrendingUp },
  ];

  return (
    <section style={{padding:'80px 0',position:'relative',overflow:'hidden'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:'24px'}}>
          {stats.map((stat, i) => (
            <div key={i} className="glass" style={{borderRadius:'16px',padding:'24px',textAlign:'center'}}>
              <div style={{width:'56px',height:'56px',margin:'0 auto 16px',borderRadius:'16px',background:'rgba(14,165,233,.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <stat.Icon style={{color:'#38bdf8',width:'28px',height:'28px'}}/>
              </div>
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix}/>
              <p style={{color:'#9ca3af',fontSize:'14px',marginTop:'8px'}}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientLogosSection = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'GeoSystems', logo: 'GS' },
    { name: 'BuildRight', logo: 'BR' },
    { name: 'DataPro', logo: 'DP' },
    { name: 'CloudBase', logo: 'CB' },
    { name: 'MapMaster', logo: 'MM' },
  ];

  return (
    <section style={{padding:'64px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}>
        <div style={{textAlign:'center',marginBottom:'48px'}}>
          <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em'}}>Trusted By</span>
          <h3 style={{fontSize:'20px',fontWeight:'600',marginTop:'8px',color:'#9ca3af'}}>Our Trusted Partners & Clients</h3>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'32px'}}>
          {clients.map((client, i) => (
            <div key={i} className="glass" style={{borderRadius:'12px',padding:'16px 32px',display:'flex',alignItems:'center',gap:'12px',cursor:'pointer'}}>
              <div style={{width:'40px',height:'40px',borderRadius:'8px',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',fontSize:'14px'}}>
                {client.logo}
              </div>
              <span style={{fontWeight:'500',color:'#d1d5db'}}>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Vikram Singh', role: 'Project Manager', company: 'BuildCorp India', image: '', text: 'Their BIM models helped us win a government contract. Delivered 3 weeks early and saved us ₹4 lakhs in rework costs.', result: '₹4L saved', rating: 5 },
    { name: 'Meera Krishnan', role: 'Director', company: 'GeoVision Labs', image: '', text: 'The LiDAR survey they did for our highway project was incredibly accurate. 15,000 data points processed in just 5 days.', result: '5 days delivery', rating: 5 },
    { name: 'Anand Patel', role: 'CEO', company: 'RetailMart', image: '', text: 'Our e-commerce website went from 0 to 500 orders/day in 3 months. The SEO work alone brought us 300% more traffic.', result: '300% more traffic', rating: 5 },
  ];

  return (
    <section style={{padding:'96px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.05), transparent)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px'}}><Icons.Quote/> Client Results</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'24px'}}>Real Results, <span className="gradient-text">Real Clients</span></h2>
          <p style={{color:'#9ca3af',maxWidth:'42rem',margin:'0 auto'}}>Don't just take our word for it. Here's what our clients achieved with our solutions.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'24px'}}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="glass" style={{borderRadius:'16px',padding:'24px',position:'relative'}}>
              <div style={{position:'absolute',top:'16px',right:'16px',padding:'4px 12px',borderRadius:'9999px',background:'rgba(34,197,94,.2)'}}>
                <span style={{color:'#4ade80',fontSize:'12px',fontWeight:'700'}}>{testimonial.result}</span>
              </div>
              <Icons.Quote style={{color:'rgba(14,165,233,.3)',width:'32px',height:'32px'}}/>
              <div style={{display:'flex',alignItems:'center',gap:'16px',marginTop:'8px',marginBottom:'16px'}}>
                <img src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0ea5e9&color=fff&bold=true`} alt={testimonial.name} style={{width:'56px',height:'56px',borderRadius:'50%',objectFit:'cover',border:'2px solid #0ea5e9'}}/>
                <div>
                  <h4 style={{fontWeight:'600'}}>{testimonial.name}</h4>
                  <p style={{fontSize:'14px',color:'#9ca3af'}}>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <div style={{display:'flex',gap:'4px',marginBottom:'16px'}}>
                {[...Array(testimonial.rating)].map((_, j) => <Icons.Star key={j} style={{color:'#facc15',fill:'#facc15',width:'14px',height:'14px'}}/>)}
              </div>
              <p style={{color:'#d1d5db',fontSize:'14px',lineHeight:1.6}}>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  const certs = [
    { name: 'ISO 9001:2015', Icon: Icons.BadgeCheck, desc: 'Quality Management' },
    { name: 'Google Partner', Icon: Icons.Hexagon, desc: 'Digital Marketing' },
    { name: 'AWS Certified', Icon: Icons.Cloud, desc: 'Cloud Services' },
    { name: 'GIS Professional', Icon: Icons.MapPin, desc: 'GIS Solutions' },
  ];

  return (
    <section style={{padding:'48px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'24px'}}>
          {certs.map((cert, i) => (
            <div key={i} className="glass" style={{display:'flex',alignItems:'center',gap:'12px',borderRadius:'9999px',padding:'12px 24px'}}>
              <cert.Icon style={{color:'#38bdf8',width:'20px',height:'20px'}}/>
              <div>
                <span style={{fontWeight:'500',fontSize:'14px'}}>{cert.name}</span>
                <span style={{color:'#9ca3af',fontSize:'12px',display:'block'}}>{cert.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What services does Elegance IT & Geo Infotech offer?', answer: 'We offer a comprehensive range of IT services including Web Development, Mobile App Development, GIS & Mapping Solutions, Graphic Design, Data Management, Cloud Solutions, Software Development, and Cybersecurity services.' },
    { question: 'How long does it take to complete a project?', answer: 'Project timelines vary based on complexity. A simple website can take 2-4 weeks, while complex applications may take 2-6 months. We provide detailed timelines during our initial consultation.' },
    { question: 'Do you provide post-launch support?', answer: 'Yes! We offer comprehensive post-launch support including bug fixes, updates, security patches, and optional maintenance packages to keep your project running smoothly.' },
    { question: 'What technologies do you work with?', answer: 'We work with modern technologies including React, Next.js, React Native, Flutter, Python, Node.js, AWS, Azure, and various GIS platforms like QGIS and ArcGIS.' },
    { question: 'Can you help with existing projects?', answer: 'Absolutely! We can take over existing projects, perform code audits, optimize performance, add new features, or help with migration to modern technologies.' },
    { question: 'How much does a typical project cost?', answer: 'Project costs depend on scope, complexity, and requirements. We provide detailed quotes after understanding your needs. Contact us for a free consultation and estimate.' },
  ];

  return (
    <section id="faq" style={{padding:'96px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.05), transparent)'}}/>
      <div style={{maxWidth:'48rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px'}}><Icons.HelpCircle/> FAQ</span>
          <h2 className="section-title" style={{fontSize:'2.5rem',marginTop:'16px',marginBottom:'24px'}}>Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item glass">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{width:'100%',padding:'16px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',textAlign:'left',background:'none',border:'none',color:'#fff',cursor:'pointer'}}>
                <span style={{fontWeight:'500',paddingRight:'16px'}}>{faq.question}</span>
                <Icons.Plus style={{color:'#38bdf8',width:'20px',height:'20px',flexShrink:0,transform: openIndex === i ? 'rotate(45deg)' : 'none',transition:'transform .2s'}}/>
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p style={{padding:'0 24px 16px',color:'#9ca3af',fontSize:'14px'}}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: 'LiDAR Scanning & Processing', category: 'LiDAR Engineering', description: 'High-precision 3D point cloud acquisition and processing for terrain modeling', color: 'from-green-500 to-emerald-600', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop', features: ['Terrestrial LiDAR', 'Airborne LiDAR', 'Mobile Mapping', 'Point Cloud Processing'], details: 'Our LiDAR engineering services deliver centimeter-level accuracy for infrastructure planning, topographic mapping, and asset management.' },
    { title: 'BIM Modeling Services', category: 'BIM & Scan-to-BIM', description: 'As-built BIM models from laser scans for construction and renovation projects', color: 'from-blue-500 to-indigo-600', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop', features: ['Architectural BIM', 'Structural BIM', 'MEP Modeling', 'Scan-to-BIM Conversion'], details: 'Transform reality into digital information with our BIM services.' },
    { title: 'SEO & Digital Marketing', category: 'Digital Marketing', description: 'Data-driven digital marketing strategies to boost your online presence and conversions', color: 'from-orange-500 to-red-500', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', features: ['Search Engine Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'], details: 'Grow your business with our comprehensive digital marketing services.' },
    { title: 'UI/UX Design', category: 'UI & UX Services', description: 'User-centered design that creates intuitive and engaging digital experiences', color: 'from-purple-500 to-pink-600', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'], details: 'Create digital products users love with our UI/UX design services.' },
    { title: 'Web Development', category: 'Web Development', description: 'Modern, responsive websites built with cutting-edge technologies', color: 'from-cyan-500 to-blue-600', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop', features: ['React & Next.js', 'E-commerce', 'Progressive Web Apps', 'CMS Integration'], details: 'Build powerful web applications that scale with your business.' },
    { title: 'Mobile App Development', category: 'Mobile Development', description: 'Native and cross-platform mobile applications for iOS and Android', color: 'from-violet-500 to-purple-600', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'], details: 'Bring your ideas to mobile with our app development services.' },
  ];

  return (
    <>
      <section id="portfolio" style={{padding:'96px 0',position:'relative'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.05), transparent)'}}/>
        <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <span style={{color:'#38bdf8',fontWeight:'500',fontSize:'14px',textTransform:'uppercase',letterSpacing:'.1em',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px'}}><Icons.Briefcase/> Our Work</span>
            <h2 className="section-title" style={{marginTop:'16px',marginBottom:'24px'}}>Featured <span className="gradient-text">Projects</span></h2>
            <p style={{color:'#9ca3af',maxWidth:'42rem',margin:'0 auto'}}>Explore our portfolio of successful projects across LiDAR, BIM, Digital Marketing, UI/UX, and more.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'24px'}}>
            {projects.map((project, i) => (
              <div key={i} className="glass" style={{borderRadius:'16px',overflow:'hidden',cursor:'pointer'}} onClick={() => setSelectedProject(project)}>
                <div style={{position:'relative',height:'192px',overflow:'hidden'}}>
                  <img src={project.image} alt={project.title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s'}}/>
                  <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg, ${project.color.split(' ')[0]}, ${project.color.split(' ')[1]})`,opacity:.6}}/>
                  <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Icons.Layers style={{color:'rgba(255,255,255,.8)',width:'40px',height:'40px'}}/>
                  </div>
                </div>
                <div style={{padding:'24px'}}>
                  <span style={{fontSize:'12px',color:'#38bdf8',fontWeight:'500',textTransform:'uppercase',letterSpacing:'.05em'}}>{project.category}</span>
                  <h3 style={{fontSize:'20px',fontWeight:'600',marginTop:'8px',marginBottom:'8px'}}>{project.title}</h3>
                  <p style={{color:'#9ca3af',fontSize:'14px',marginBottom:'16px'}}>{project.description}</p>
                  <span style={{fontSize:'14px',color:'#d1d5db',display:'flex',alignItems:'center',gap:'8px'}}>View Details <Icons.ExternalLink style={{width:'14px',height:'14px'}}/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass" onClick={e => e.stopPropagation()}>
            <div style={{position:'relative',height:'256px'}}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg, ${selectedProject.color.split(' ')[0]}, ${selectedProject.color.split(' ')[1]})`,opacity:.7}}/>
              <button onClick={() => setSelectedProject(null)} style={{position:'absolute',top:'16px',right:'16px',width:'40px',height:'40px',borderRadius:'50%',background:'rgba(0,0,0,.5)',border:'none',color:'#fff',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}><Icons.X/></button>
              <div style={{position:'absolute',bottom:'24px',left:'24px'}}>
                <span style={{padding:'4px 12px',borderRadius:'9999px',background:'rgba(255,255,255,.2)',fontSize:'14px',color:'#fff'}}>{selectedProject.category}</span>
              </div>
            </div>
            <div style={{padding:'32px'}}>
              <h2 style={{fontSize:'30px',fontWeight:'700',marginBottom:'16px'}}>{selectedProject.title}</h2>
              <p style={{color:'#d1d5db',marginBottom:'24px'}}>{selectedProject.details}</p>
              <h3 style={{fontSize:'18px',fontWeight:'600',marginBottom:'16px',display:'flex',alignItems:'center',gap:'8px'}}><Icons.CheckCircle style={{color:'#38bdf8',width:'20px',height:'20px'}}/> Key Features</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'12px',marginBottom:'32px'}}>
                {selectedProject.features.map((feature, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',color:'#d1d5db'}}>
                    <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#38bdf8'}}/> {feature}
                  </div>
                ))}
              </div>
              <a href="#contact" onClick={() => setSelectedProject(null)} className="btn-primary" style={{display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none'}}>
                Start Your Project <Icons.ArrowRight/>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { Icon: Icons.Mail, title: 'Email Us', value: 'elegancegeoinfotech06@gmail.com', link: 'mailto:elegancegeoinfotech06@gmail.com' },
    { Icon: Icons.Phone, title: 'Call Us', value: '+91 63691 26125', link: 'tel:+916369126125' },
    { Icon: Icons.MapPin, title: 'Visit Us', value: 'Thippampatti, Dharmapuri, Tamilnadu, India', link: '#' },
  ];

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
  );
};

const Footer = () => {
  const footerLinks = {
    Services: ['Web Development', 'Mobile Apps', 'LiDAR Scanning', 'BIM Modeling', 'SEO & Marketing'],
    Company: ['About Us', 'Our Team', 'Contact', 'Careers'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
  };

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
            <p style={{color:'#9ca3af',fontSize:'14px'}}>© 2026 Elegance IT & Geo Infotech. All rights reserved.</p>
            <p style={{color:'#6b7280',fontSize:'12px'}}>Crafted with care in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a href="https://wa.me/916369126125" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
    <Icons.MessageCircle style={{color:'#fff',width:'28px',height:'28px'}}/>
    <span style={{position:'absolute',top:'-4px',right:'-4px',width:'16px',height:'16px',background:'#ef4444',borderRadius:'50%',animation:'pulse 2s ease-in-out infinite'}}/>
  </a>
);

function App() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f'}}>
      <Navbar/>
      <HeroSection/>
      <AnimatedStatsSection/>
      <ServicesSection/>
      <FAQSection/>
      <ClientLogosSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <CertificationsSection/>
      <PortfolioSection/>
      <ContactSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App
