import React, { useState } from 'react';

const CardLarge: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        width: '280px',
        height: '320px',
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        style={{
          width: '600px',
          height: '225px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s ease, box-shadow 0.3s ease',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          boxShadow: isHovered
            ? '0 12px 30px rgba(0,0,0,0.35)'
            : '0 6px 16px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          borderRadius: '12px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '225px',
            backgroundColor: '#3D414D',
            color: isHovered ? '#FFFFFF' : '#C79855',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            backfaceVisibility: 'hidden',
            borderRadius: '12px',
            transition: 'color 0.3s ease',
          }}
        >
          Family Law
        </div>

        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '225px',
            backgroundColor: '#3D414D',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
            fontSize: '18px',
            lineHeight: '1.4',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            borderRadius: '12px',
          }}
        >
          Family legal issues require sensitivity, clarity, and firm legal protection. At Ortega Law, we help clients navigate matters such as divorce, child custody, and support with integrity, strategy, and respect. Our commitment is to protect your rights and secure fair, lasting solutions.
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
