import React, { useState } from 'react';

interface AccordionCardProps {
  title: string;
  content: string;
}

const CardFAQ: React.FC<AccordionCardProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: hover ? '#3A3E49' : '#2F323C',
        borderLeft: open ? '10px solid #C79855' : '4px solid transparent',
        maxHeight: open ? '500px' : '90px',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* HEADER */}
      <div style={styles.header} onClick={() => setOpen(!open)}>
        <span
          style={{
            ...styles.title,
            color: open ? '#C79855' : '#FFFFFF',
          }}
        >
          {title}
        </span>

        <span
          style={{
            ...styles.icon,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </div>

      {/* CONTENT */}
      <div
        style={{
          ...styles.content,
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
          marginTop: open ? '14px' : '0',
        }}
      >
        {content}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: '600px',
    borderRadius: '10px',
    padding: '18px 20px',
    marginBottom: '14px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '1.4',
    maxWidth: '90%',
  },

  icon: {
    color: '#C79855',
    transition: 'transform 0.3s ease',
    fontSize: '12px',
  },

  content: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#E0E0E0',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },
};

export default CardFAQ;
