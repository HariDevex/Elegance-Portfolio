import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, staggerItem } from '../animations'

export const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Vikram Singh', role: 'Project Manager', company: 'BuildCorp India', image: '', text: 'Their BIM models helped us win a government contract. Delivered 3 weeks early and saved us ₹4 lakhs in rework costs.', result: '₹4L saved', rating: 5 },
    { name: 'Meera Krishnan', role: 'Director', company: 'GeoVision Labs', image: '', text: 'The LiDAR survey they did for our highway project was incredibly accurate. 15,000 data points processed in just 5 days.', result: '5 days delivery', rating: 5 },
    { name: 'Anand Patel', role: 'CEO', company: 'RetailMart', image: '', text: 'Our e-commerce website went from 0 to 500 orders/day in 3 months. The SEO work alone brought us 300% more traffic.', result: '300% more traffic', rating: 5 },
  ]

  return (
    <section style={{padding:'96px 0',position:'relative'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.04), transparent)'}}/>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{textAlign:'center',marginBottom:'64px'}}
        >
          <span className="section-badge"><Icons.Quote/> Client Results</span>
          <h2 className="section-title" style={{marginTop:'16px',marginBottom:'20px'}}>Real Results, <span className="gradient-text">Real Clients</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Here's what our clients achieved with our solutions.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'24px'}}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass"
              style={{borderRadius:'16px',padding:'24px',position:'relative'}}
            >
              <div style={{position:'absolute',top:'16px',right:'16px',padding:'4px 12px',borderRadius:'9999px',background:'rgba(34,197,94,.15)'}}>
                <span style={{color:'#4ade80',fontSize:'12px',fontWeight:'700'}}>{testimonial.result}</span>
              </div>
              <Icons.Quote style={{color:'rgba(14,165,233,.3)',width:'32px',height:'32px'}}/>
              <div style={{display:'flex',alignItems:'center',gap:'16px',marginTop:'8px',marginBottom:'16px'}}>
                <img
                  src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0ea5e9&color=fff&bold=true`}
                  alt={testimonial.name}
                  style={{width:'56px',height:'56px',borderRadius:'50%',objectFit:'cover',border:'2px solid #0ea5e9'}}
                />
                <div>
                  <h4 style={{fontWeight:'600'}}>{testimonial.name}</h4>
                  <p style={{fontSize:'14px',color:'#9ca3af'}}>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <div style={{display:'flex',gap:'4px',marginBottom:'16px'}}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Icons.Star key={j} style={{color:'#facc15',fill:'#facc15',width:'14px',height:'14px'}}/>
                ))}
              </div>
              <p style={{color:'#d1d5db',fontSize:'14px',lineHeight:1.7,fontStyle:'italic'}}>"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
