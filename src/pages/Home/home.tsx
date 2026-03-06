import React from "react";

import MainLayout from "../../layouts/MainLayout";

import CardSmall from "../../components/CardSmall/CardSmall";
import ContactUs from "../../components/ContactUs/ContactUs";
import Testimonials from "../../components/Testimonials/Testimonials";

import ButtonCall from "../../components/Buttons/ButtonCall";
import ButtonWhatsApp from "../../components/Buttons/ButtonWhatsApp";

import styles from "./Home.module.css";

const services = [
  {
    title: "Family Law",
    description: "Understanding Family Law in Florida."
  },
  {
    title: "Business Immigration",
    description: "Navigating business immigration."
  },
  {
    title: "Individual Immigration",
    description: "Your journey to a new beginning."
  },
  {
    title: "Personal Injury",
    description: "Advocating for your right to fair compensation."
  }
];

const Home: React.FC = () => {
  return (
    <MainLayout>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">

          <h1>
            Legal guidance with compassion and commitment.
          </h1>

          <p>
            Guided by faith and integrity, we stand by your side
            through life’s challenges.
          </p>

          <div className={styles.buttons}>
            <ButtonWhatsApp />
            <ButtonCall />
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className={styles.about}>
        <div className="container">

          <div className={styles.aboutGrid}>

            <div className={styles.aboutImage} />

            <div>

              <h2>Your Advocate. Grounded in Truth and Grace.</h2>

              <p>
                Camilo D. Ortega is a civil litigation attorney with
                over 15 years of experience.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className={styles.services}>
        <div className="container">

          <h2>SERVICES</h2>

          <div className={styles.servicesGrid}>

            {services.map((service, index) => (
              <CardSmall
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}

          </div>

        </div>
      </section>


      {/* TESTIMONIALS */}
      <section>
        <Testimonials />
      </section>


      {/* CONTACT */}
      <section>
        <ContactUs />
      </section>

    </MainLayout>
  );
};

export default Home;