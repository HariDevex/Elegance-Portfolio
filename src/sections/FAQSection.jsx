import { useState } from 'react'
import * as Icons from 'lucide-react'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: 'What services does Elegance IT & Geo Infotech offer?', answer: 'We offer a comprehensive range of IT services including Web Development, Mobile App Development, GIS & Mapping Solutions, Graphic Design, Data Management, Cloud Solutions, Software Development, and Cybersecurity services.' },
    { question: 'How long does it take to complete a project?', answer: 'Project timelines vary based on complexity. A simple website can take 2-4 weeks, while complex applications may take 2-6 months. We provide detailed timelines during our initial consultation.' },
    { question: 'Do you provide post-launch support?', answer: 'Yes! We offer comprehensive post-launch support including bug fixes, updates, security patches, and optional maintenance packages to keep your project running smoothly.' },
    { question: 'What technologies do you work with?', answer: 'We work with modern technologies including React, Next.js, React Native, Flutter, Python, Node.js, AWS, Azure, and various GIS platforms like QGIS and ArcGIS.' },
    { question: 'Can you help with existing projects?', answer: 'Absolutely! We can take over existing projects, perform code audits, optimize performance, add new features, or help with migration to modern technologies.' },
    { question: 'How much does a typical project cost?', answer: 'Project costs depend on scope, complexity, and requirements. We provide detailed quotes after understanding your needs. Contact us for a free consultation and estimate.' },
  ]

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
  )
}
