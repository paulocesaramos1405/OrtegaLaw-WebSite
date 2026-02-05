import Home from './pages/Home'
import Footer from './components/Footer/footer'
import BtnCall from './components/ButtonCall/btnCall'
import BtnWpp from './components/ButtonWhatsApp/btnWpp'
import BtnSend from './components/ButtonSend/btnSend'
import CardFAQ from './components/CardSmall/cardSmall'

export default function App() {
  return (
    <>
      <Home />
      <CardFAQ />
      <Footer />

      <BtnCall />
      <BtnWpp />
      <BtnSend />
    </>
  )
}
