import React, { useState } from 'react';
import { Button } from 'antd';
import btnWpp2 from '@/assets/images/btnWpp1.png';
import btnWpp1 from '@/assets/images/btnWpp2.png';

const BtnWpp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      type="primary"
      shape="round"
      size="large"
      href="https://wa.me/1234567890"
      style={{
        position: 'relative',
        backgroundColor: isHovered ? '#FFFFFF' : '#C79855',
        border: 'none',
        color: isHovered ? '#C79855' : '#FFFFFF',
        fontSize: '26px',
        fontWeight: 700,
        width: '260px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '70px', // espaço para o ícone
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      Contact Now

      {/* ÍCONE FIXO NA DIREITA */}
      <div
        style={{
          position: 'absolute',
          right: '6px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: isHovered ? '#FFFFFF' : '#C79855',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        <img
          src={isHovered ? btnWpp1 : btnWpp2}
          alt="WhatsApp"
          style={{
            width: '50px',
            height: '50px',
          }}
        />
      </div>
    </Button>
  );
};

export default BtnWpp;