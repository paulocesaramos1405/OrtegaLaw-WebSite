import React from 'react';
import Header from '@/components/Header/Header';
import CardSmall from '@/components/CardSmall/CardSmall';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import ButtonCall from '@/components/ButtonCall/btnCall';
import ButtonWhatsApp from '@/components/ButtonWhatsApp/btnWpp';

/* =========================
   SERVICES DATA
========================= */

const services = [
  {
    title: 'Family Law',
    description:
      'Family Law Understanding Family Law in Florida Navigating the complexities..',
  },
  {
    title: 'Business Immigration',
    description:
      'Business Immigration Navigating Business Immigration: Your Path to Success Understanding..',
  },
  {
    title: 'Individual Immigration',
    description:
      'Individual Immigration Individual Immigration: Your Journey to a New Beginning..',
  },
  {
    title: 'Personal Injury',
    description:
      'Personal Injury Personal Injury: Advocating for Your Right to Fair..',
  },
];

/* =========================
   MAIN COMPONENT
========================= */

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClioSection />
      <TestimonialsSection />
      <ContactSection />

      <Footer />
    </>
  );
};

export default Home;

/* =========================
   HERO SECTION
========================= */

const HeroSection = () => (
  <section style={heroStyles.container}>
    <div style={heroStyles.overlay}>
      <div style={heroStyles.content}>
        <h1 style={heroStyles.title}>
          Legal guidance with compassion and commitment.
        </h1>

        <p style={heroStyles.text}>
          Guided by faith and integrity, we stand by your side through life’s challenges, remembering that ‘The Lord is my rock and my fortress’, providing strength, guidance, and justice every step of the way.”
        </p>

        <div style={heroStyles.buttons}>
          <ButtonWhatsApp />
          <ButtonCall />
        </div>
      </div>
    </div>
  </section>
);

/* =========================
   ABOUT SECTION
========================= */

const AboutSection = () => (
  <section style={aboutStyles.container}>
    <div style={aboutStyles.wrapper}>
      <div style={aboutStyles.image} />

      <div style={aboutStyles.content}>
        <h2 style={aboutStyles.title}>
          Your Advocate. Grounded in Truth and Grace.
        </h2>

        <p style={aboutStyles.text}>
          Camilo D. Ortega is a civil litigation attorney with over 15 years of
          experience, recognized for his compassionate yet strategic approach.
          He is dedicated to protecting families and businesses with integrity,
          clarity, and strong representation.
        </p>
      </div>
    </div>
  </section>
);

/* =========================
   SERVICES SECTION
========================= */

const ServicesSection = () => (
  <section style={servicesStyles.container}>
    <h2 style={servicesStyles.title}>SERVICES</h2>

    <div style={servicesStyles.grid}>
      {services.map((service, index) => (
        <CardSmall
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

/* =========================
   CLIO SECTION
========================= */

const ClioSection = () => (
  <section style={clioStyles.container}>
    <h2 style={clioStyles.title}>CLIO MANAGE</h2>

    <p style={clioStyles.text}>
      A smarter, simpler way to work with Ortega Law. Secure messaging,
      document access, billing transparency and case updates — all in one
      place.
    </p>

    <button style={clioStyles.button}>Clio Manage</button>
  </section>
);

/* =========================
   TESTIMONIALS SECTION
========================= */

const TestimonialsSection = () => (
  <section style={testimonialStyles.container}>
    <h3 style={testimonialStyles.title}>
      What Our Clients Are Saying
    </h3>

    <p style={testimonialStyles.text}>
      "Camilo Ortega is knowledgeable, professional and truly cares about his
      clients. We felt supported every step of the way and confident in his
      representation."
    </p>
  </section>
);

/* =========================
   CONTACT SECTION
========================= */

const ContactSection = () => (
  <section style={contactStyles.container}>
    <ContactUs />
  </section>
);

/* =========================
   STYLES
========================= */

const heroStyles = {
  container: {
    height: '90vh',
    backgroundImage: 'url("/src/assets/images/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  } as React.CSSProperties,

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 80px',
  } as React.CSSProperties,

  content: {
    maxWidth: '600px',
    color: '#fff',
  } as React.CSSProperties,

  title: {
    fontSize: '48px',
    fontWeight: 700,
    marginBottom: '20px',
  } as React.CSSProperties,

  text: {
    marginBottom: '30px',
    fontSize: '18px',
  } as React.CSSProperties,

  buttons: {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  flexWrap: 'wrap',
} as React.CSSProperties,

  primary: {
    backgroundColor: '#C79855',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '30px',
    cursor: 'pointer',
  } as React.CSSProperties,

  secondary: {
    background: 'transparent',
    border: '1px solid #C79855',
    color: '#C79855',
    padding: '12px 28px',
    borderRadius: '30px',
    cursor: 'pointer',
  } as React.CSSProperties,
};

const aboutStyles = {
  container: {
    padding: '100px 20px',
    backgroundColor: '#2F333D',
    color: '#fff',
  } as React.CSSProperties,

  wrapper: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
  } as React.CSSProperties,

  image: {
    width: '350px',
    height: '400px',
    backgroundColor: '#444',
    borderRadius: '20px',
  } as React.CSSProperties,

  content: {
    flex: 1,
  } as React.CSSProperties,

  title: {
    fontSize: '28px',
    marginBottom: '20px',
  } as React.CSSProperties,

  text: {
    lineHeight: 1.6,
  } as React.CSSProperties,
};

const servicesStyles = {
  container: {
    padding: '100px 20px',
    background: '#EDEDED',
    textAlign: 'center',
  } as React.CSSProperties,

  title: {
    fontSize: '32px',
    color: '#C79855',
    marginBottom: '60px',
  } as React.CSSProperties,

  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  } as React.CSSProperties,
};

const clioStyles = {
  container: {
    padding: '100px 20px',
    textAlign: 'center',
  } as React.CSSProperties,

  title: {
    fontSize: '32px',
    color: '#C79855',
    marginBottom: '30px',
  } as React.CSSProperties,

  text: {
    maxWidth: '700px',
    margin: '0 auto 30px',
    lineHeight: 1.6,
  } as React.CSSProperties,

  button: {
    backgroundColor: '#1E6FE3',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '6px',
    cursor: 'pointer',
  } as React.CSSProperties,
};

const testimonialStyles = {
  container: {
    padding: '100px 20px',
    backgroundColor: '#3D414D',
    color: '#fff',
    textAlign: 'center',
  } as React.CSSProperties,

  title: {
    color: '#C79855',
    marginBottom: '20px',
  } as React.CSSProperties,

  text: {
    maxWidth: '900px',
    margin: '0 auto',
  } as React.CSSProperties,
};

const contactStyles = {
  container: {
    padding: '100px 20px',
    background: '#f5f5f5',
  } as React.CSSProperties,
};