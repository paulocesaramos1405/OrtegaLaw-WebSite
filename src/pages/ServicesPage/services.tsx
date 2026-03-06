import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/ContactUs/ContactUs";
import CardLarge from "@/components/CardLarge/CardLarge";

const Services: React.FC = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>PRACTICE AREAS</h1>
      </section>

      {/* INTRO */}
      <section style={styles.introSection}>
        <h2 style={styles.introTitle}>Our Diverse Practice Areas</h2>

        <p style={styles.introText}>
          At Ortega Law, we are committed to delivering exceptional legal
          services across a diverse range of practice areas. Our experienced
          team of attorneys is dedicated to guiding clients through complex
          legal challenges with expertise, compassion, and integrity. Whether
          you need assistance with family law matters, personal injury claims,
          or immigration issues, we offer tailored solutions to meet your unique
          needs. Explore our practice areas to discover how we can support you
          in achieving the best possible outcomes.
        </p>
      </section>

      {/* SERVICES CARDS */}
      <section style={styles.cardsSection}>
        <div style={styles.cardsGrid}>
          <CardLarge
            title="Family Law"
            description="Family legal issues require sensitivity, clarity, and firm legal protection. At Ortega Law, we help clients navigate matters such as divorce, child custody, and support with integrity, strategy, and respect."
          />

          <CardLarge
            title="Business Immigration"
            description="Our firm assists companies and entrepreneurs in navigating the complexities of U.S. immigration law, ensuring compliance while securing opportunities for growth and expansion."
          />

          <CardLarge
            title="Individual Immigration"
            description="We help individuals and families pursue visas, residency, and citizenship with clear guidance and strong legal representation throughout every stage of the immigration process."
          />

          <CardLarge
            title="Personal Injury"
            description="If you have been injured due to negligence, our team is dedicated to protecting your rights and helping you obtain the compensation you deserve."
          />
        </div>
      </section>

      {/* CONTACT US */}
      <section style={styles.contactUs}>
        <ContactUs />
      </section>

      <Footer />
    </>
  );
};

export default Services;

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    height: "420px",
    backgroundImage: "url(src/assets/images/practice.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroTitle: {
    fontSize: "64px",
    color: "#FFFFFF",
    fontWeight: 700,
    letterSpacing: "2px",
  },

  introSection: {
    padding: "80px 20px",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
  },

  introTitle: {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "30px",
    color: "#111",
  },

  introText: {
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#333",
  },

  cardsSection: {
    backgroundColor: "#FFFFFF",
    paddingBottom: "100px",
  },

  cardsGrid: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gap: "40px",
    justifyItems: "center",
  },

  contactUs: {
    display: "flex",
    justifyContent: "center",
    padding: "80px 20px",
    backgroundColor: "#F9F9F9",
  },
};