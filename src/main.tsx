import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Footer from './components/Footer/footer'
import BtnCall from './components/ButtonCall/btnCall'
import BtnWpp from './components/ButtonWhatsApp/btnWpp'
import BtnSend from './components/ButtonSend/btnSend'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BtnWpp/>
  </StrictMode>,
)
