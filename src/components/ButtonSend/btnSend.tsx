import React, { useState } from 'react';
import { Button } from 'antd';

const BtnSend: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button 
      type="primary"
      shape="round"
      size="large"
      href="tel:+1234567890"
      style={{ 
        backgroundColor: isHovered ? '#FFFF' :  '#C79855', 
        borderColor: '#1111', 
        color: isHovered ? '#C79855' : '#FFFFFF',
        fontSize: '26px',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '110px',
        height: '50px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
        Send
    </Button>
  );
};

export default BtnSend;