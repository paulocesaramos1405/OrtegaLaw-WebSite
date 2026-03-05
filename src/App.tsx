import Home from './pages/Home/home.tsx'
import Footer from './components/Footer/footer.tsx'
import BtnCall from './components/ButtonCall/btnCall.tsx'
import BtnWpp from './components/ButtonWhatsApp/btnWpp.tsx'
import BtnSend from './components/ButtonSend/btnSend.tsx'
import CardSmall from './components/CardSmall/cardSmall.tsx'
import Header  from './components/Header/header.tsx'
import CardLarge from './components/CardLarge/cardLarge.tsx'
import CardFAQ from './components/CardFAQ/cardFAQ.tsx'
import ContactForm from './components/ContactUs/contactUs.tsx'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <ContactForm />
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
