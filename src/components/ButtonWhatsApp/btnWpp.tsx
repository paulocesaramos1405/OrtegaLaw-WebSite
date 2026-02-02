import React, { useState } from 'react';
import { Button } from 'antd';

const BtnWpp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const normalIcon = '/src/assets/images/btnWpp1.png';
  const hoverIcon = '/src/assets/images/btnWpp2.png';

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
        fontSize: '27px',
        fontWeight: 'medium',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '259px',
        height: '69px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
        Contact Now
      <img 
        src={isHovered ? hoverIcon : normalIcon} 
        alt="Phone icon"
        style={{
          width: '54px',
          height: '54px',
          transition: 'all 0.0s ease',
          marginLeft: '',
        }}
      />
    </Button>
  );
};

export default BtnWpp;