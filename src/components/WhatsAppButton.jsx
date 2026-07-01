import * as Icons from 'lucide-react'

export const WhatsAppButton = () => (
  <a href="https://wa.me/916369126125" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
    <Icons.MessageCircle style={{color:'#fff',width:'28px',height:'28px'}}/>
    <span style={{position:'absolute',top:'-4px',right:'-4px',width:'16px',height:'16px',background:'#ef4444',borderRadius:'50%',animation:'pulse 2s ease-in-out infinite'}}/>
  </a>
)
