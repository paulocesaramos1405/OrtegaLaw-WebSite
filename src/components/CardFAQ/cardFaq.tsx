import React, { useState } from 'react';
import { Button } from 'antd';

const CardFAQ: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <Button 
      type="primary"
      shape="round"
      size="large"
      href="tel:+1234567890"
      style={{ 
        backgroundColor: isHovered ? '#3D414D' :  '#3D414D', 
        borderColor: '#1111', 
        color: isHovered ? '#FFFFFF' : '#C79855',
        fontSize: '27px',
        fontWeight: 'medium',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '280px',
        height: '320px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
        Family Law
    </Button>
  );
};

export default CardFAQ;