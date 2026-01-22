import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Footer from './components/Footer/footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Footer/>
  </StrictMode>,
)
