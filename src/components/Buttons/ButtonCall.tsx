import React, { useState } from 'react';
import { Button } from 'antd';
import btnCall2 from '@/assets/images/btnCall1.png';
import btnCall1 from '@/assets/images/btnCall2.png';

const BtnCall: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      type="primary"
      shape="round"
      size="large"
      href="tel:+1234567890"
      style={{
        position: 'relative',
        backgroundColor: isHovered ? '#C79855' : '#FFFFFF',
        border: 'none',
        color: isHovered ? '#FFFFFF' : '#C79855',
        fontSize: '26px',
        fontWeight: 700,
        width: '280px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '70px', // espaço reservado para o ícone
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      Call To Us

      {/* Ícone fixo à direita */}
      <div
        style={{
          position: 'absolute',
          right: '6px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: isHovered ? '#C79855' : '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        <img
          src={isHovered ? btnCall1 : btnCall2}
          alt="Call icon"
          style={{
            width: '50px',
            height: '50px',
          }}
        />
      </div>
    </Button>
  );
};

export default BtnCall;