import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, staggerItem, cardHover } from '../animations'

export const ServicesSection = () => {
  const services = [
    { Icon: Icons.Globe, title: 'Web Development', description: 'Build modern, responsive websites and web applications that drive engagement and conversions.', features: ['Custom Websites', 'E-commerce Solutions', 'Progressive Web Apps', 'WordPress & CMS'], color: '#0ea5e9', gradient: 'from-blue-500 to-cyan-500' },
    { Icon: Icons.Smartphone, title: 'Mobile App Development', description: 'Create powerful mobile applications for iOS and Android that users love.', features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'], color: '#8b5cf6', gradient: 'from-purple-500 to-pink-500' },
    { Icon: Icons.MapPin, title: 'GIS & Mapping', description: 'Leverage geographic data with advanced mapping and spatial analysis solutions.', features: ['Interactive Maps', 'Spatial Analysis', 'GeoData Integration', 'Location Services'], color: '#10b981', gradient: 'from-emerald-500 to-teal-500' },
    { Icon: Icons.Palette, title: 'Graphic Design', description: 'Stunning visual designs that capture your brand essence and captivate your audience.', features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design'], color: '#f59e0b', gradient: 'from-orange-500 to-amber-500' },
    { Icon: Icons.Database, title: 'Data Management', description: 'Organize, secure, and optimize your data for actionable insights and growth.', features: ['Database Design', 'Data Migration', 'Cloud Storage', 'Analytics & Reporting'], color: '#6366f1', gradient: 'from-indigo-500 to-violet-500' },
    { Icon: Icons.Cloud, title: 'Cloud Solutions', description: 'Scale your infrastructure with reliable and cost-effective cloud services.', features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Server Management'], color: '#06b6d4', gradient: 'from-sky-500 to-blue-500' },
    { Icon: Icons.Code2, title: 'Software Development', description: 'Custom software solutions built to solve your unique business challenges.', features: ['Custom Software', 'API Development', 'Third-party Integrations', 'Legacy Modernization'], color: '#f43f5e', gradient: 'from-rose-500 to-red-500' },
    { Icon: Icons.Shield, title: 'Cybersecurity', description: 'Protect your digital assets with comprehensive security solutions.', features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'], color: '#22c55e', gradient: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section id="services" style={{padding:'96px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(14,165,233,.04), transparent)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{textAlign:'center',marginBottom:'64px'}}
        >
          <span className="section-badge"><Icons.Layers/> What We Offer</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'20px'}}>Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">Comprehensive IT & Geo Infotech solutions - From web development to GIS mapping, we deliver excellence in every project.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'24px'}}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              className="card card-glow"
              style={{cursor:'pointer',position:'relative',overflow:'hidden'}}
            >
              <div style={{position:'absolute',top:0,right:0,width:'120px',height:'120px',background: `radial-gradient(circle, ${service.color}15, transparent)`,borderRadius:'50%',transform:'translate(30%,-30%)',pointerEvents:'none'}}/>
              <div style={{width:'56px',height:'56px',borderRadius:'16px',background:`linear-gradient(135deg, ${service.color}, ${service.color}cc)`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'24px',boxShadow:`0 8px 24px ${service.color}33`}}>
                <service.Icon style={{color:'#fff'}}/>
              </div>
              <h3 style={{fontSize:'20px',fontWeight:'600',marginBottom:'12px'}}>{service.title}</h3>
              <p style={{color:'#9ca3af',fontSize:'14px',marginBottom:'16px',lineHeight:1.6}}>{service.description}</p>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
