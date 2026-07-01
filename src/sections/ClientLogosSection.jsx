import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../animations'

export const ClientLogosSection = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'GeoSystems', logo: 'GS' },
    { name: 'BuildRight', logo: 'BR' },
    { name: 'DataPro', logo: 'DP' },
    { name: 'CloudBase', logo: 'CB' },
    { name: 'MapMaster', logo: 'MM' },
  ]

  return (
    <section style={{padding:'64px 0',position:'relative'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{textAlign:'center',marginBottom:'48px'}}
        >
          <span className="section-badge" style={{justifyContent:'center'}}>Trusted By</span>
          <h3 style={{fontSize:'1.25rem',fontWeight:'500',marginTop:'8px',color:'#6b7280'}}>Our Trusted Partners & Clients</h3>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'24px'}}
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass"
              style={{borderRadius:'12px',padding:'16px 28px',display:'flex',alignItems:'center',gap:'12px',cursor:'pointer'}}
            >
              <div style={{width:'42px',height:'42px',borderRadius:'10px',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',fontSize:'14px',color:'#fff'}}>
                {client.logo}
              </div>
              <span style={{fontWeight:'500',color:'#d1d5db',fontSize:'15px'}}>{client.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
