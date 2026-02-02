import React, { useState } from 'react';
import { Button } from 'antd';

const BtnCall: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const normalIcon = '/src/assets/images/btnCall1.png';
  const hoverIcon = '/src/assets/images/btnCall2.png';

  return (
    <Button 
      type="primary"
      shape="round"
      size="large"
      href="tel:+1234567890"
      style={{ 
        backgroundColor: isHovered ? '#C79855' :  '#FFFF', 
        borderColor: '#1111', 
        color: isHovered ? '#FFFFFF' : '#C79855',
        fontSize: '27px',
        fontWeight: 'medium',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '296px',
        height: '69px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
        Call To Us
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

export default BtnCall;