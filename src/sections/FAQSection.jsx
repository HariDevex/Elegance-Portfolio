import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, staggerItem } from '../animations'

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
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, transparent, rgba(139,92,246,.04), transparent)'}}/>
      <div style={{maxWidth:'48rem',margin:'0 auto',padding:'0 16px',position:'relative',zIndex:10}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{textAlign:'center',marginBottom:'64px'}}
        >
          <span className="section-badge"><Icons.HelpCircle/> FAQ</span>
          <h2 className="section-title" style={{fontSize:'2.5rem',marginTop:'16px',marginBottom:'20px'}}>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about our services and process.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{display:'flex',flexDirection:'column',gap:'16px'}}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="faq-item glass"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{width:'100%',padding:'16px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',textAlign:'left',background:'none',border:'none',color:'#fff',cursor:'pointer'}}
              >
                <span style={{fontWeight:'500',paddingRight:'16px'}}>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{flexShrink:0}}
                >
                  <Icons.Plus style={{color:'#38bdf8',width:'20px',height:'20px'}}/>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{overflow:'hidden'}}
                  >
                    <p style={{padding:'0 24px 16px',color:'#9ca3af',fontSize:'14px',lineHeight:1.7}}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
