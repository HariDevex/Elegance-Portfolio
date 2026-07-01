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
  )
}
