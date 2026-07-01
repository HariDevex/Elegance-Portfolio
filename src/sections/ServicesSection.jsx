import * as Icons from 'lucide-react'

export const ServicesSection = () => {
  const services = [
    { Icon: Icons.Globe, title: 'Web Development', description: 'Build modern, responsive websites and web applications that drive engagement and conversions.', features: ['Custom Websites', 'E-commerce Solutions', 'Progressive Web Apps', 'WordPress & CMS'], color: 'from-blue-500 to-cyan-500' },
    { Icon: Icons.Smartphone, title: 'Mobile App Development', description: 'Create powerful mobile applications for iOS and Android that users love.', features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'], color: 'from-purple-500 to-pink-500' },
    { Icon: Icons.MapPin, title: 'GIS & Mapping', description: 'Leverage geographic data with advanced mapping and spatial analysis solutions.', features: ['Interactive Maps', 'Spatial Analysis', 'GeoData Integration', 'Location Services'], color: 'from-emerald-500 to-teal-500' },
    { Icon: Icons.Palette, title: 'Graphic Design', description: 'Stunning visual designs that capture your brand essence and captivate your audience.', features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design'], color: 'from-orange-500 to-amber-500' },
    { Icon: Icons.Database, title: 'Data Management', description: 'Organize, secure, and optimize your data for actionable insights and growth.', features: ['Database Design', 'Data Migration', 'Cloud Storage', 'Analytics & Reporting'], color: 'from-indigo-500 to-violet-500' },
    { Icon: Icons.Cloud, title: 'Cloud Solutions', description: 'Scale your infrastructure with reliable and cost-effective cloud services.', features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Server Management'], color: 'from-sky-500 to-blue-500' },
    { Icon: Icons.Code2, title: 'Software Development', description: 'Custom software solutions built to solve your unique business challenges.', features: ['Custom Software', 'API Development', 'Third-party Integrations', 'Legacy Modernization'], color: 'from-rose-500 to-red-500' },
    { Icon: Icons.Shield, title: 'Cybersecurity', description: 'Protect your digital assets with comprehensive security solutions.', features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'], color: 'from-green-500 to-emerald-500' },
  ]

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
  )
}
