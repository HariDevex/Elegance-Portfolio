import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem } from '../animations'
import * as Icons from 'lucide-react'


export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    { title: 'LiDAR Scanning & Processing', category: 'LiDAR Engineering', description: 'High-precision 3D point cloud acquisition and processing for terrain modeling', color: 'from-green-500 to-emerald-600', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop', features: ['Terrestrial LiDAR', 'Airborne LiDAR', 'Mobile Mapping', 'Point Cloud Processing'], details: 'Our LiDAR engineering services deliver centimeter-level accuracy for infrastructure planning, topographic mapping, and asset management.' },
    { title: 'BIM Modeling Services', category: 'BIM & Scan-to-BIM', description: 'As-built BIM models from laser scans for construction and renovation projects', color: 'from-blue-500 to-indigo-600', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop', features: ['Architectural BIM', 'Structural BIM', 'MEP Modeling', 'Scan-to-BIM Conversion'], details: 'Transform reality into digital information with our BIM services.' },
    { title: 'SEO & Digital Marketing', category: 'Digital Marketing', description: 'Data-driven digital marketing strategies to boost your online presence and conversions', color: 'from-orange-500 to-red-500', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', features: ['Search Engine Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'], details: 'Grow your business with our comprehensive digital marketing services.' },
    { title: 'UI/UX Design', category: 'UI & UX Services', description: 'User-centered design that creates intuitive and engaging digital experiences', color: 'from-purple-500 to-pink-600', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'], details: 'Create digital products users love with our UI/UX design services.' },
    { title: 'Web Development', category: 'Web Development', description: 'Modern, responsive websites built with cutting-edge technologies', color: 'from-cyan-500 to-blue-600', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop', features: ['React & Next.js', 'E-commerce', 'Progressive Web Apps', 'CMS Integration'], details: 'Build powerful web applications that scale with your business.' },
    { title: 'Mobile App Development', category: 'Mobile Development', description: 'Native and cross-platform mobile applications for iOS and Android', color: 'from-violet-500 to-purple-600', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'], details: 'Bring your ideas to mobile with our app development services.' },
  ]

  return (
    <>
      <section id="portfolio" style={{padding:'96px 0',position:'relative'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.05), transparent)'}}/>
        <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10,width:'100%'}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{textAlign:'center',marginBottom:'64px'}}
          >
            <span className="section-badge" style={{justifyContent:'center'}}><Icons.Briefcase/> Our Work</span>
            <h2 className="section-title" style={{marginTop:'16px',marginBottom:'20px'}}>Featured <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">Explore our portfolio of successful projects across LiDAR, BIM, Digital Marketing, UI/UX, and more.</p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{position:'relative',zIndex:10,width:'100%',maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}
        >
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))',gap:'24px'}}>
            {projects.map((project, i) => (
              <motion.div key={i} variants={staggerItem} className="card card-glow" style={{borderRadius:'24px',overflow:'hidden',cursor:'pointer',display:'flex',flexDirection:'column'}} onClick={() => setSelectedProject(project)}>
                <div style={{position:'relative',height:'220px',overflow:'hidden',flexShrink:0}}>
                  <img src={project.image} alt={project.title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s'}}/>
                  <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg, ${project.color.split(' ')[0]}, ${project.color.split(' ')[1]})`,opacity:.5}}/>
                  <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Icons.Layers style={{color:'rgba(255,255,255,.8)',width:'48px',height:'48px'}}/>
                  </div>
                  <div style={{position:'absolute',top:'16px',left:'16px',padding:'6px 14px',borderRadius:'9999px',background:'rgba(255,255,255,.15)',backdropFilter:'blur(10px)',fontSize:'12px',color:'#fff',fontWeight:'500',textTransform:'uppercase',letterSpacing:'.05em'}}>
                    {project.category}
                  </div>
                </div>
                <div style={{padding:'28px',flex:1,display:'flex',flexDirection:'column'}}>
                  <h3 style={{fontSize:'22px',fontWeight:'700',marginBottom:'12px'}}>{project.title}</h3>
                  <p style={{color:'#9ca3af',fontSize:'14px',marginBottom:'20px',lineHeight:1.6,flex:1}}>{project.description}</p>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'20px'}}>
                    {project.features.slice(0, 3).map((feature, j) => (
                      <span key={j} style={{padding:'4px 12px',borderRadius:'9999px',background:'rgba(14,165,233,.15)',color:'#38bdf8',fontSize:'12px',fontWeight:'500'}}>
                        {feature}
                      </span>
                    ))}
                    <span style={{padding:'4px 12px',borderRadius:'9999px',background:'rgba(139,92,246,.15)',color:'#a78bfa',fontSize:'12px',fontWeight:'500'}}>
                      +{project.features.length - 3} more
                    </span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:'8px',color:'#38bdf8',fontSize:'14px',fontWeight:'500',borderTop:'1px solid rgba(255,255,255,.1)',paddingTop:'18px'}}>
                    <Icons.ExternalLink style={{width:'16px',height:'16px'}}/>
                    View Details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <AnimatePresence>
        {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="modal-content glass"
            onClick={e => e.stopPropagation()}
          >
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
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
