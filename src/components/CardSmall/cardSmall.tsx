import React, { useState } from 'react';

interface CardSmallProps {
  title: string;
  description: string;
}

const CardSmall: React.FC<CardSmallProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{ width: '260px', height: '300px', perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s ease, box-shadow 0.3s ease',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          boxShadow: isHovered
            ? '0 15px 35px rgba(0,0,0,0.35)'
            : '0 8px 20px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          borderRadius: '14px',
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#3D414D',
            color: isHovered ? '#C79855' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 600,
            textAlign: 'center',
            padding: '20px',
            backfaceVisibility: 'hidden',
            borderRadius: '14px',
            transition: 'color 0.3s ease',
          }}
        >
          {title}
        </div>

        {/* BACK */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#3D414D',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
            fontSize: '16px',
            lineHeight: '1.5',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            borderRadius: '14px',
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardSmall;