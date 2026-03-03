import React, { useState } from 'react';
import ButtonCall from '../ButtonCall/btnCall';
import ButtonSend from '../ButtonSend/btnSend';
import ButtonWhatsApp from '../ButtonWhatsApp/btnWpp';

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>CONTACT US</h2>
      <p style={styles.subtitle}>
        Take the first step toward protecting your future.
      </p>

      <div style={styles.container}>
        {/* LEFT SIDE - FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name:"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="phone"
            placeholder="Your phone number:"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="email"
            placeholder="Email:"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <select
  name="service"
  value={form.service}
  onChange={handleChange}
  style={styles.input}
>
  <option value="" style={{ color: '#000' }}>
    Select your service:
  </option>
  <option value="family" style={{ color: '#000' }}>
    Family Law
  </option>
  <option value="divorce" style={{ color: '#000' }}>
    Divorce
  </option>
  <option value="custody" style={{ color: '#000' }}>
    Child Custody
  </option>
</select>

          {/* BOTÃO SEND */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ButtonSend />
          </div>
        </form>

        {/* DIVIDER */}
        <div style={styles.divider}></div>

        {/* RIGHT SIDE - ACTION BUTTONS */}
        <div style={styles.actions}>
          <ButtonWhatsApp />
          <ButtonCall />
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: '#3D414D',
    padding: '50px 40px',
    borderRadius: '20px',
    color: '#fff',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  title: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '10px',
  },

  subtitle: {
    textAlign: 'center',
    color: '#C79855',
    marginBottom: '40px',
    fontSize: '18px',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flex: 1,
    minWidth: '280px',
  },

  input: {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    color: '#000000',
  },

  divider: {
    width: '1px',
    backgroundColor: '#ccc',
    minHeight: '220px',
  },

  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    minWidth: '250px',
  },
  option: {
    backgroundColor: '#3D414D',
    color: '#0000',
  },
};


export default ContactUs;
