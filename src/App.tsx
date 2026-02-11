import Home from './pages/Home'
import Footer from './components/Footer/footer'
import BtnCall from './components/ButtonCall/btnCall'
import BtnWpp from './components/ButtonWhatsApp/btnWpp'
import BtnSend from './components/ButtonSend/btnSend'
import CardSmall from './components/CardSmall/cardSmall'
import  Header  from './components/Header/header'
import CardLarge from './components/CardLarge/cardLarge'
import CardFAQ from './components/CardFAQ/cardFAQ'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <CardSmall />
      <CardLarge />
      <BtnCall />
      <BtnWpp />
      <BtnSend />
      <CardFAQ
  title="How can a Family Law attorney assist with divorce proceedings, and what factors determine whether it will be contested or uncontested?"
  content="A Family Law attorney can provide legal guidance and representation throughout the divorce process, including filing paperwork, negotiating settlements, and representing clients in court if necessary. Whether a divorce is contested or uncontested depends on whether the spouses can agree on key issues such as child custody, property division, and alimony. Contested divorces involve disputes that require resolution by a judge, while uncontested divorces occur when spouses agree on all relevant matters."
/>
      <Footer />

    </>
  )
}
