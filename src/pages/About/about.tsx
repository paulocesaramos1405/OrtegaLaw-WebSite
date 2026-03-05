import React from "react";
import Header from '../../components/Header/header.tsx';
import Footer from '../../components/Footer/footer.tsx';
import ContactUs from '../../components/ContactUs/contactUs.tsx';
import BtnCall from '../../components/ButtonCall/btnCall.tsx';
import BtnWpp from '../../components/ButtonWhatsApp/btnWpp.tsx';

import aboutHero from "@/assets/images/about-hero.jpg";
import lawyerImg from "@/assets/images/lawyer-about.jpg";


const PRIMARY_BLUE = "#1E3A8A";
const DARK_SECTION = "#2F3542";

const About: React.FC = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>ABOUT US</h1>
      </section>

      {/* PRESENTATION SECTION */}
      <section style={styles.presentationSection}>
        <div style={styles.presentationContainer}>
          <img src={lawyerImg} alt="Lawyer" style={styles.lawyerImage} />

          <div style={styles.presentationText}>
            <h2 style={styles.sectionTitle}>
              Committed to Upholding Justice
              <br />
              and Elevating your Rights
            </h2>

            <p style={styles.paragraph}>
              We are dedicated to providing exceptional legal services with
              professionalism and integrity. Our mission is to protect your
              rights and ensure the best outcomes for your case.
            </p>

            <p style={styles.paragraph}>
              With years of experience, we stand ready to guide you through
              complex legal challenges with clarity and confidence.
            </p>

            <div style={styles.buttonRow}>
              <BtnWpp />
              <BtnCall />
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section style={styles.bioSection}>
        <div style={styles.bioContainer}>
          <h2 style={styles.bioTitle}>BIOGRAPHY</h2>

          <p style={styles.bioText}>
            Camilo Ortega, Esq., is an experienced and results-driven attorney.
            He has successfully represented clients in complex legal matters,
            providing strategic solutions and dedicated advocacy.
          </p>

          <p style={styles.bioText}>
            His practice is built on trust, transparency, and relentless
            commitment to achieving favorable outcomes.
          </p>
        </div>
      </section>

      {/* CONTACT US (REUSO DO COMPONENTE) */}
      <ContactUs />

      <Footer />
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    height: "350px",
    backgroundImage: `url(${aboutHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  heroTitle: {
    color: "#fff",
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: "2px",
  },

  presentationSection: {
    backgroundColor: DARK_SECTION,
    padding: "100px 120px",
    color: "#fff",
  },

  presentationContainer: {
    display: "flex",
    gap: "80px",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  lawyerImage: {
    width: "420px",
    borderRadius: "20px",
    objectFit: "cover",
  },

  presentationText: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "30px",
  },

  paragraph: {
    fontSize: "16px",
    lineHeight: 1.8,
    marginBottom: "20px",
  },

  buttonRow: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
  },

  bioSection: {
    backgroundColor: "#ffffff",
    padding: "100px 120px",
  },

  bioContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  bioTitle: {
    fontSize: "28px",
    marginBottom: "40px",
    color: PRIMARY_BLUE,
    fontWeight: 600,
  },

  bioText: {
    fontSize: "16px",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "#333",
  },
};

export default About;