import * as Icons from 'lucide-react'
import { CountUp } from '../components/CountUp'

export const AnimatedStatsSection = () => {
  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', Icon: Icons.Award },
    { value: 1500, suffix: '+', label: 'Projects Completed', Icon: Icons.Briefcase },
    { value: 900, suffix: '+', label: 'Happy Clients', Icon: Icons.Users },
    { value: 30, prefix: '$', suffix: 'M+', label: 'Revenue Generated', Icon: Icons.TrendingUp },
  ]

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
  )
}
