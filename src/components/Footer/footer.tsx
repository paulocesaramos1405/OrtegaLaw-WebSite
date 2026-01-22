import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider, Image } from 'antd';
import {
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  PinterestOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter 
      style={{ 
        backgroundColor: '#3D414D', 
        color: 'white',
        padding: '60px 20px 30px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo e Título */}
        <Row justify="center" style={{ marginBottom: '40px' }}>
          <Col xs={24} style={{ textAlign: 'center' }}>
            <Image
                src="src/assets/images/LionLogo.png"
                alt="Ortega Logo"
                preview={false}
                style={{
                    height: '80px',
                    width: 'auto',
                    maxWidth: '300px',
                    marginBottom: '16px',
                }}
            />

          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Conteúdo Principal */}
        <Row gutter={[48, 32]} justify="center">
          {/* Redes Sociais */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Title level={4} style={{ color: 'white', marginBottom: '24px' }}>
              Connect with Us
            </Title>
            <Space direction="vertical" size="middle" style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Link 
                href="https://www.linkedin.com/company/ortega-l-h/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              >
                <LinkedinOutlined style={{ marginRight: '12px', fontSize: '20px' }} />
                LinkedIn
              </Link>
              
              <Link 
                href="https://www.instagram.com/ortega_l_h/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              >
                <InstagramOutlined style={{ marginRight: '12px', fontSize: '20px' }} />
                Instagram
              </Link>
              
              <Link 
                href="https://www.youtube.com/channel/UCV3d4w9x5y8Y6z0X2Q1qCg" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              >
                <YoutubeOutlined style={{ marginRight: '12px', fontSize: '20px' }} />
                YouTube
              </Link>
              
              <Link 
                href="https://www.pinterest.com/ortega_l_h/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              >
                <PinterestOutlined style={{ marginRight: '12px', fontSize: '20px' }} />
                Pinterest
              </Link>
            </Space>
          </Col>

          {/* Endereço */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Title level={4} style={{ color: 'white', marginBottom: '24px' }}>
              Our Address
            </Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <EnvironmentOutlined style={{ 
                  color: '#c5a028', 
                  fontSize: '20px', 
                  marginRight: '12px',
                  marginTop: '4px'
                }} />
                <div>
                  <Text style={{ color: 'white', fontSize: '16px', display: 'block' }}>
                    50 S.E. Ocean Blvd., Suite #203 Stuart, FL. 34994
                  </Text>
                </div>
              </div>
            </Space>
          </Col>

          {/* Social Media Links (versão compacta) */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Title level={4} style={{ color: 'white', marginBottom: '24px'}}>
              Social Media
            </Title>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link 
                href="https://www.linkedin.com/company/ortega-l-h/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <LinkedinOutlined style={{ fontSize: '24px' }} />
              </Link>
              
              <Link 
                href="https://www.instagram.com/ortega_l_h/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <InstagramOutlined style={{ fontSize: '24px' }} />
              </Link>
              
              <Link 
                href="https://www.facebook.com/ortega.l.h." 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <FacebookOutlined style={{ fontSize: '24px' }} />
              </Link>
              
              <Link 
                href="https://twitter.com/ortega_l_h" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <TwitterOutlined style={{ fontSize: '24px' }} />
              </Link>
              
              <Link 
                href="https://www.youtube.com/channel/UCV3d4w9x5y8Y6z0X2Q1qCg" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                <YoutubeOutlined style={{ fontSize: '24px' }} />
              </Link>
            </div>

          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '40px 0' }} />

        {/* Rodapé Inferior */}
        <Row justify="center" align="middle">
          <Col xs={24} style={{ textAlign: 'center' }}>
            <Text style={{ color: '#d9d9d9' }}>
              © {currentYear} All rights reserved. Designed by Paulo César
            </Text>
          </Col>
          <Col xs={24} md={12} className="footer-bottom-text">
            <Space size="middle">
            </Space>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;