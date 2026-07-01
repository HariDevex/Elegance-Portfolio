import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, staggerItem } from '../animations'

export const CertificationsSection = () => {
  const certs = [
    { name: 'ISO 9001:2015', Icon: Icons.BadgeCheck, desc: 'Quality Management' },
    { name: 'Google Partner', Icon: Icons.Hexagon, desc: 'Digital Marketing' },
    { name: 'AWS Certified', Icon: Icons.Cloud, desc: 'Cloud Services' },
    { name: 'GIS Professional', Icon: Icons.MapPin, desc: 'GIS Solutions' },
  ]

  return (
    <section style={{padding:'48px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'20px'}}
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-strong"
              style={{display:'flex',alignItems:'center',gap:'12px',borderRadius:'9999px',padding:'12px 24px'}}
            >
              <cert.Icon style={{color:'#38bdf8',width:'20px',height:'20px'}}/>
              <div>
                <span style={{fontWeight:'500',fontSize:'14px'}}>{cert.name}</span>
                <span style={{color:'#9ca3af',fontSize:'12px',display:'block'}}>{cert.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
