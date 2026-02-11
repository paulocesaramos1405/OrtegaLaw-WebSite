import React from 'react';
import { Image } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import logo from '@/assets/images/LionLogo.png';
import floridaFlag from '@/assets/images/floridaFlag.png';
import usaFlag from '@/assets/images/euaFlag.png';

const Header: React.FC = () => {
  const menuLinks = [
    'Home',
    'About',
    'Services',
    'Contact',
    'FAQ',
    'Privacy Policy',
  ];

  return (
    <header style={styles.header}>
      
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <div style={styles.topContainer}>
          
          {/* LEFT (empty for balance) */}
          <div style={{ width: '200px' }} />

          {/* ADDRESS */}
          <span style={styles.address}>
            50 SE Ocean Blvd., Suite #203 Stuart, FL. 34994
          </span>

          {/* FLAGS */}
          <div style={styles.flags}>
            <Image src={floridaFlag} preview={false} style={styles.flag} />
            <Image src={usaFlag} preview={false} style={styles.flag} />
          </div>

        </div>
      </div>

      {/* MAIN NAV */}
      <div style={styles.mainBar}>
        <div style={styles.mainContainer}>
          
          {/* LOGO */}
          <div style={styles.logo}>
            <Image src={logo} preview={false} style={{ height: '48px' }} />
          </div>

          {/* MENU */}
          <nav style={styles.nav}>
            {menuLinks.map(link => (
              <a key={link} href="#" style={styles.link}>
                {link}
              </a>
            ))}
          </nav>

          {/* PHONE */}
          <div style={styles.phone}>
            <PhoneOutlined style={{ marginRight: '6px', transform: 'scaleX(-1)'}} />
            +1 (786) 452-9709
          </div>

        </div>
      </div>

    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },

  /* TOP BAR */
  topBar: {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    fontSize: '12px',
  },

  topContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '6px 20px',
    display: 'flex',
    alignItems: 'center',
  },

  address: {
    flex: 1,
    textAlign: 'right',
    marginRight: '20px',
  },

  flags: {
    display: 'flex',
    gap: '20px',
  },

  flag: {
    height: '16px',
    width: 'auto',
  },

  /* MAIN BAR */
  mainBar: {
    padding: '14px 0',
  },

  mainContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
  },

  logo: {
    width: '200px',
  },

  nav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '28px',
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '13px',
    letterSpacing: '2px',
    transition: 'color 0.2s ease',
  },

  phone: {
    width: '200px',
    textAlign: 'right',
    fontSize: '13px',
    fontWeight: 500,
  },
};

export default Header;
