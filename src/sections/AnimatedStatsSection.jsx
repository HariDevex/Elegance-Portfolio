import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { CountUp } from '../components/CountUp'
import { staggerContainer, staggerItem } from '../animations'

export const AnimatedStatsSection = () => {
  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', Icon: Icons.Award },
    { value: 1500, suffix: '+', label: 'Projects Completed', Icon: Icons.Briefcase },
    { value: 900, suffix: '+', label: 'Happy Clients', Icon: Icons.Users },
    { value: 30, prefix: '$', suffix: 'M+', label: 'Revenue Generated', Icon: Icons.TrendingUp },
  ]

  return (
    <section style={{padding:'80px 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at center, rgba(14,165,233,.06) 0%, transparent 70%)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:'24px'}}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass card-glow"
              style={{borderRadius:'16px',padding:'24px',textAlign:'center'}}
            >
              <div style={{width:'56px',height:'56px',margin:'0 auto 16px',borderRadius:'16px',background:'rgba(14,165,233,.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <stat.Icon style={{color:'#38bdf8',width:'28px',height:'28px'}}/>
              </div>
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix}/>
              <p style={{color:'#9ca3af',fontSize:'14px',marginTop:'8px'}}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
